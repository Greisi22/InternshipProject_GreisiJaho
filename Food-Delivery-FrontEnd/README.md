# Accounting Front-End
This is accounting frontend part, and it functions as a microfrontend architecture.

## Table of Contents
- [Requirements](#requirements)
- [Tech stack](#tech-stack)
- [Development](#development)
- [Production](#production)
- [Contributions](#contributions)
- [App Structure and Conventions](#AppStructureandConventions)

## Requirements
- Node.js `<= 21`

## Tech stack 
- `Styling` : Tailwind css
- `State management` : Redux-toolkit
- `Icons` : react-icons
- `components` : headless-ui 

## Development
Clone the repository:
``` 
git clone https://github.com/AAK-Tele-Science/Accounting-Dev
```
Navigate to the project directory:

``` 
cd Front-End
```
Install project dependency

``` 
npm install
```
Run the app
```
npm run dev
```
OR 
> use docker file to run the app 
## Production 
Clone the repository:
``` 
git clone https://github.com/AAK-Tele-Science/Accounting-Dev
```
Navigate to the project directory:

``` 
cd Front-End
```
Install project dependency

``` 
npm install
```
Build the app
```
npm run build
```
Run the `build` version of the app
```
npm run preview
```
OR 
> use production docker file to run the app 
## Contributions
To contribute to this codebase, follow these simple steps:

- Start by cloning the repository to your computer. 
- Create a new `branch` using the format `<your_name>/<your_task>`.
- When you finish working on your task, review and test your changes.
- Submit a pull request (PR) to merge your branch with the main codebase.
> To ensure proper code review and maintain a collaborative workflow, please avoid merging the code on your own. Instead, patiently wait for the maintainer or senior members to review your code before proceeding with the merge.

## App Structure and Conventions
- `assets` : Contains static assets like images, fonts, and global styles.
- `components` : Component is a peice of code that can be re-usesabele.
- `pages` 
- `context` : state management related code 
- `hooks` : Custom React hooks that can be reused across components.
- `utils` : General utility functions that don't belong to a specific component or service.
- `tests` : Test files 
- `config` 
- `types`
- `provider` : Theme and data provider 
- `styles`

```
Front-End
|-- public
|-- src
|   |-- assets
|   |   |-- images
|   |   |-- styles
|   |       |-- global.css
|   |
|   |-- components
|   |   |-- dashboard
|   |   |   |-- container
|   |   |   |   |-- SmartComponent1.tsx
|   |   |   |   |-- ...
|   |   |   |   |-- __tests__
|   |   |   |       |-- SmartComponent1.test.tsx
|   |   |   |       |-- ...
|   |   |   |
|   |   |   |-- presentation
|   |   |       |-- PresentationalComponent1.tsx
|   |   |       |-- ...
|   |   |       |-- __tests__
|   |   |           |-- PresentationalComponent1.test.tsx
|   |   |           |-- ...
|   |   |
|   |   |-- project
|   |   |   |-- container
|   |   |   |   |-- SmartComponent1.tsx
|   |   |   |   |-- ...
|   |   |   |   |-- __tests__
|   |   |   |       |-- SmartComponent1.test.tsx
|   |   |   |       |-- ...
|   |   |   |
|   |   |   |-- presentation
|   |   |       |-- PresentationalComponent1.tsx
|   |   |       |-- ...
|   |   |       |-- __tests__
|   |   |           |-- PresentationalComponent1.test.tsx
|   |   |           |-- ...
|   |   |
|   |   |-- 📍put other directories(taskboard, report, invoices, ...) in the same order as above
|   |   |
|   |   |-- common
|   |       |-- hooks
|   |       |   |-- useFetch.ts
|   |       |-- shared
|   |       |   |-- Button.tsx
|   |       |-- ...
|   |
|   |-- config
|   |   |-- routes.tsx
|   |   |-- api.ts
|   |   |-- ...
|   |
|   |-- context 
|   |   |-- AuthContext.tsx
|   |   |-- ThemeContext.tsx
|   |   |-- ...
|   |
|   |-- pages
|   |   |-- Dashboard.tsx
|   |   |-- TaskBoard.tsx
|   |   |-- ...
|   |
|   |-- types
|   |   |-- dashboard
|   |   |   |-- dashboard-types.ts
|   |   |   |-- ...
|   |   |-- project
|   |   |   |-- project-types.ts
|   |   |   |-- ...
|   |   |-- 📍put other type directories in the same order as above
|   |
|   |-- utils
|   |   |-- formatDate.ts
|   |   |-- ...
|   |
|   |-- App.tsx
|   |-- ...
|
|-- Front-End-setting-files

```

## Accounting  Machine-Learning

Has everything related to machine learning from training, data..etc.

