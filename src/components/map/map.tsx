import React from 'react';
import cn from 'classnames';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '../../types/offer';
import useMap from '../../hooks/useMap';

type MapProps = {
  className: string;
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const Map: React.FC<MapProps> = ({
  className,
  city,
  offers,
  selectedOffer,
}) => {
  const mapRef = React.useRef(null);
  const map = useMap(mapRef, city);
  React.useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={cn('map', className)}
      style={{ height: '500px' }}
      ref={mapRef}
    >
    </section>
  );
};

export default Map;
