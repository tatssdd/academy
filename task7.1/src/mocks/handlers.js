import { http } from 'msw';

export const handlers = [
  http.get('https://api.example.com/todos', (req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.json([{ id: 1, text: 'Mocked todo', completed: false }]),
    );
  }),
  http.post('https://api.example.com/todos', (req, res, ctx) => {
    const { text } = req.body;
    const newTodo = { id: Date.now(), text, completed: false };
    todos.push(newTodo);
    return res(ctx.status(201), ctx.json(newTodo));
  }),
];

export const worker = setupWorker(...handlers);
