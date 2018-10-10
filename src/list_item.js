import React from 'react';
import { Text, View } from 'react-native';
import { Alert } from './react_one_ui';

const ListItem = ({ item, delete_task }) => (
    <View style={{ flexDirection: 'row' }}>
        <Text>{item}</Text>
        <Text
            style={{ marginLeft: 20 }}
            onPress={() => Alert.alert('confirm', 'delete?', [{ text: 'ok', onPress: () => delete_task(item) }, { text: 'cancel', onPress: () => console.log('cancelled') }])}
        >
            Delete
        </Text>
    </View>
);

export default ListItem;
