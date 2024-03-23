# Awesome Guest Book

## Description

This is an awesome but simple guest book!

Add visitors by the form, typing their full name, e-mail address and select the department they work at.
The `Reset` button clears the data you typed and you can start again from scratch.
You should check the agreement confirmation checkbox to activate the `Add` button.
If everything feels OK, add the visitor by this button and you will see this visitor in the visitors table. In the table, you can view and sort visitors as well as select some or all of them for removal.
The `Remove` button at the top removes the selected visitors.

The visitors are preserved upon reload, data is stored in the browser's `localStorate`.

## Demo

Deployed on github pages [here](https://norama.github.io/guestbook/).

## Installation

Install dependencies by

```
npm install
```

Run the application in development mode by

```
npm run dev
```

Build for production by

```
npm run build
```

Preview production build by

```
npm run build
```

Deploy to github pages by

```
npm run deploy
```

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
