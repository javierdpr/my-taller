import { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
    const [polygonCoords] = useState([
        [38.7096548, -3.783443], [38.7096527, -3.783338], [38.709451, -3.783373], [38.709647, -3.783468]
    ]);

    return (
        <MapContainer center={[38.709647, -3.783882]} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polygon
            positions={polygonCoords}
            pathOptions={{ color: 'blue' }}
        >
        <Popup>
            <p>American garge</p>
        </Popup>
        </Polygon>
        </MapContainer>
    );
};
export default Mapa;