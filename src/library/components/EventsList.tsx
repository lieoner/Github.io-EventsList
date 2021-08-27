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

export class EventsList extends PureComponent<Props> {
    render() {
        return (
            <FlatList<EventType>
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <EventRow
                        item={item}
                        onPress={() => {
                            this.props.onPressItem(item);
                        }}
                    />
                )}
                data={this.props.events}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.loading}
                        onRefresh={this.props.onRefresh}
                    />
                }
            />
        );
    }
}
