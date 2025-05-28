import '@testing-library/jest-dom';
import { server } from './mocks/server';

// Запускаем сервер перед всеми тестами
beforeAll(() => server.listen());
// Очищаем обработчики после каждого теста
afterEach(() => server.resetHandlers());
// Останавливаем сервер после всех тестов
afterAll(() => server.close());
