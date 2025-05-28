import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('Интеграция TodoList и TodoItem', () => {
  const todos = [
    { id: 1, text: 'Задача 1', completed: false },
    { id: 2, text: 'Задача 2', completed: true },
  ];

  test('отображает список задач', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    render(<TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />);

    // проверка отображения списка
    const list = screen.getByTestId('todo-list');
    expect(list).toBeInTheDocument();

    // проверка наличия текста задач
    todos.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
      // проверка чекбокса
      const checkbox = screen.getByTestId(`toggle-${todo.id}`);
      expect(checkbox).toBeChecked = todo.completed;
    });
  });

  test('изменение статуса задачи вызывает onToggle с правильным id', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    render(<TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />);

    // клик по чекбоксу первой задачи
    const toggleCheckbox = screen.getByTestId(`toggle-${todos[0].id}`);
    fireEvent.click(toggleCheckbox);

    expect(handleToggle).toHaveBeenCalledWith(todos[0].id);
  });

  test('нажитие на кнопку удаления вызывает onDelete с правильным id', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    render(<TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />);

    // нажатие кнопки удаления второй задачи
    const deleteButton = screen.getByTestId(`delete-${todos[1].id}`);
    fireEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledWith(todos[1].id);
  });
});