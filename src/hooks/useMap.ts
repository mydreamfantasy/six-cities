import React from 'react';
import leaflet from 'leaflet';
import { City } from '../types/offer';

function useMap(
  mapRef: React.MutableRefObject<HTMLElement | null>,
  city: City
): leaflet.Map | null {
  const [map, setMap] = React.useState<leaflet.Map | null>(null);
  const isRenderedRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new leaflet.TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
