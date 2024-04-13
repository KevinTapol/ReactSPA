# Travsery Media's React 2024
<!-- 2:41:48 -->

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

***install the following to handle routes on index for element routing or path for url / routing. React icons are used to replace font awesome and material icons.***
npm i react-router-dom react-icons

- props aka attributes

- default props set in the destructured arguments of the component example at 48:15

<a target="_blank" href="https://www.youtube.com/watch?v=wIyHSOugGGw&ab_channel=CodeBootcamp">Click here for Code Bootcamps Youtube video on **Every React concept short description**</a>

is you could be learning what react-toastify done had is? Deep thoughts by my previous Sous Chef Robin

consider adding the Extension Console Ninja seen at 58:19 and multiple cursor case preserve at 2:28:03

*The reason we use Link tags instead of anchor tags is because anchor tags will do a full page refresh while Link tags do not. The anchor tag onClick refresh can be seen in the title with the favicon.*

*The difference between Link and NavLink is that with NavLink you can add a class to the active link.*

*At time stamp 1:43:31 Brad is switching from the front end jobs.json array for front end data to an api called npmjs.com/package/json-server. This allows us to create a frontend json file, hit up the backend mock api of our desired structure and make changes based on CRUD HTTPS methods. To install json-server with a dev dependency, type the following*
- npm i -D json-server

*To run the mock backend server, go into package.json and add the follow to "scripts": {}*
"server": "json-server --watch src/jobs.json --port 8000"

*This will create a server on 8000 using the jobs.json where the object key of jobs value is an array of objects. Now if we type in the terminal npm run server, we will have an endpoint http://localhost:8000/jobs that we can click on to see our object with a value of an array of objects. You can even do http://localhost:8000/jobs/1 to grab the object with the id of 1*

*What this means is that instead of building a REST API with Express or Django etc to test front end functionality, we can instead simply use json-server for full CRUD REST API calls! Thank you computer overlords!*

*There is a library of preset spinner components. https://www.davidhu.io/react-spinners/*
npm i react-spinners

2:00:00
*To add a proxy for the json-server, go to your vite.config.js*
inside the server object add
proxy: {
  '/api': {
    target: 'http://localhost:8000',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  }
}

*what this does is replace the path 'https://localhost:8000' with '/api'*
Example 'https://localhost:8000/jobs' will be the same as '/api/jobs'

*To change the localhost port, you must go to vite.config.js*

2:47:21
toastify is a pop up alert status that has a position absolute in the top right corner 
- npm i react-toastify


*Sidenote to check for loader backend fail, do not run the server npm run server but do run the frontend npm run dev. This way you can check for loading animations for fail api responses etc.*

*2:35:35 Reason why to not have the POST request crud in App.jsx instead of AddJobPage.jsx*
*Delete 2:45:50*
