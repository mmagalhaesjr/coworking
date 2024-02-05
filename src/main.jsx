import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/GlobalStyle.js'
import ReactGA from "react-ga4";

ReactGA.initialize("G-NG7E0CK0ZP");


ReactGA.send({ hitType: "pageview", page: "/", title: "www.temasekjf.com.br" });



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
