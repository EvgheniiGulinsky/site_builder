export interface RouteConfig {
  path: string;
  template: string;
  auth?: boolean;
  components?: Record<string, string>;
}


