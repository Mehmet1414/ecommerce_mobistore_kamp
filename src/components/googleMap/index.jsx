import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapp = () => {
  const mapStyles = { height: "400px", width: "100%" };
  const defaultCenter = { lat: 41.3851, lng: 2.1734 };
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
