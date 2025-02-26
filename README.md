# React + Vite

# Important Command List

npm create vite@latest projectName <br />
npm run dev <br />
npm i react-router-dom react-redux redux <br />

Redux <br />
Router <br />
Fetch API data <br />
Pass Data child to parent <br />


### Fetch GraphQL API data in ReactJS
```bash

fetch("http://localhost:3000/graphql", {
    mode:'cors',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',  // Optional, depending on your GraphQL server
    },
    body: JSON.stringify({
        query: '{mobiles{id,title,price}}',
    }),
})
.then(res=>res.json())
.then(res=>{
    console.log(res.data);
    setMobileData(res.data.mobiles)
})
.catch();


```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
