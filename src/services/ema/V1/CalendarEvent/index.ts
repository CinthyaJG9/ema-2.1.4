import axios from 'axios';
import { axiosError } from '@/utils';
import { BASE_URL_API } from '@/libs';
import { IEvent } from '@/interfaces';

export const CalendarEventService = {
  createEvent: async (Event: IEvent): Promise<any> => {
    try {
      const { summary, description, location, startDateTime, endDateTime } =
        Event;
      const { data, status } = await axios.post<IEvent>('api/create-event', {
        summary: summary,
        description: description,
        location: location,
        startDateTime: startDateTime,
        endDateTime: endDateTime,
      });


      return { status, response: data };
    } catch (error) {
      return axiosError(error, 'EventService.post');
    }
  },
};
