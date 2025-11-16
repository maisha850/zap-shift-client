
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';
import { useRef } from 'react';

const Coverage = () => {
    const servericeCenter = useLoaderData()
    const position = [23.6850 , 90.3563]
    const mapRef = useRef(null)
   
    const handleSearch=(e)=>{
        e.preventDefault()
        const location = e.target.location.value
        const district = servericeCenter.find(c=> c.district.toLowerCase().includes(location.toLowerCase()))
        if(district){
            const cor = [district.latitude , district.longitude]
            mapRef.current.flyTo(cor , 10)
        }


    }
   
    return (
        <div>
            <h3 className='text-5xl font-bold text-secondary mt-15 '>We are available in 64 districts</h3>
            <div className='my-10'>
                <form onSubmit={handleSearch}>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input  name='location' type="search" className="grow" placeholder="Search" />

</label>
<button className='btn btn-primary'>Search</button>
                </form>
            </div>
           <div className='border w-full h-200'>
             <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-200' ref={mapRef}>
                <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
        servericeCenter.map((center,ind)=> <Marker key={ind} position={[center.latitude , center.longitude]}>
    <Popup>
 <strong>{center.district}</strong> <p><span className='font-medium'>service area: </span>{center.covered_area.join(', ')}</p>
    </Popup>
</Marker>)
    }

            </MapContainer>
           </div>
        </div>

    );
};

export default Coverage;