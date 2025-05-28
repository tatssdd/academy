# Test info

- Name: Фильтрация задач
- Location: C:\Users\bausheva\academy\task7.1\src\test\add_task.spec.js:42:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('[data-testid="toggle-4"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('[data-testid="toggle-4"]')

    at C:\Users\bausheva\academy\task7.1\src\test\add_task.spec.js:62:28
```

# Page snapshot

```yaml
- heading "Todo App" [level=1]
- textbox "Add new todo..."
- button "Add"
- button "all"
- button "active"
- button "completed"
- checkbox
- text: Learn React
- button "Delete"
- checkbox
- text: Write tests
- button "Delete"
- checkbox
- text: Активная задача 1
- button "Delete"
- checkbox
- text: Выполненная задача 1
- button "Delete"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Пользователь добавляет новую задачу', async ({ page }) => {
   4 |   // открываем приложение
   5 |   await page.goto('http://localhost:5174/');
   6 |
   7 |   // ввод текста задачи
   8 |   await page.fill('[data-testid="todo-input"]', 'Новая задача');
   9 |
  10 |   // нажатие кнопки "Добавить"
  11 |   await page.click('[data-testid="add-button"]');
  12 |
  13 |   // проверка, что задача появилась в списке
  14 |   const newTask = page.locator(`text=Новая задача`);
  15 |   await expect(newTask).toBeVisible();
  16 | });
  17 |
  18 | test('Удаление задачи', async ({ page }) => {
  19 |   const todoId = 1;
  20 |
  21 |   await page.goto('http://localhost:5174/');
  22 |
  23 |   // находим задачу и ее кнпоку удаления
  24 |   const taskItem = page.locator(`[data-testid="todo-text-${todoId}"]`);
  25 |
  26 |   // задача есть
  27 |   await expect(taskItem).toBeVisible();
  28 |
  29 |   // найти ее кнпоку удаления
  30 |   const delBtn = page.locator(`[data-testid="delete-${todoId}"]`);
  31 |
  32 |   // нажать кнпоку
  33 |   await delBtn.click();
  34 |
  35 |   // проверка на исчезновение
  36 |
  37 |   await expect(
  38 |     page.locator(`[data-testid="todo-text-${todoId}"]`),
  39 |   ).not.toBeVisible();
  40 | });
  41 |
  42 | test('Фильтрация задач', async ({ page }) => {
  43 |   await page.goto('http://localhost:5174/');
  44 |
  45 |   // добавляем активные задачи
  46 |   const tasks = [
  47 |     { text: 'Активная задача 1', completed: false, id: 3 },
  48 |     { text: 'Выполненная задача 1', completed: false, id: 4 },
  49 |     { text: 'Активная задача 2', completed: false, id: 5 },
  50 |     { text: 'Выполненная задача 2', completed: false, id: 6 },
  51 |   ];
  52 |
  53 |   for (const task of tasks) {
  54 |     await page.fill(`[data-testid="todo-input"]`, task.text);
  55 |     await page.click('[data-testid="add-button"]');
  56 |     await expect(page.locator(`text=${task.text}`)).toBeVisible({
  57 |       timeout: 3000,
  58 |     });
  59 |     if (task.id === 4 || task.id === 6) {
  60 |       const toggleSelector = `[data-testid="toggle-${task.id}"]`;
  61 |       const toggle = page.locator(toggleSelector);
> 62 |       await expect(toggle).toBeVisible({ timeout: 5000 });
     |                            ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  63 |       await toggle.click();
  64 |     }
  65 |   }
  66 |
  67 |   // фильтр "Только активные"
  68 |   await page.click('[data-testid="filter-active"]');
  69 |
  70 |   await page.waitForTimeout(1000);
  71 |   await page.screenshot({ path: 'after_filter.png' });
  72 |   // проверка, что видны только активные задачи
  73 |   for (const task of tasks) {
  74 |     const taskLocator = page.locator(`text=${task.text}`);
  75 |     if (task.completed) {
  76 |       await expect(taskLocator).toBeHidden({ timeout: 3000 });
  77 |     } else {
  78 |       await expect(taskLocator).not.toBeVisible({ timeout: 3000 });
  79 |     }
  80 |   }
  81 |
  82 |   // фильтр "Только выполненные"
  83 |   await page.click('[data-testid="filter-completed"]');
  84 |
  85 |   // проверка, что видны только выполненные задачи
  86 |   for (const task of tasks) {
  87 |     const taskLocator = page.locator(`text=${task.text}`);
  88 |     if (task.completed) {
  89 |       await expect(taskLocator).toBeVisible({ timeout: 3000 });
  90 |     } else {
  91 |       await expect(taskLocator).not.toBeVisible({ timeout: 3000 });
  92 |     }
  93 |   }
  94 | });
  95 |
```