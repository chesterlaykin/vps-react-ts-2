vps-react-ts-2

- [VPS-react-ts-2](#vps-react-ts-2)
- [Comments](#comments)
  - [oct 2022](#oct-2022)
- [Installed dependencies + configurations](#installed-dependencies--configurations)
  - [**Vite-plugin-ssr**](#vite-plugin-ssr)
  - [**Typescript**](#typescript)
    - [Compileroptions configurations](#compileroptions-configurations)
  - [**Vite**](#vite)
  - [**SASS**](#sass)
    - [**Sass**](#sass-1)
  - [MobX](#mobx)
  - [Redux](#redux)
  - [Eslint](#eslint)

# VPS-react-ts-2
VPS-react-ts-2 (Vite-plugin-ssr with react + typescript)
# Comments

## oct 2022


- Added usehooks-ts
- Added products components and json-data
- Added MobX, alternative to Redux
- Added redux toolkit code

# Installed dependencies + configurations

## **Vite-plugin-ssr**

Command used:

`npm init vite-plugin-ssr@latest`

Version: 0.4.36

CLI install options:

- react-ts

Install:
`yarn install`

## **Typescript**

The chosen CLI option `react-ts` installs:

- @types/compression
- @types/express
- @types/node
- @types/react
- @types/react-dom

### Compileroptions configurations

To not have to import React:

`"jsx": "react-jsx"`

## **Vite**

Version: 3.0.9    //pinned due to issue in 3.1.3

Installed:

- @vitejs/plugin-react

## **SASS**

### **Sass**

Sass

## MobX

Packages:

mobx 
mobx-react

`yarn add mobx mobx-react`

Added to tsconfig:

`"useDefineForClassFields": true,`

## Redux

@reduxjs/toolkit
react-redux

If not in use, everything redux can be put away in "code-resources" folder

## Eslint

eslint
@typescript-eslint/parser
eslint-plugin-mobx

`yarn add eslint @typescript-eslint/parser eslint-plugin-mobx -D`
