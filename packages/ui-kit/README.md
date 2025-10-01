# @platform/ui-kit

Библиотека переиспользуемых UI компонентов для платформы.

## Структура

- **atoms/** - базовые компоненты (Button, Input, Text)
- **molecules/** - составные компоненты (Card, Modal)
- **organisms/** - сложные блоки (Header, Footer)
- **templates/** - шаблоны страниц
- **layouts/** - Layout компоненты
- **themes/** - система тем

## Использование

```tsx
import { Button, ThemeProvider } from '@platform/ui-kit';

const theme = {
  colors: { primary: '#3B82F6', ... },
  // ...
};

<ThemeProvider theme={theme}>
  <Button variant="primary">Click me</Button>
</ThemeProvider>
```


