import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MemoizedEventList } from '../library/components/EventsList';
import { MainStackParamList } from '../navigation/config/MainStackParams';
import { EventType } from '../res/eventType';
import { RootState } from '../store';
import { setLoading, updateEvents } from '../store/actions/mainActions';

type mainScreenProp = StackNavigationProp<MainStackParamList, 'Main'>;

export const MainScreen: React.FC<{}> = () => {
    const navigation = useNavigation<mainScreenProp>();

    const [recentlyUpdated, setRecentlyUpdated] = useState(false);
    const recentlyUpdatedTimeout: React.MutableRefObject<NodeJS.Timeout | undefined> =
        useRef<NodeJS.Timeout>();
    const loading = useSelector((state: RootState) => state.main.loading);
    const events: EventType[] = useSelector((state: RootState) => state.main.events);

    const dispatch = useDispatch();

    const update = useCallback(() => {
        if (!recentlyUpdated) {
            clearTimeout(recentlyUpdatedTimeout.current as NodeJS.Timeout);
            dispatch(setLoading(true));
            setRecentlyUpdated(true);
            dispatch(updateEvents());
            recentlyUpdatedTimeout.current = setTimeout(() => {
                setRecentlyUpdated(false);
                console.log('call');
            }, 15000);
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
                clearTimeout(recentlyUpdatedTimeout.current as NodeJS.Timeout);
                console.log('clear');
            };
        }, [])
    );

    const onPressItem = useCallback((item: EventType): void => {
        console.log('open event');
        navigation.navigate('Event', { event: item });
    }, []);

    return (
        <SafeAreaView>
            <MemoizedEventList
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
