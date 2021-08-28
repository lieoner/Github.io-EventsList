import React, { PureComponent } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { EventType } from '../../res/eventType';
import { EventRow } from './EventRow';

export interface Props {
    events: EventType[];
    loading: boolean;
    onRefresh(): void;
    onPressItem(item: EventType): void;
}

const EventsList: React.FC<Props> = ({ events, loading, onRefresh, onPressItem }) => {
    return (
        <FlatList<EventType>
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <EventRow
                    item={item}
                    onPress={() => {
                        onPressItem(item);
                    }}
                />
            )}
            data={events}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
        />
    );
};
export const MemoizedEventList = React.memo<Props>(EventsList);
