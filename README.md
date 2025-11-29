# Messenger

Веб-приложение мессенджера, разработанное в рамках курса Яндекс.Практикум.

## Демо

Netlify: https://gorgeous-zuccutto-778bcd.netlify.app/

## Дизайн

Figma: [Windows 11 Chat UI Kit](https://www.figma.com/design/bh0qhKG7ibxfwHjIRu4a75/Windows-11-Chat-UI-Kit--Community-?node-id=8-3365&p=f&t=sHZ3azHW0bzBrRD0-0)

## Функциональность

- Авторизация и регистрация пользователей
- Список чатов с поиском
- Переписка в реальном времени
- Настройки профиля пользователя
- Изменение пароля

## Технологии

- JavaScript (ES6+)
- Handlebars (шаблонизатор)
- Vite (сборка)
- PostCSS (autoprefixer, postcss-import)

## Установка

```bash
npm install
```

## Команды

- `npm run dev` — запуск dev-сервера
- `npm run build` — сборка проекта
- `npm run start` — сборка и запуск на порту 3000

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
├── components/       # Переиспользуемые компоненты
│   ├── avatar/
│   ├── button/
│   ├── icons/
│   ├── input/
│   └── link/
├── pages/           # Страницы приложения
│   ├── 404/
│   ├── 500/
│   ├── chats/
│   ├── login/
│   ├── register/
│   ├── settings/
│   ├── settings-edit/
│   └── settings-password/
├── styles/          # Глобальные стили
│   ├── base.css
│   ├── components.css
│   ├── layouts.css
│   ├── main.css
│   └── variables.css
└── utils/           # Утилиты
    ├── get.js
    ├── http.js
    └── templator.js
```

## Версия Node.js

Node.js >= 18.0.0
