import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import useScreenSize from '../hooks/useScreenSize'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import L from 'leaflet'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
export default function Location() {
    const locationn: any = [6.437361400682429, 3.4328605354896244]
    const screen = useScreenSize()
    const zoom = screen === 'small' ? 12 : 17

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    })

    L.Marker.prototype.options.icon = DefaultIcon

    return (
        <MapContainer
            center={locationn}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
            zoomControl={false}
            dragging={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data © OpenStreetMap contributors"
            />
            <Marker position={locationn}>
                <Popup>
                    You are welcome to. <br /> The Foursquare Gospel Church.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
