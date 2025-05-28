import { useState, useEffect } from 'react';
import type { CoordinatesType } from '../types/types';

export function useCurrentLocation(ymaps: unknown) {
  const [center, setCenter] = useState<CoordinatesType>([56.861517, 53.221126]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      if (latitude && longitude) {
        setCenter([latitude, longitude]);
      }
    });
  }, [ymaps]);

  return center;
}
