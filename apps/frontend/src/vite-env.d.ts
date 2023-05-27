/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // more env variables…
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
