import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = ({ parking }: { parking: any }) => {

    return (
        <MapContainer className='h-48' center={[parking.fields.ylat, parking.fields.xlong]} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[parking.fields.ylat, parking.fields.xlong]}>
                <Popup>
                    <p className='font-bold'>{parking.fields.nom}</p>
                    <p>{parking.fields.nb_places_disponibles} places / {parking.fields.nb_places} places</p>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map