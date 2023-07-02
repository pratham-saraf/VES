import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ lat, lng }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      <div style={{ fontSize: '30px', color: 'red' }}>📍</div>
    </a>
  );
};

export default function Map() {
  const location = {
    center: {
      lat: 22.72210145735034,
      lng: 75.90565446781234,
    },
    zoom: 15,
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCHeGBKMN9XF2Kg9Rhg5HenVlCQtD6fpUg" }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
      >
        <AnyReactComponent
          lat={location.center.lat}
          lng={location.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
}
