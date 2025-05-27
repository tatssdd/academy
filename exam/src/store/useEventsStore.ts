import {create} from 'zustand';
import type { EventState } from '../types/types';

export const useEventStore = create<EventState>((set) => ({
  events: [],
  setEvents: (events) => set({ events }),
  toggleFavorite: (id) =>
    set((state) => {
      const newEvents = state.events.map((event) => {
        if (event.id === id) {
          return { ...event, isFavorite: !event.isFavorite };
        }
        return event;
      });
      return { events: newEvents };
    })
}));