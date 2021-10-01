import React from "react";
import { MapContainer,Marker,Popup, TileLayer } from "react-leaflet";
import "./Map.css";


function Map() {
  return (
    <div className="map">
      <MapContainer center={[34.80746,  -40.4796]} zoom={3} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[34.80746,  -40.4796]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default Map;