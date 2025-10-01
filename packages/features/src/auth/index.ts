// Authentication feature
export interface AuthConfig {
  providers: string[];
  registration: boolean;
  emailVerification?: boolean;
}

export const AuthFeature = {
  name: 'auth',
  // Компоненты и логика аутентификации
};


