import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import styles from './Map.module.scss';
import { Icon } from 'leaflet';
import { Offer } from '../../types/Offers';
import MapCard from './MapCard';

const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
  iconSize: [38, 38],
});
interface MapProps {
  offersList: Offer[];
}

export default function Map({ offersList }: MapProps) {
  // console.log(offersList);
  return (
    <div className={styles.leafletContainer}>
      <MapContainer
        center={[32.33910536709735, 34.9707402677743]}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {offersList.map((offer, i) => (
            <Marker
              key={i}
              position={[
                offer.farmer!.coordinateLat!,
                offer.farmer!.coordinateLong!,
              ]}
              icon={
                offer.imageURL !== null
                  ? new Icon({
                      iconUrl: `${
                        offer.imageURL ? offer.imageURL : offer.product.imageURL
                      }`,
                      iconSize: [38, 38],
                    })
                  : customIcon
              }
            >
              <Popup className={styles.customPopup}>
                <MapCard offer={offer} />
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
