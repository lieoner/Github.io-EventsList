import { LoadingActionType, SET_LOADING, UpdateEventsActionType, UPDATE_EVENTS } from '../types';

import { EventType } from '../../res/eventType';

const initialState = {
    loading: true,
    events: [] as EventType[],
};
export const mainReducer = (
    state = initialState,
    action: LoadingActionType | UpdateEventsActionType
) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case UPDATE_EVENTS:
            return {
                ...state,
                events: action.payload,
            };
        default:
            return state;
    }
};
