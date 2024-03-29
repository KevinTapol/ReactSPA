# Travsery Media's React 2024
<!-- 48:30 -->

The goal of this repo is to refresh interview questions and prepare for React 19.

<a target="_blank" href="https://www.youtube.com/watch?v=LDB4uaJ87e0&t=840s&ab_channel=TraversyMedia">Click here for Traversy's tutorial on **React 2024 guide in preparation for React 19**</a>

*To change the default server, go into vite.config.js and add the following*

`server: {
    port: 3000,
  },`

*The entire file should now look like the following*

`import { defineConfig } from 'vite'`  
`import react from '@vitejs/plugin-react'`

`// https://vitejs.dev/config/`  
`export default defineConfig({`  
  `plugins: [react()],`  
  `server: {`  
   ` port: 3000,`  
  `},`  
`})`  

***To Install Tailwind***
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

***In package.json add the following to content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",]***

***Add the following to frontend/src/index.css***   
@tailwind base;  
@tailwind components;  
@tailwind utilities;  
- delete app.css
- delete all contents of app.jsx and create a new component with code snippet rafce

*To change the default font family, go into tailwind.config.js and add the following inside the extend object*

`fontFamily:{
        sans: ['Roboto', 'sans-serif']
    }`

*You can also declare global classes inside such as a grid class as follows*

`gridTemplateColumns: {`
        `"70/30": '70% 28%',`
      `},`

***install the following to handle routes on index for element routing or path for url / routing. React icons are used to replace font awesome and materialize icons.***
npm i react-router-dom react-icons

- props aka attributes

- default props set in the destructured arguments of the component example at 48:15

<a target="_blank" href="https://www.youtube.com/watch?v=wIyHSOugGGw&ab_channel=CodeBootcamp">Click here for Code Bootcamps Youtube video on **Every React concept short description**</a>