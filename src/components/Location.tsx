import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

export default function Location() {
    const locationn: any = [6.437361400682429, 3.4328605354896244]

    return (
        <MapContainer center={locationn} zoom={17} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
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
