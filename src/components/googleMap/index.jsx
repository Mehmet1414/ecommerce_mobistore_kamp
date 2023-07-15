import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapp = () => {
  const mapStyles = { height: "350px", width: "100%" };
  const defaultCenter = { lat: 48.2082, lng: 16.3738 };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBWaQ1ZDT8o-ZzBdp0mf-bdEdwP5Kpmmh4">
      {" "}
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />{" "}
    </LoadScript>
  );
};

export default GoogleMapp;
