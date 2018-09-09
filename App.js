import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends React.Component {
    state = {
        todoApps: "Logining",
        todo: ""
    }
    addTodo = () => {
        this.setState({todo: this.state.todoApps});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Hellow iav haii</Text>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text)=>this.setState({todoApps: text})}
                />
                <Button title="Login"
                        color="green"
                onPress={this.addTodo}/>
                <Text>{this.state.todo}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        height: 40,
        borderColor: "green",
        borderWidth: 1
    },
});

