import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './config/MainStackParams';
import { EventScreen } from '../screens/EventScreen';
import { MainScreen } from '../screens/MainScreen';

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
