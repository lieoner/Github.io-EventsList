import { ActionCreator } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosApi } from '../../library/networking/AxiosApi';
import { MAX_EVENTS_COUNT } from '../../res/config';
import { EventType } from '../../res/eventType';
import { LoadingActionType, SET_LOADING, UpdateEventsActionType, UPDATE_EVENTS } from '../types';

export const setLoading: ActionCreator<LoadingActionType> = (loading: boolean) => {
    return {
        type: SET_LOADING,
        payload: loading,
    };
};

export function updateEvents() {
    return async (dispatch: ThunkDispatch<{}, {}, UpdateEventsActionType | LoadingActionType>) => {
        const result = await AxiosApi.get(
            `https://api.github.com/events?per_page=${MAX_EVENTS_COUNT}`
        );
        console.log('call updateEvents');
        const events: EventType[] = result.data;

        dispatch(setLoading(false));

        return dispatch({
            type: UPDATE_EVENTS,
            payload: events,
        });
    };
}
