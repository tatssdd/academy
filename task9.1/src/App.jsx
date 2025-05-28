import React, { useCallback, useState, useMemo } from 'react';

const TodoItem = React.memo(({ text, completed, onClick }) => {
  // Simulate expensive rendering
  // eslint-disable-next-line no-unused-vars
  const heavyComputation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 10000000; i++) sum += i;
    return sum;
  }, []);

  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  );
});

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Fix performance', completed: false },
  ]);
  const [input, setInput] = useState('');

  const toggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput('');
  }, [input]);

  const toggleTodoHandlers = useMemo(() => {
    const handlers = {};
    todos.forEach(todo => {
      handlers[todo.id] = () => toggleTodo(todo.id);
    });
    return handlers;
  }, [todos, toggleTodo]);

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => toggleTodoHandlers[todo.id]}
          />
        ))}
      </ul>
    </div>
  );
}