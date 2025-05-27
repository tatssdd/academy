import { Placemark, useYMaps, Map } from '@pbe/react-yandex-maps';
import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import type { IGeocodeResult } from 'yandex-maps';
import type {
  CoordinatesType,
  EventsData,
  GeocodeMapProps,
  IAddress,
  IClickEvent,
} from '../types/types';
import { useCurrentLocation } from '../hooks/useCurrentLocation';
import { LocationDetails } from './LocationDetails';
import { Filters } from './Filters';
import { Flex } from 'antd';

const placemarkOptions = {
  preset: 'islands#redIcon',
  iconColor: 'red',
  cursor: 'pointer',
};

const CardWithGeocodeMap = styled(Flex)`
  width: 100%;
  height: 700px;
  gap: 8px;
`;

const MapWithGeocode = styled(Map)`
  border-radius: 15px;
  overflow: hidden;
  height: 600px;
  width: 70%;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

function handleGeoResult(result: IGeocodeResult) {
  const firstObject = result.geoObjects.get(0);
  if (!firstObject) {
    console.error('no first obg');
    return;
  }

  const properties = firstObject.properties;
  const location = String(properties.get('description', {}));
  const route = String(properties.get('name', {}));

  const foundAddress = {
    location,
    route,
  };
  return foundAddress;
}

export const GeocodeMap = ({ events }: GeocodeMapProps) => {
  const ymaps = useYMaps(['geocode']);
  const center = useCurrentLocation(ymaps);
  const [userAddress, setUserAddress] = useState<IAddress | null>(null);

  const [address, setAddress] = useState<IAddress | null>(null);

  const [selectedEvent, setSelectedEvent] = useState<EventsData | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [favoriteFilter, setFavoriteFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesCategory = categoryFilter
        ? event.category === categoryFilter
        : true;
      const matchesDate = dateFilter
        ? new Date(event.startAt) >= new Date(dateFilter)
        : true;
      const matchesFavorite = favoriteFilter
        ? event.isFavorite === favoriteFilter
        : true;
      const matchesSearch = searchTerm
        ? event.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesCategory && matchesDate && matchesFavorite && matchesSearch;
    });
  }, [events, categoryFilter, dateFilter, favoriteFilter, searchTerm]);

  // Обратное геокодирование по координатам
  const reverseGeocode = async (coords: CoordinatesType) => {
    if (!ymaps) return;
    const result = await ymaps.geocode(coords);
    const foundAddress = handleGeoResult(result);
    if (foundAddress) {
      setUserAddress(foundAddress);
    }
  };

  const handleClickMap = (e: IClickEvent, eventData?: EventsData) => {
    if (!ymaps) {
      console.error('no ymaps');
      return;
    }
    const coords = e.get('coords');
    if (!coords) {
      console.error('no coords');
      return;
    }
    ymaps
      .geocode(coords)
      .then((result) => {
        const foundedAddress = handleGeoResult(result);
        if (!foundedAddress) {
          console.error('no founded address');
          return;
        }
        setAddress(foundedAddress);
      })
      .catch((e: unknown) => {
        console.error(e);
        setAddress(null);
      });
    if (eventData) {
      setSelectedEvent(eventData);
    } else {
      setSelectedEvent(null);
    }
  };

  // Получение текущей локации при монтировании
  useEffect(() => {
    reverseGeocode(center);
  }, [center]);
  return (
    <CardWithGeocodeMap>
      <LeftColumn>
        <Filters
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          favoriteFilter={favoriteFilter}
          setFavoriteFilter={setFavoriteFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <LocationDetails address={address} event={selectedEvent} />
      </LeftColumn>
      <MapWithGeocode
        state={{
          center: center,
          zoom: 14,
        }}
        onClick={(e: IClickEvent) => handleClickMap(e)}
      >
        <Placemark
          geometry={center}
          properties={{
            balloonContentHeader: `${userAddress?.route}`,
            iconContent: '<b><i>Я</i></b>',
          }}
          options={placemarkOptions}
        />
        {filteredEvents.map((event: EventsData) => (
          <Placemark
            key={event.id}
            geometry={[event.coordinates.lat, event.coordinates.lon]}
            onClick={(e: IClickEvent) => handleClickMap(e, event)}
            properties={{
              balloonContentHeader: `${event.title}`,
              balloonContentBody: `${event.description}`,
            }}
          />
        ))}
      </MapWithGeocode>
    </CardWithGeocodeMap>
  );
};
