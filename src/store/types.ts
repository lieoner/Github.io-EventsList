import { EventType } from '../res/eventType';

export const SET_LOADING = 'SET_LOADING';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';

export type LoadingActionType = {
    type: typeof SET_LOADING;
    payload: boolean;
};
export type UpdateEventsActionType = {
    type: typeof UPDATE_EVENTS;
    payload: EventType[];
};
