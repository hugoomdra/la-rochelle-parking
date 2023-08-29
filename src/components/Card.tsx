import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapComponent from './MapComponent'

const Card = ({ parking } : {parking: any}) => {

    return (
        <div className='w-full flex justify-center'>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-full">
                <MapComponent parking={parking}></MapComponent>

                <div className="px-6 py-4 h-64 flex flex-col justify-between">
                    <div>
                        <div className="font-bold text-xl text-blue-500 mb-1">{parking.fields.nom}</div>
                        <p className='text-gray-400 italic text-xs mb-2'>Actualisé le {new Date(parking.fields.date_comptage).toLocaleString()}</p>
                        <p className="text-gray-700 text-base">
                        <span className='font-bold'>Capacité disponible :</span> {parking.fields.nb_places_disponibles}
                    </p>
                    <p className="text-gray-700 text-base">
                        <span className='font-bold'>Capacité total :</span> {parking.fields.nb_places}
                    </p>
                    </div>
                    
                    <a href={`https://www.google.com/maps/dir//${parking.fields.ylat},${parking.fields.xlong}/`} target='_blank' className='bg-blue-500 p-2 rounded-lg text-center hover:bg-blue-600 duration-200'>S&apos;Y RENDRE   </a>

                </div>
            </div>
        </div>
    )
}

export default Card