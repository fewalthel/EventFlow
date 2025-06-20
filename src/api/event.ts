import api from '../utils/axios';
import { Event, Place } from '@entities/interfaces';

export interface LocationInfo {
  name: string;
  description: string;
  address: {
    country: string;
    city: string;
    street: string;
    building: string;
  };
}

export async function getEventWithPlace(idEvent: number): Promise<(Event & { place?: Place, locationInfo?: LocationInfo })> {
  // 1. Получаем данные события
  const res = await api.get(`/api/v1/event-service/events/${idEvent}`);
  const data = res.data;
  // 2. Получаем данные места, если есть locationId
  let place: Place | undefined = undefined;
  let locationInfo: LocationInfo | undefined = undefined;
  if (data.locationId) {
    try {
      const placeRes = await api.get(`/api/v1/place-service/places/${data.locationId}`);
      place = placeRes.data;
    } catch (e) {
      place = undefined;
    }
    try {
      const locationRes = await api.get(`/api/v1/location-service/locations/${data.locationId}`);
      locationInfo = locationRes.data;
    } catch (e) {
      locationInfo = undefined;
    }
  }
  // 3. Приводим к интерфейсу Event
  const eventObj: Event & { place?: Place, locationInfo?: LocationInfo } = {
    id: idEvent,
    title: data.name,
    date: data.startTime,
    location: data.locationId || '',
    price: 0, // если есть цена — подставьте
    pathToImage: data.imageIds?.[0] || '',
    description: data.description,
    category: { id: 0, title: data.category || '' },
    place,
    locationInfo,
  };
  return eventObj;
} 