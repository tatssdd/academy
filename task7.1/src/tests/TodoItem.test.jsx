import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

describe('TodoItem component', () => {
  const baseTodo = {
    text: 'Test Todo',
    completed: false,
  };

  const setup = (todoProps = {}, onToggle = jest.fn(), onDelete = jest.fn()) => {
    const todo = { ...baseTodo, ...todoProps };
    render(<TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />);
    return todo;
  };

  test('отображает текст задачи и статус выполнения', () => {
    // не выполненная задача
    const todo1 = setup({ id: 1 });
    expect(screen.getByTestId(`todo-text-${todo1.id}`)).toHaveTextContent('Test Todo');
    expect(screen.getByTestId(`toggle-${todo1.id}`)).not.toBeChecked();

    // выполненная задача
    const todo2 = setup({ id: 2, completed: true });
    expect(screen.getByTestId(`toggle-${todo2.id}`)).toBeChecked();
  });

  test('кнопка удаления вызывает обработчик', () => {
    const handleDelete = jest.fn();
    const todoId = 3;
    setup({ id: todoId }, jest.fn(), handleDelete);
    const deleteButton = screen.getByTestId(`delete-${todoId}`);
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith(todoId);
  });

  test('переключение статуса вызывает onToggle', () => {
    const handleToggle = jest.fn();
    const todoId = 4;
    setup({ id: todoId }, handleToggle);
    const toggleCheckbox = screen.getByTestId(`toggle-${todoId}`);
    fireEvent.click(toggleCheckbox);
    
    expect(handleToggle).toHaveBeenCalledWith(todoId);
  });
});