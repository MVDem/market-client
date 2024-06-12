import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import styles from './Map.module.scss';
import { Icon } from 'leaflet';

// create custom icon
const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',

  iconSize: [38, 38], // size of the icon
});

interface Marker {
  geocode: [number, number];
  popUp: string;
}
const markers: Marker[] = [
  {
    geocode: [48.86, 2.3522],
    popUp: 'Hello, I am pop up 1',
  },
  {
    geocode: [48.85, 2.3522],
    popUp: 'Hello, I am pop up 2',
  },
  {
    geocode: [48.855, 2.34],
    popUp: 'Hello, I am pop up 3',
  },
];

export default function App() {
  return (
    <div className={styles.leafletContainer}>
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {markers.map((pos) => (
            <Marker position={pos.geocode} icon={customIcon}>
              <Popup>{pos.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
