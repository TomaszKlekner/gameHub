import axios from 'axios';
import { useEffect, useState } from 'react';

export interface Todo {
  useId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const controller = new AbortController();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos', {
        signal: controller.signal,
      })
      .then((res) => setTodos(res.data))
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          #{todo.useId} - {todo.title} :{' '}
          {todo.completed ? 'Completed' : 'Pending'}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
