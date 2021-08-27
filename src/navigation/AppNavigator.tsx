import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { EventScreen } from '../screens/EventScreen';
import { MainScreen } from '../screens/MainScreen';
import { MainStackParamList } from './config/MainStackParams';

const Stack = createStackNavigator<MainStackParamList>();

export const AppNavigator: React.FC<{}> = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={MainScreen} />
                <Stack.Screen name='Event' component={EventScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});
