import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {AddTodo} from '../types/types';

interface AddTodoForm {
    addTodo: AddTodo
}
export const AddTodoForm: React.FC<AddTodoForm> = ({addTodo}) => {
    const [todo, setTodos] = useState<string>("");
    return (
        <View>
            <TextInput style={styles.input} onChangeText={(text) => setTodos(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 50,
    }
});