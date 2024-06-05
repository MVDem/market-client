import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DivIcon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import styles from "./Map.module.scss";

const Map: React.FC = () => {
  const position: [number, number] = [32.0853, 34.7818]; // Tel Aviv coordinates

  type TMarkers = {
    geocode: [number, number];
    popUp: string;
  };
  const markers: TMarkers[] = [
    { geocode: [32.794, 34.9896], popUp: "Hello it's Haifa" },
    { geocode: [32.0171, 34.7451], popUp: "Hello it's Bat Yam" },
    { geocode: [31.8014, 34.6431], popUp: "Hello it's Ashdod" },
  ];

  const customIcon = new L.Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const createCustomClusterIcon = (cluster: any) => {
    return new DivIcon({
      html: `<div className=${
        styles.clusterIcon
      }>${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <MapContainer
      center={position}
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: "50vh", width: "50%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCraateFunction={createCustomClusterIcon}
      >
        <Marker position={position} icon={customIcon}>
          <Popup>Tel Aviv</Popup>
        </Marker>
        {markers.map((i, index) => (
          <Marker key={index} position={i.geocode} icon={customIcon}>
            <Popup>{i.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
