import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";

import TelaBlog from './pages/Blog/TelaBlog';
import ConfirmarEnvio from './pages/ConfirmarEnvio/ConfirmarEnvio';
import Main from './pages/Main/Main'

import MDedicada from './pages/cadaEspaco/MDedicada/MDedicada';
import SPrivativa from './pages/cadaEspaco/SPrivativa/SPrivativa';
import SReuniao from './pages/cadaEspaco/SReuniao/SReuniao';
import MCompartilhada from './pages/cadaEspaco/MCompartilhada/MCompartilhada';
import SAtendimento from './pages/cadaEspaco/SAtendimento/SAtendimento';




export default function App() {

    return (
        
            
                <BrowserRouter>

                    <UserProvider>
                        <div className="App">
                            <Routes>
                                

                                <Route path="/" element={<Main />} />

                                <Route path="/compartilhada" element={<MCompartilhada/>} />
                                <Route path="/dedicada" element={<MDedicada />} />
                                <Route path="/privativa" element={<SPrivativa />} />
                                <Route path="/reuniao" element={<SReuniao/>} />
                                <Route path="/atendimento" element={<SAtendimento/>} />

                                <Route path="/blog" element={<TelaBlog />} />
                                <Route path="/confirmar" element={<ConfirmarEnvio />} />
                            </Routes>
                        </div>
                    </UserProvider>

                </BrowserRouter>
           
   


    )
}
