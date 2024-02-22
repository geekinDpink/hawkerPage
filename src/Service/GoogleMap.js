import { Marker, Map, GoogleApiWrapper } from "google-maps-react";

export function GoogleMap({ google }) {
  return (
    <Map
      google={google}
      containerStyle={{
        position: "relative",
        width: "60%",
        height: "400px",
      }}
      initialCenter={{ lat: 1.2871406738992823, lng: 103.80817655524535 }}
      zoom={18}
      disableDefaultUI={true}
    >
      <Marker
        title={"ABC Food Center"}
        name={"AbcFCMarker"}
        position={{ lat: 1.2869675450446592, lng: 103.80823992350876 }}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
})(GoogleMap);
