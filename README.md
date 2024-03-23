# Awesome Guest Book

## Description

This is an awesome but simple guest book!

Add visitors by the form, typing their full name, e-mail address and select the department they work at.
You should check the agreement confirmation checkbox to activate the `Add` button.
If everything feels OK, add the visitor by this button and you will see this visitor in the visitors table. In the table, you can view and sort visitors as well as select some or all of them for removal.
The `Remove` button at the top removes the selected visitors.

The visitors are preserved upon reload, data is stored in the browser's `localStorate`.

## Technical stack

The application is written in `React + TypeScript + Vite`:

- [React](https://react.dev/) for javascript web application framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Vite](https://vitejs.dev/) for build

Additional libraries:

- [Material UI (MUI)](https://mui.com/) for UI components
- [Material UI Data Grid](https://mui.com/x/react-data-grid/) for visitors table
- [Final Form](https://final-form.org/) for add visitor form
- [Pullstate](https://lostpebble.github.io/pullstate/) for visitors state management

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
