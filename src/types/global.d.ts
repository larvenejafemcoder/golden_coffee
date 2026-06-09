interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  // Extend window properties here if needed
}

interface Document {
  documentElement: HTMLElement;
}
