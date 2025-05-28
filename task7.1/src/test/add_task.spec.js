import { test, expect } from '@playwright/test';

test('Пользователь добавляет новую задачу', async ({ page }) => {
  // открываем приложение
  await page.goto('http://localhost:5174/');

  // ввод текста задачи
  await page.fill('[data-testid="todo-input"]', 'Новая задача');

  // нажатие кнопки "Добавить"
  await page.click('[data-testid="add-button"]');

  // проверка, что задача появилась в списке
  const newTask = page.locator(`text=Новая задача`);
  await expect(newTask).toBeVisible();
});

test('Удаление задачи', async ({ page }) => {
  const todoId = 1;

  await page.goto('http://localhost:5174/');

  // находим задачу и ее кнпоку удаления
  const taskItem = page.locator(`[data-testid="todo-text-${todoId}"]`);

  // задача есть
  await expect(taskItem).toBeVisible();

  // найти ее кнпоку удаления
  const delBtn = page.locator(`[data-testid="delete-${todoId}"]`);

  // нажать кнпоку
  await delBtn.click();

  // проверка на исчезновение

  await expect(
    page.locator(`[data-testid="todo-text-${todoId}"]`),
  ).not.toBeVisible();
});

test('Фильтрация задач', async ({ page }) => {
  await page.goto('http://localhost:5174/');

  // добавляем активные задачи
  const tasks = [
    { text: 'Активная задача 1', completed: false, id: 3 },
    { text: 'Выполненная задача 1', completed: true, id: 4 },
    { text: 'Активная задача 2', completed: false, id: 5 },
    { text: 'Выполненная задача 2', completed: true, id: 6 },
  ];

  for (const task of tasks) {
    await page.fill(`[data-testid="todo-input"]`, task.text);
    await page.click('[data-testid="add-button"]');
    await expect(page.locator(`text=${task.text}`)).toBeVisible({
      timeout: 3000,
    });
  }

  // фильтр "Только активные"
  await page.click('[data-testid="filter-active"]');

  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'after_filter.png' });
  // проверка, что видны только активные задачи
  for (const task of tasks) {
    const taskLocator = page.locator(`text=${task.text}`);
    if (task.completed) {
      await expect(taskLocator).toBeHidden({ timeout: 3000 });
    } else {
      await expect(taskLocator).not.toBeVisible({ timeout: 3000 });
    }
  }

  // фильтр "Только выполненные"
  await page.click('[data-testid="filter-completed"]');

  // проверка, что видны только выполненные задачи
  for (const task of tasks) {
    const taskLocator = page.locator(`text=${task.text}`);
    if (task.completed) {
      await expect(taskLocator).toBeVisible({ timeout: 3000 });
    } else {
      await expect(taskLocator).not.toBeVisible({ timeout: 3000 });
    }
  }
});
