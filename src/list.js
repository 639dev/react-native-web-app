import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ListItem from './list_item';

export default class list extends React.Component {
    state = {
        tasks: ['one', 'two'],
        text: ''
    };

    add_todo = () => {
        const tasks = this.state.tasks.concat(this.state.text);
        this.setState({ tasks, text: '' });
    };
    delete_todo = item => {
        const tasks = this.state.tasks.filter(text => text !== item);
        this.setState({ tasks });
    };
    render() {
        return (
            <View style={styles.container}>
                {this.state.tasks.map((item, i) => (
                    <ListItem delete_task={this.delete_todo} key={i} item={item} />
                ))}
                <View style={styles.compose_task}>
                    <TextInput value={this.state.text} onChangeText={text => this.setState({ text })} placeholder="New Todo..." />
                    <TouchableOpacity onPress={this.add_todo}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    compose_task: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
