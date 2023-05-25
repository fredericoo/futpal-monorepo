# Routes

The routes folder contains all the routes of the application. Please abide to the naming standards:

```
📁 routes/
│
├── 📁 cats-and-dogs/
│   ├── ⚛️ cats-and-dogs.page.tsx
│   ├── cats-and-dogs.loader.ts
│   ├── cats-and-dogs.action.ts
│   └── index.ts
│
├── 📁 cat/
│   ├── ⚛️ cat.page.tsx
│   ├── cat.loader.tsx
│   └── index.ts
│
└── router.ts
```

## Dos and Don'ts

- ✅ kebab-case for folder and file names
- ✅ plural for listing routes, singular for detail routes, ignoring any params such as `id` (e.g.: `/cat`)
- ❌ Use `.tsx` for files that don't export a React component

## The Page Component

Your `route.page.tsx` file should named-export a React component that will be rendered when the route is hit. It should be a [React Function Component](https://reactjs.org/docs/components-and-props.html#function-and-class-components) and should be named after the route, in [PascalCase](https://en.wikipedia.org/wiki/PascalCase).

```tsx
// ⚛️ cat.page.tsx
import React from "react";

const CatPage = () => {
  return <div>Meow</div>;
};
```

## The Actions and Loaders

Your `route.action.ts` and `route.loader.ts` files should named-export a function that will be called when the route is hit. It should be named after the route, in [camelCase](https://en.wikipedia.org/wiki/Camel_case).

Use the `makeAction` and `makeLoader` utilities to ensure your types are correctly inferred.

```ts
// cat.loader.ts
import { makeLoader } from "~/domains/routing/routing.utils";

export const catLoader = makeLoader(async () => {
  const cat = await fetchCat();
  return { cat };
});
```

```ts
// cat.action.ts
import { makeAction } from "~/domains/routing/routing.utils";

export const catAction = makeAction(async () => {
  const cat = await fetchCat();
  return { cat };
});
```
