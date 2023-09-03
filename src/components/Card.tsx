import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapComponent from './MapComponent'

const Card = ({ parking } : {parking: any}) => {

    const number = 0;
    
    return (
        <div className='w-full flex justify-center'>
            <div className={'max-w-sm rounded-lg overflow-hidden shadow-lg w-full ' + (parking.fields.nb_places_disponibles == number ? 'bg-gray-200' : 'bg-white ' )}>
                <MapComponent parking={parking}></MapComponent>

                <div className="px-6 py-4 h-64 flex flex-col justify-between">
                    <div>
                        <div className={'font-bold text-xl text-blue-500 mb-1 ' + (parking.fields.nb_places_disponibles == number ? 'text-gray-400' : '') }>{parking.fields.nom}</div>
                        <p className='text-gray-400 italic text-xs mb-2'>Actualisé le {new Date(parking.fields.date_comptage).toLocaleString()}</p>
                        <p className={'text-base ' + (parking.fields.nb_places_disponibles == number ? 'text-gray-400' : 'text-gray-700')}>
                        <span className='font-bold'>Capacité disponible :</span> {parking.fields.nb_places_disponibles}
                    </p>
                    <p className={'text-base ' + (parking.fields.nb_places_disponibles == number ? 'text-gray-400' : 'text-gray-700')}>
                        <span className='font-bold'>Capacité total :</span> {parking.fields.nb_places}
                    </p>
                    </div>
                    
                    <a href={`https://www.google.com/maps/dir//${parking.fields.ylat},${parking.fields.xlong}/`} target='_blank' className={'p-2 rounded-lg text-center duration-200 ' + (parking.fields.nb_places_disponibles == number ? 'bg-gray-500 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-600')}>S&apos;Y RENDRE   </a>

                </div>
            </div>
        </div>
    )
}

export default Card