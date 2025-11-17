import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const SendParcel = () => {
    const {register, handleSubmit ,control,  formState:{errors} } = useForm()
    const serviceCenter = useLoaderData()
 
    const regionDuplicate = serviceCenter.map(c=>c.region)
    const region = [...new Set(regionDuplicate)]
    const senderRegion = useWatch({control, name: 'senderRegion'})
    const receiverRegion = useWatch({control , name: 'receiverRegion'})
   
    const handleDistrictsByRegion=(region)=>{
        const regionDistricts = serviceCenter.filter(d=> d.region === region)
        const districts =  regionDistricts.map(d=>d.district)
        return districts
    }
    const handleSendParcel=(data)=>{
        const isDocument = data.parcelType === 'document'
const isSameDistricts = data.senderDistricts === data.receiverDistricts
const parcelWeight = parseFloat(data.parcelWeight)
let cost = 0 
if(isDocument){
    cost = isSameDistricts ? 60 : 80
             
}
else{
if(parcelWeight < 3){
cost = isSameDistricts ? 110 : 150
}
else{
    const minCharge = isSameDistricts ? 110 : 150
    const extraWeight =  parcelWeight - 3
    const extraCharge = isSameDistricts ? extraWeight*40 : extraWeight*40 + 40
    cost = minCharge + extraCharge
}
}
Swal.fire({
  title: "Are you agree to take it?",
  text: `You will be charged ${cost} taka!`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "I agree"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Confirmed!",
      text: "Your parcel has been added.",
      icon: "success"
    });
  }
});

    }
    return (
        <div>
            <h3 className='text-5xl font-bold mt-15'>Send A Parcel</h3>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4'>
                {/* document */}
                <div className=''>
                     <label className="label mr-5">
                        <input type="radio" value="document" name="radio-1" className="radio" {...register('parcelType')} defaultChecked />
                        Document</label>
                        <label className="label">
                        <input type="radio" value="non-document" name="radio-1" className="radio" {...register('parcelType')} defaultChecked />
                      Non-Document</label>

                </div>
                {/* parcel info */}
                <div className='grid md:grid-cols-2 gap-12 my-7'>
                     <fieldset className="fieldset">
          <label className="label text-black ">Parcel Name</label>
          <input type="text" {...register("parcelName")} className="input w-full" placeholder="Parcel Name" />
   
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-black">Parcel Weight (Kg)</label>
          <input type="number" {...register("parcelWeight")} className="input w-full" placeholder="Parcel Weight (Kg)" />
   
        </fieldset>
                </div>
                {/* sender details */}
                <div className='grid md:grid-cols-2 gap-12 my-7'> 
                   
                     <fieldset className="fieldset">
                         <h3 className='text-lg font-bold'>Sender details </h3>
          <label className="label text-black">Sender Name</label>
          <input type="text" {...register("senderName")} className="input w-full" placeholder="Sender Name" />
            <label className="label text-black">Sender Email</label>
          <input type="email" {...register("senderEmail")} className="input w-full" placeholder="Sender Email" />
   <label className="label text-black">Sender Address</label>
          <input type="text" {...register("senderAddress")} className="input w-full" placeholder="Sender Address" />
          {/* region */}
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Region</legend>
  <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a region</option>
    {
        region.map((r,i)=> <option key={i} value={r}>{r}</option>)
    }
   
  
  </select>
 
</fieldset>
          {/* district */}
              <fieldset className="fieldset">
  <legend className="fieldset-legend">District</legend>
  <select {...register('senderDistricts')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a browser</option>
    {
        handleDistrictsByRegion(senderRegion).map((r,i)=> <option key={i} value={r}>{r}</option>)
    }
   
  
  </select>
  
</fieldset>
   
   
        </fieldset>
         {/* Receiver details */}
          <fieldset className="fieldset">
                         <h3 className='text-lg font-bold'>Receiver details </h3>
          <label className="label text-black">Receiver Name</label>
          <input type="text" {...register("receiverName")} className="input w-full" placeholder="Receiver Name"/>
             <label className="label text-black">Receiver Email</label>
          <input type="email" {...register("receiverEmail")} className="input w-full" placeholder="Receiver Email" />
   <label className="label text-black">Receiver Address</label>
          <input type="text" {...register("receiverAddress")} className="input w-full" placeholder="Receiver Address" />
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Region</legend>
  <select {...register('receiverRegion')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a region</option>
    {
        region.map((r,i)=> <option key={i} value={r}>{r}</option>)
    }
  
  </select>
   </fieldset>

          <fieldset className="fieldset">
  <legend className="fieldset-legend">District</legend>
  <select {...register('receiverDistricts')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a browser</option>
    {
        handleDistrictsByRegion(receiverRegion).map((d,i)=><option key={i} value={d}>{d}</option>)
    }
   
  
  </select>
 
</fieldset>
   
   
        </fieldset>

                </div>
             
                <input type="submit" value="Send a Parcel" className='btn btn-primary' />
            </form>
        </div>
    );
};

export default SendParcel;