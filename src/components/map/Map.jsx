//*Map
import styles from './map.module.scss';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const Map = () => {
  const center = { lat: 49.58350227730641, lng: 34.58231883387771 };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBbt0F3RGczTmbyVMMyFIVd8wxxFSpFRN0&region=EN&language=en&callback=initMap&v=weekly',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className={styles.map}>
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat: 49.58350227730641, lng: 34.58231883387771 }} />
      </GoogleMap>
    </div>
  ) : (
    <>Карата не загрузилась</>
  );
};

export default Map;
