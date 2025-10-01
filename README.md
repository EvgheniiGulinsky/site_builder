# Site Builder Platform

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/EvgheniiGulinsky/site_builder.git
cd site_builder

# Установить зависимости
pnpm install
```

### Разработка

```bash
# Запустить все сайты в dev режиме
pnpm dev

# Запустить конкретный сайт
pnpm turbo dev --filter=morevpn-tech

# Билд всех сайтов
pnpm build

# Билд конкретного сайта
pnpm turbo build --filter=morevpn-tech
```

### Создание нового сайта

```bash
# Интерактивный режим
pnpm create-site

# С параметрами
pnpm create-site --name "My Site" --id "my-site" --type "marketplace"
```

## 🛠️ Технологический стек

- **React 18+** - UI библиотека
- **Next.js 14+** - React фреймворк (SSR/SSG)
- **TypeScript** - типизация
- **pnpm** - пакетный менеджер
- **Turborepo** - система сборки
- **Tailwind CSS** - стилизация
- **Radix UI** - headless компоненты

## 📝 Автоматизация

```bash
# Создать новый сайт
pnpm create-site

# Автоперевод контента
pnpm translate morevpn-tech --from ru --to en,de

# Генерация SEO (sitemap, robots.txt)
pnpm seo-generate morevpn-tech

# Деплой
pnpm deploy morevpn-tech --env production
```

## 📚 Документация

- [Архитектура](./ARCHITECTURE.md) - подробное описание архитектурных решений
- [Создание нового сайта](./docs/creating-site.md)
- [Конфигурация](./docs/configuration.md)
- [UI-Kit](./docs/ui-kit.md)

