import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import useScreenSize from '../hooks/useScreenSize'

export default function Location() {
    const locationn: any = [6.437361400682429, 3.4328605354896244]
    const screen = useScreenSize()
    const zoom = screen === 'small' ? 12 : 17

    return (
        <MapContainer center={locationn} zoom={zoom} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
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
