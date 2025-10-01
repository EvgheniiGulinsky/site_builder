# Быстрый старт

## Предварительные требования

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

Установка pnpm:
```bash
npm install -g pnpm
```

## Установка

1. **Клонировать репозиторий**

```bash
git clone https://github.com/EvgheniiGulinsky/site_builder.git
cd site_builder
```

2. **Установить зависимости**

```bash
pnpm install
```

Эта команда установит все зависимости для всех packages и sites в монорепо.

3. **Собрать packages**

```bash
pnpm turbo build --filter=@platform/*
```

Или собрать всё:
```bash
pnpm build
```

## Запуск примера сайта

```bash
# Запустить morevpn-tech в dev режиме
pnpm turbo dev --filter=morevpn-tech
```

Откройте [http://localhost:3000](http://localhost:3000)

## Структура команд

### Разработка

```bash
# Запустить все сайты
pnpm dev

# Запустить конкретный сайт
pnpm turbo dev --filter=morevpn-tech

# Запустить несколько сайтов
pnpm turbo dev --filter=morevpn-tech --filter=cs2skin-market
```

### Билд

```bash
# Собрать всё
pnpm build

# Собрать конкретный сайт
pnpm turbo build --filter=morevpn-tech

# Собрать только packages
pnpm turbo build --filter=@platform/*
```

### Линтинг и тесты

```bash
# Проверить код
pnpm lint

# Запустить тесты
pnpm test

# Проверка типов
pnpm turbo type-check
```

## Создание нового сайта

```bash
# Интерактивный режим (TODO)
pnpm create-site

# Пока инструмент в разработке, копируйте вручную:
cp -r sites/morevpn-tech sites/my-new-site
cd sites/my-new-site
# Отредактируйте config/site.config.ts и config/theme.config.ts
pnpm install
pnpm dev
```

## Работа с packages

### UI-Kit

```bash
# Разработка UI-kit с hot reload
cd packages/ui-kit
pnpm dev

# Сборка
pnpm build
```

### Core

```bash
cd packages/core
pnpm dev
```

## Troubleshooting

### Ошибка "Module not found"

Пересоберите packages:
```bash
pnpm turbo build --filter=@platform/*
```

### Проблемы с зависимостями

Очистите и переустановите:
```bash
rm -rf node_modules
pnpm store prune
pnpm install
```

### Конфликты портов

По умолчанию Next.js использует порт 3000. Если он занят:
```bash
PORT=3001 pnpm turbo dev --filter=morevpn-tech
```

## Следующие шаги

1. Изучите [архитектуру](./ARCHITECTURE.md)
2. Прочитайте [как создать сайт](./docs/creating-site.md)
3. Настройте [конфигурацию](./docs/configuration.md)
4. Разработайте свой первый сайт!

## Полезные ссылки

- [Turborepo Docs](https://turbo.build/repo/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)


