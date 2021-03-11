import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TodoListItem } from './components/TodoListItem';
import { Todo, ToggleTodo, AddTodo } from './types/types';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';


const initialTodos: Array<Todo> = [ {text: "Walk the dog", complete: true}, {text: "Write an app", complete: false} ];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  // Toggle a todo
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return { ...todo, complete: !todo.complete }
      }
      return todo;
    });

    setTodos(newTodos);
  }

  // Add Todo
  const addTodo: AddTodo = ( newTodo: string ) => {
      setTodos([...todos, {text: newTodo, complete: false}]);
  }

  return (
    <View style={styles.container}>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
