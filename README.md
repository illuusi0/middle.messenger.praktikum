# Messenger

Веб-приложение мессенджера, разработанное в рамках курса Яндекс.Практикум.

## Демо

Netlify: https://gorgeous-zuccutto-778bcd.netlify.app/

## Дизайн

Figma: [Windows 11 Chat UI Kit](https://www.figma.com/design/bh0qhKG7ibxfwHjIRu4a75/Windows-11-Chat-UI-Kit--Community-?node-id=8-3365&p=f&t=sHZ3azHW0bzBrRD0-0)

## Функциональность

- Авторизация и регистрация пользователей с валидацией форм
- Список чатов с поиском
- Лента переписки с отправкой сообщений
- Настройки профиля пользователя
- Редактирование профиля с валидацией
- Изменение пароля с валидацией
- Валидация всех форм по blur-событиям и при submit
- Сбор данных из форм с выводом в console.log

## Технологии

- TypeScript
- JavaScript (ES6+)
- Handlebars (шаблонизатор)
- Vite (сборка)
- PostCSS (autoprefixer, postcss-import, postcss-nested)
- ESLint (статический анализ кода)
- Stylelint (проверка стилей)
- Компонентный подход с Block и Event Bus
- MVC архитектура
- HTTPTransport (XHR для работы с API)

## Установка

```bash
npm install
```

## Команды

- `npm run dev` — запуск dev-сервера
- `npm run build` — сборка проекта
- `npm run start` — сборка и запуск на порту 3000
- `npm run lint` — проверка кода ESLint
- `npm run lint:fix` — автоматическое исправление ошибок ESLint
- `npm run stylelint` — проверка стилей Stylelint
- `npm run stylelint:fix` — автоматическое исправление ошибок Stylelint

## Страницы

- [Главная (навигация)](https://gorgeous-zuccutto-778bcd.netlify.app/)
- [Авторизация](https://gorgeous-zuccutto-778bcd.netlify.app/pages/login/)
- [Регистрация](https://gorgeous-zuccutto-778bcd.netlify.app/pages/register/)
- [Чаты](https://gorgeous-zuccutto-778bcd.netlify.app/pages/chats/)
- [Настройки профиля](https://gorgeous-zuccutto-778bcd.netlify.app/pages/settings/)
- [Редактирование профиля](https://gorgeous-zuccutto-778bcd.netlify.app/pages/settings-edit/)
- [Изменение пароля](https://gorgeous-zuccutto-778bcd.netlify.app/pages/settings-password/)
- [404](https://gorgeous-zuccutto-778bcd.netlify.app/pages/404/)
- [500](https://gorgeous-zuccutto-778bcd.netlify.app/pages/500/)

## Структура проекта

```
src/
├── core/            # Базовые классы и утилиты
│   ├── Block.ts     # Базовый класс компонента с Event Bus
│   ├── View.ts      # Базовый класс страницы (MVC View)
│   ├── EventBus.ts  # Event Bus для событий
│   ├── HTTPTransport.ts  # Класс для работы с HTTP запросами (XHR)
│   └── Validation.ts # Система валидации форм
├── components/      # Переиспользуемые компоненты
│   ├── avatar/
│   │   ├── Avatar.ts
│   │   ├── avatar.tmpl.ts
│   │   └── index.ts
│   ├── button/
│   │   ├── Button.ts
│   │   ├── button.tmpl.ts
│   │   └── index.ts
│   ├── icons/
│   ├── input/
│   │   ├── Input.ts
│   │   ├── input.tmpl.ts
│   │   └── index.ts
│   ├── link/
│   └── message/
│       ├── Message.ts
│       ├── message.tmpl.ts
│       └── index.ts
├── pages/           # Страницы приложения (MVC)
│   ├── 404/
│   │   ├── Error404Page.ts
│   │   ├── error404.tmpl.ts
│   │   └── index.ts
│   ├── 500/
│   │   ├── Error500Page.ts
│   │   ├── error500.tmpl.ts
│   │   └── index.ts
│   ├── chats/
│   │   ├── ChatsPage.ts
│   │   ├── chats.tmpl.ts
│   │   └── index.ts
│   ├── login/
│   │   ├── LoginPage.ts
│   │   ├── login.tmpl.ts
│   │   └── index.ts
│   ├── register/
│   │   ├── RegisterPage.ts
│   │   ├── register.tmpl.ts
│   │   └── index.ts
│   ├── settings/
│   │   ├── SettingsPage.ts
│   │   ├── settings.tmpl.ts
│   │   └── index.ts
│   ├── settings-edit/
│   │   ├── SettingsEditPage.ts
│   │   ├── settings-edit.tmpl.ts
│   │   └── index.ts
│   └── settings-password/
│       ├── SettingsPasswordPage.ts
│       ├── settings-password.tmpl.ts
│       └── index.ts
├── styles/          # Глобальные стили
│   ├── base.css
│   ├── components.css
│   ├── layouts.css
│   ├── main.css
│   └── variables.css
└── utils/           # Утилиты
    ├── templator.ts
    └── get.js
```

## Архитектура

Проект построен на основе паттерна MVC (Model-View-Controller):

- **View** — страницы, наследуются от базового класса `View` (который наследуется от `Block`)
- **Block** — базовый класс компонента с Event Bus для управления жизненным циклом
- **HTTPTransport** — класс для работы с HTTP запросами через XHR (GET, POST, PUT, DELETE)
- **Validation** — единая система валидации форм с поддержкой blur и submit событий

## Валидация

Все формы валидируются по следующим правилам:

- **first_name, second_name** — латиница или кириллица, первая буква заглавная, без пробелов, цифр и спецсимволов (кроме дефиса)
- **login** — от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов и спецсимволов (кроме дефиса и подчёркивания)
- **email** — латиница, может включать цифры и спецсимволы, обязательно должна быть @ и точка после неё
- **password** — от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра
- **phone** — от 10 до 15 символов, состоит из цифр, может начинаться с плюса
- **message** — не должно быть пустым

Валидация происходит:
1. При потере фокуса (blur) на каждом поле
2. При отправке формы (submit) — повторная проверка всех полей

## Версия Node.js

Node.js >= 18.0.0
