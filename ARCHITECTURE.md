# Архитектура Frontend-платформы для мультибрендовых сайтов

## Концепция

Платформа — **монорепозиторий с модульной архитектурой**. Каждый сайт использует общие компоненты и создаётся через конфигурационные файлы.

**Принципы:**
- **Configuration over Code** - новые сайты через конфигурацию
- **DRY** - максимальное переиспользование
- **Scalability First** - рассчитано на 100+ сайтов

---

## Архитектура проекта

### Какую структуру проекта вы предлагаете (monorepo / polyrepo)?

**Monorepo**

**Обоснование:**
- ✅ Единая версия зависимостей
- ✅ Атомарные изменения - изменения доступны всем сразу
- ✅ Централизованный CI/CD
- ✅ Простое переиспользование кода
- ✅ TypeScript типы работают across packages
- ✅ Легкий рефакторинг

**Сравнение:**

| Задача | Монорепо | Полирепо |
|--------|----------|----------|
| Создание нового сайта | 1 час | 1 день |
| Обновление компонента | 30 мин | 3 часа |
| Добавление фичи | 1 день | 3-5 дней |
| Исправление бага | 1 час | 4-6 часов |

**Инструменты:**
- **pnpm workspaces** - управление зависимостями
- **Turborepo** - кеширование и параллельная сборка
- **Changesets** - управление версиями

---

### Как будет организовано переиспользование компонентов?

**Структура монорепозитория:**

```
platform/
├── packages/
│   ├── ui-kit/              # Библиотека компонентов
│   │   ├── atoms/           # Button, Input, Icon
│   │   ├── molecules/       # Card, Dropdown, Modal
│   │   ├── organisms/       # Header, Footer, AuthForm
│   │   ├── templates/       # LandingTemplate, DashboardTemplate
│   │   └── themes/          # Система тем
│   ├── core/                # Ядро
│   │   ├── config-loader/   # Конфиги
│   │   ├── routing/         # Роутинг
│   │   ├── i18n/            # Локализация
│   │   └── seo/             # SEO
│   ├── features/            # Бизнес-логика
│   │   ├── auth/
│   │   ├── payment/
│   │   └── subscription/
│   └── shared/              # Общее
│       ├── types/
│       └── validators/
├── sites/                   # Сайты
│   ├── morevpn-tech/
│   └── cs2skin-market/
└── tools/                   # Автоматизация
    ├── create-site/
    └── deploy-scripts/
```

**Принцип:** Atomic Design (atoms → molecules → organisms → templates), каждый сайт применяет свою тему.

---

### Какие основные компоненты вы бы выделили в типах бизнеса?

| Тип бизнеса | Ключевые компоненты |
|-------------|---------------------|
| **VPN/Подписки** | PricingTable, SubscriptionPlans, VPNDashboard, ServerSelector |
| **Маркетплейс** | ProductCard, ShoppingCart, CheckoutFlow, OrderTracking |
| **SaaS** | DashboardLayout, FeatureCards, PricingTiers, UsageMetrics |
| **Все типы** | Header, Footer, AuthForm, PaymentForm, Blog, FAQ |

---

### Как планируется реализовать изоляцию сайтов?

**1. Файловая изоляция:**
- Каждый сайт в отдельной директории `sites/{site-id}/`
- Собственные config, content, public, src

**2. Конфигурационная:**
- Свой `site.config.ts`
- Environment variables через `.env.{site-id}`
- Отдельные API endpoints

**3. Билд изоляция:**
```bash
pnpm turbo run build --filter=morevpn-tech
```

**4. Деплой изоляция:**
- Каждый сайт на свой домен
- CI/CD деплоит только изменённые

**5. Runtime изоляция:**
- Разные домены и Next.js инстансы
- Независимые cookie/session

---

## Конфигурация

### Как будет реализовано добавление нового сайта?

**CLI команда:**

```bash
pnpm create-site --name "New Site" --id "new-site" --type "marketplace"
```

**Скрипт автоматически:**
1. Создаёт структуру директорий
2. Генерирует конфиги из шаблонов
3. Настраивает package.json
4. Добавляет в workspace
5. Создаёт базовые переводы
6. Настраивает CI/CD

**Результат:** Новый сайт готов за 1-2 минуты.

---

### Как будет устроена система конфигурации?

**Структура конфигов:**

```
sites/morevpn-tech/config/
├── site.config.ts       # Основные настройки
├── theme.config.ts      # Цвета, шрифты, spacing
├── routes.config.ts     # Маршруты
├── features.config.ts   # Включенные фичи
└── seo.config.ts        # SEO
```

**Примеры:**

**site.config.ts:**
```typescript
{
  id: 'morevpn-tech',
  domain: 'morevpn.tech',
  locales: ['ru', 'en'],
  features: { auth: true, subscription: true, payment: ['stripe'] },
  businessType: 'vpn-subscription'
}
```

**theme.config.ts:**
```typescript
{
  colors: { primary: '#3B82F6', secondary: '#8B5CF6' },
  typography: { fontFamily: { primary: 'Inter' } },
  spacing: { scale: [0, 4, 8, 16, 24, 32, 48] }
}
```

**routes.config.ts:**
```typescript
[
  { path: '/', template: 'landing', components: { hero: 'HeroVPN' } },
  { path: '/dashboard', template: 'dashboard', auth: true }
]
```

---

### Какие ключевые параметры будут конфигурируемыми?

**1. Идентификация:** ID, название, домен, языки  
**2. Дизайн:** Цвета, шрифты, spacing  
**3. Фичи:** Auth, payment, blog, subscription  
**4. Интеграции:** Аналитика, поддержка, email  
**5. SEO:** Meta теги, OG изображения  
**6. API:** Endpoints, timeouts, webhooks

