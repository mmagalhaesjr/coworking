import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";

import TelaBlog from './pages/Blog/TelaBlog';
import ConfirmarEnvio from './pages/ConfirmarEnvio/ConfirmarEnvio';
import Main from './pages/Main/Main'


export default function App() {

    return (
        
            
                <BrowserRouter>

                    <UserProvider>
                        <div className="App">
                            <Routes>
                                

                                <Route path="/" element={<Main />} />
                                <Route path="/blog" element={<TelaBlog />} />
                                <Route path="/confirmar" element={<ConfirmarEnvio />} />
                            </Routes>
                        </div>
                    </UserProvider>

                </BrowserRouter>
           
   


    )
}
