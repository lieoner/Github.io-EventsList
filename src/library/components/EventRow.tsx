import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EventType } from '../../res/eventType';

export const EventRow: React.FC<{ item: EventType; onPress(): void }> = ({ item, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onPress()}>
            <View style={styles.default}>
                <Text>{item.id}</Text>
                <Text>{item.type}</Text>
                <Text>{item.created_at}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    default: {
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
    },
});