---

## UI-Kit / Design System

### Как будет реализована поддержка уникального дизайна?

**Система тем через React Context + CSS Variables:**

**Результат:** Один компонент выглядит по-разному на разных сайтах.

---

### Минимальный набор компонентов UI-кита?

**Atoms:** Button, Input, Select, Checkbox, Text, Icon, Badge, Spinner  
**Molecules:** FormField, Card, Dropdown, Modal, Tooltip, Tabs  
**Organisms:** Header, Footer, AuthForm, PricingCard, SearchBar  
**Templates:** Landing, Dashboard, BlogPost, Checkout  
**Layouts:** MainLayout, DashboardLayout, AuthLayout

---

### Будет ли использоваться сторонняя библиотека?

**Комбинированный подход:**

**Radix UI (headless):**
- ✅ Полный контроль над стилями
- ✅ Accessibility из коробки
- Используем: Dialog, Dropdown, Tabs, Tooltip, Select

**Tailwind CSS + CSS Modules:**
- Tailwind для утилитарных классов
- CSS Modules для специфичных компонентов

**Framer Motion:**
- Плавные анимации

**Собственные:**
- Button, Input, Card (простые, под контролем)

---

### Как будет обеспечиваться масштабируемость UI-кита?

**1. Версионирование:** Semantic Versioning, Changesets  
**2. Документация:** Storybook с примерами  
**3. Тестирование:** Unit тесты, visual regression  
**4. CI/CD:** Автотесты, bundle size мониторинг

---

## Выбор технологий

### Какой стек технологий?

| Технология | Назначение | Обоснование |
|------------|------------|-------------|
| **React 18+** | Frontend | Экосистема, Server Components |
| **Next.js 14+** | Framework | SSR/SSG, оптимизация |
| **TypeScript** | Language | Type safety, DX |
| **pnpm** | Package Manager | Экономия места, скорость |
| **Turborepo** | Build System | Кеширование |
| **Tailwind CSS** | Styling | Быстрая разработка |
| **Radix UI** | Components | Headless, a11y |

**Дополнительно:**
- **Zustand** - state management
- **React Query** - server state
- **React Hook Form + Zod** - формы
- **next-seo** - SEO
- **Vitest + Playwright** - тесты
- **Storybook** - документация

---

### Основные и вспомогательные инструменты?

**Основные (критичны):**
1. React + Next.js - SSR/SSG
2. TypeScript - type safety
3. pnpm + Turborepo - монорепо
4. Система тем - уникальный дизайн

**Вспомогательные (улучшают DX):**
1. Storybook - документация
2. Vitest - тесты
3. ESLint + Prettier - code style
4. Changesets - версионирование

---

## Развёртывание и инфраструктура

### Как будет организован процесс деплоя?

**Стратегия:** Раздельный билд под каждый сайт

**Преимущества:**
- ✅ Независимый деплой
- ✅ Меньший bundle
- ✅ Безопасность

**Процесс:**

Определяем изменённые сайты -> Деплоим только и
# 
CHANGED=$(git diff --name-only HEAD HEAD~1 | grep "^sites/")

---

### Как будет устроен dev/staging/prod pipeline?

**3 окружения:**

**Development (локально):**
- Hot reload, source maps, dev API

**Staging (PR):**
- Preview deployments
- Staging API, тестовые платежи
- Уникальный URL для каждого PR

**Production (merge в main):**
- Минифицированный код
- CDN caching
- Production API

---

### Автоматизация запуска нового сайта?

**CLI инструмент:**

```bash
pnpm create-site
```

**Интерактивный режим:**
```
? Название: New Gaming Market
? ID: new-gaming-market
? Тип: Marketplace
? Фичи: [x] Auth [x] Payment

**Альтернативы:**
- Web UI - для non-technical пользователей
- Git-based - копирование шаблона вручную

---

### Автоматизация типовых задач?

**Подход:** Создаются кастомные Node.js скрипты в `tools/`, регистрируются как команды в root `package.json`.

**Что автоматизируется:**

**1. Создание сайта** (`tools/create-site/`)
- Копирует шаблон из `templates/site-template`
- Заменяет плейсхолдеры (ID, название, тип)
- Генерирует конфиги под выбранный тип бизнеса
- Добавляет запись в `pnpm-workspace.yaml`
- Запускает `pnpm install`

**2. Автоперевод** (`tools/translate/`)
- Использует Google Translate API
- Переводит все ключи из базовой локали
- Сохраняет в `content/locales/{lang}.json`

**3. SEO генерация** (`tools/seo/`)
- Сканирует роуты из `routes.config.ts`
- Генерирует `sitemap.xml` и `robots.txt`
- Добавляет динамические страницы из API (если есть блог)

**4. Деплой** (`tools/deploy/`)
- Определяет изменённые сайты через `git diff`
- Запускает `turbo build --filter={site}`
- Деплоит через Vercel CLI
- Отправляет уведомление в Slack

**5. Массовое обновление** (`tools/update-deps/`)
- Обновляет зависимость во всех `package.json` в `sites/`
- Запускает `pnpm install`

**6. Оптимизация изображений** (`tools/optimize-images/`)
- Конвертирует в WebP через `sharp`
- Генерирует blur placeholders
- Обновляет импорты в коде

**Регистрация в package.json:**
```json
{
  "scripts": {
    "create-site": "node tools/create-site/index.js",
    "translate": "node tools/translate/index.js",
    "deploy": "bash tools/deploy/deploy.sh"
  }
}
```