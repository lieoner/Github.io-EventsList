import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    ListRenderItem,
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { EventRow } from '../library/components/EventRow';
import { EventsList } from '../library/components/EventsList';
import { MainStackParamList } from '../navigation/config/MainStackParams';
import { EventType } from '../res/eventType';
import { RootState } from '../store';
import { setLoading, updateEvents } from '../store/actions/mainActions';

type mainScreenProp = StackNavigationProp<MainStackParamList, 'Main'>;

export const MainScreen: React.FC<{}> = () => {
    const navigation = useNavigation<mainScreenProp>();

    const [recentlyUpdated, setRecentlyUpdated] = useState(false);

    const loading = useSelector((state: RootState) => state.main.loading);
    const events: EventType[] = useSelector((state: RootState) => state.main.events);

    const dispatch = useDispatch();

    const wait = (timeout: number) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };

    const update = useCallback(() => {
        if (!recentlyUpdated) {
            dispatch(setLoading(true));
            setRecentlyUpdated(true);
            dispatch(updateEvents());
            wait(5000).then(() => {
                setRecentlyUpdated(false);
                console.log('call');
            });
        }
    }, [recentlyUpdated]);

    useFocusEffect(
        useCallback(() => {
            update();
            const updateTick = setInterval(() => {
                update();
            }, 60000);
            return () => {
                clearInterval(updateTick);
            };
        }, [])
    );

    const onPressItem = useCallback((item: EventType): void => {
        console.log('open event');
        navigation.navigate('Event', { event: item });
    }, []);

    return (
        <SafeAreaView>
            <EventsList
                events={events}
                loading={loading}
                onRefresh={update}
                onPressItem={onPressItem}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
