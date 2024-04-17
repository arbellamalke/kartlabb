import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapWrapper.css";
import PopupInfo from "../PopUpInfo/PopupInfo";
import { LatLngExpression } from "leaflet";

interface IPoint {
  latitude: number;
  longitude: number;
  locality: string;
  county: string;
}

interface IProps {
  points: IPoint[];
  center: LatLngExpression;
  zoom: number;
}

interface IChangeViewProps {
  center: LatLngExpression;
  zoom: number;
}

function ChangeView(props: IChangeViewProps) {
  const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
}

export default function MapWrapper(props: IProps) {
  /*  const map = useMap();
  map.setView([57.707232, 11.967017], 15); */
  return (
    <MapContainer
      className="mapContainer"
      // center={props.center as unknown as LatLngExpression}
      center={props.center}
      zoom={13}
      scrollWheelZoom={true}
    >
      <ChangeView center={props.center} zoom={props.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.points.map((locality, idx) => (
        <Marker position={[locality.latitude, locality.longitude]} key={idx}>
          <Popup>
            <PopupInfo
              textResurs={"Resurs: Mikael Hedlund"}
              textBokningsstatus={"Status: Slutförd"}
              textTid={"Tid: 540 min"}
            ></PopupInfo>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
