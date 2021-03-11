import React from 'react';
import { View, Text, TextInput,   } from 'react-native';
import { Todo, ToggleTodo } from '../types/types';


interface TodolistItemProps {
    todo: Todo,
    toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<TodolistItemProps> = ({ todo, toggleTodo }) => {
    return <View>
                
                <Text onPress={() => toggleTodo(todo)} style={{textDecorationLine: todo.complete ? 'line-through' : 'none'}}>{todo.text}</Text>
                {/* <TextInput  /> */}
            </View>
}