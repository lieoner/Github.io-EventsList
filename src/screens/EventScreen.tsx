import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MainStackParamList } from '../navigation/config/MainStackParams';

type eventScreenProp = StackNavigationProp<MainStackParamList, 'Event'>;

export const EventScreen: React.FC<{}> = () => {
    const navigation = useNavigation<eventScreenProp>();
    const route = useRoute<RouteProp<MainStackParamList, 'Event'>>();
    const { event } = route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>{`id: ${event.id}`}</Text>
                <Text>{`type: ${event.type}`}</Text>
                {event.actor ? (
                    <Text>{`actor: ${JSON.stringify(event.actor, null, 2)}`}</Text>
                ) : (
                    <></>
                )}
                {event.repo ? <Text>{`repo: ${JSON.stringify(event.repo, null, 2)}`}</Text> : <></>}
                {event.payload ? (
                    <Text>{`payload: ${JSON.stringify(event.payload, null, 2)}`}</Text>
                ) : (
                    <></>
                )}
                <Text>{`public: ${event.public.toString()}`}</Text>
                <Text>{`created_at: ${event.created_at}`}</Text>
                {event.org ? <Text>{`org: ${JSON.stringify(event.org, null, 2)}`}</Text> : <></>}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
