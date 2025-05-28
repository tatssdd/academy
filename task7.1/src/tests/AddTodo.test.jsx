import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo';

describe('Компонент AddTodo', () => {
  test('ввод текста и отправка формы вызывает onAdd и очищает поле', () => {
    const handleAdd = jest.fn();

    // рендеринг компонента компонент с мок-функцией
    render(<AddTodo onAdd={handleAdd} />);

    // поиск элементов
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');

    // ввод
    fireEvent.change(input, { target: { value: 'Новая задача' } });
    expect(input.value).toBe('Новая задача');

    // клик 
    fireEvent.click(button);

    // проверка, что onAdd вызван с правильным аргументом
    expect(handleAdd).toHaveBeenCalledWith('Новая задача');

    // очистка поля
    expect(input.value).toBe('');
  });
});