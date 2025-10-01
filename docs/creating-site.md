# Создание нового сайта

## Быстрый старт

```bash
pnpm create-site
```

## Структура нового сайта

```
sites/my-new-site/
├── config/
│   ├── site.config.ts      # Основные настройки
│   ├── theme.config.ts     # Тема
│   ├── routes.config.ts    # Маршруты (опционально)
│   └── features.config.ts  # Фичи (опционально)
├── content/
│   └── locales/
│       ├── ru.json
│       └── en.json
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── public/                 # Статические файлы
├── package.json
└── next.config.js
```

## Запуск

```bash
# Разработка
pnpm turbo dev --filter=my-new-site

# Билд
pnpm turbo build --filter=my-new-site

## Деплой

```bash
pnpm deploy my-new-site --env production
```

