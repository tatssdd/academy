import { GeocodeMap } from '../components/GeoMap';
import { YMaps } from '@pbe/react-yandex-maps';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../hooks/fetchData';
import { useEventStore } from '../store/useEventsStore';
import { useEffect } from 'react';

export const Map = () => {
  const { setEvents } = useEventStore();
  const { events } = useEventStore();
  const apiKey = import.meta.env.VITE_YANDEX_API_KEY;

  const {
    data: allEvents = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  useEffect(() => {
    if (allEvents && allEvents.length > 0) {
      setEvents(allEvents);
    }
  }, [allEvents, setEvents]);
  return (
    <YMaps query={{ apikey: apiKey, load: 'package.full' }}>
      {isLoading && <div>Загрузка карты...</div>}
      {error && <div>Ошибка при загрузке данных</div>}
      <GeocodeMap events={events} />
    </YMaps>
  );
};
