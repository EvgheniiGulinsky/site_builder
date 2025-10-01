# Конфигурация сайта

Каждый сайт настраивается через набор конфигурационных файлов в `config/`.

Основные параметры:

```typescript
interface SiteConfig {
  id: string;
  name: string;
  domain: string;
  defaultLocale: string;
  locales: string[];
  features: object;
  businessType: string;
  api?: object;
}
```

## theme.config.ts

Дизайн и стили:

```typescript
interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    ...
  };
}
```

## Переводы

Файлы в `content/locales/`:

```json
// ru.json
{
  "common": {
    "welcome": "Добро пожаловать"
  },
  "home": {
    "title": "Главная"
  }
}
```


