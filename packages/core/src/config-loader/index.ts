export interface SiteConfig {
  id: string;
  name: string;
  domain: string;
  defaultLocale: string;
  locales: string[];
  features: Record<string, any>;
  businessType: string;
  api?: {
    baseUrl: string;
    timeout?: number;
  };
}

