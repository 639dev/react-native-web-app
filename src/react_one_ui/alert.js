import React from 'react';
import { Alert as AlertNative, Platform, View, Text, StyleSheet, Button } from 'react-native';

let Alert;

class AlertProviderWeb extends React.Component {
    constructor(props) {
        super(props);
        Alert = this;
        this.state = {
            show: false
        };
    }
    alert = (title, messsage, options = [{ text: 'ok' }]) => {
        this.title = title;
        this.messsage = messsage;
        this.options = options.map(option => ({
            text: option.text,
            onPress: () => {
                option.onPress && option.onPress();
                this.setState({ show: false });
            }
        }));
        this.setState({ show: true });
    };
    _renderAlert = () => (
        <View style={styles.overlay}>
            <View style={styles.box}>
                <Text>{this.title}</Text>
                <Text>{this.message}</Text>
                {this.options.map(option => (
                    <Button title={option.text} onPress={option.onPress} />
                ))}
            </View>
        </View>
    );
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
                {this.state.show ? this._renderAlert() : null}
            </View>
        );
    }
}

const AlertProviderNative = ({ children }) => <View style={{ flex: 1 }}>{children}</View>;

Alert = Platform.OS === 'web' ? Alert : AlertNative;

const AlertProvider = Platform.OS === 'web' ? AlertProviderWeb : AlertProviderNative;

export { AlertProvider, Alert };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    box: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff'
    }
});
