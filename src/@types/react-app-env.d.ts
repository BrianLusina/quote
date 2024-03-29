/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly ENV: 'development' | 'staging' | 'test' | 'production';      
        readonly NODE_ENV: 'development' | 'production' | 'test' | 'staging';
        readonly REST_API_URL: string;
        readonly API_USERNAME: string;
        readonly API_PASSWORD: string;
        readonly SENTRY_DSN: string;
        readonly FIREBASE_API_KEY: string;
        readonly FIREBASE_AUTH_DOMAIN: string;
        readonly FIREBASE_PROJECT_ID: string;
        readonly FIREBASE_STORAGE_BUCKET: string;
        readonly FIREBASE_MESSAGING_SENDER_ID: string;
        readonly FIREBASE_APP_ID: string;
        readonly FIREBASE_MEASUREMENT_ID: string;
    }
  }
  
  declare module '*.avif' {
    const src: string;
    export default src;
  }
  
  declare module '*.bmp' {
    const src: string;
    export default src;
  }
  
  declare module '*.gif' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpg' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpeg' {
    const src: string;
    export default src;
  }
  
  declare module '*.png' {
    const src: string;
    export default src;
  }
  
  declare module '*.webp' {
      const src: string;
      export default src;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<
      SVGSVGElement
    > & { title?: string }>;
  
    const src: string;
    export default src;
  }
  
  declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }