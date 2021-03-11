import React from 'react';
import { View } from 'react-native';
import { TodoListItem } from './TodoListItem';
import { Todo, ToggleTodo } from '../types/types';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <View>
            {
                todos.map(todo => {
                    return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
                })
            }
        </View>
    )
}