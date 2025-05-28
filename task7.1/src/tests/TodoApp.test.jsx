import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

test('Задачи подгружаются при рендере', async () => {
  render(<App />);
  await waitFor(() => {
    const todo1 =  screen.getByText('Learn React');
    const todo2 =  screen.getByText('Write tests');

    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  })
  
});

test('Добавление новой задачи отправляет запрос и обновляет UI', async () => {
  render(<App />);
  
  const input = await screen.findByTestId('todo-input');
  const button = await screen.findByTestId('add-button');

  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.click(button);

  // ожидание обновления списка
  const newTodo = await screen.findByText('New task')
  expect(newTodo).toBeInTheDocument()
});