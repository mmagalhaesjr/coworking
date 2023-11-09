import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaBlog from './pages/Blog/TelaBlog';
import ConfirmarEnvio from './pages/ConfirmarEnvio/ConfirmarEnvio';
import Main from './pages/Main/Main'
import MDedicada from './pages/cadaEspaco/MDedicada/MDedicada';
import SPrivativa from './pages/cadaEspaco/SPrivativa/SPrivativa';
import SReuniao from './pages/cadaEspaco/SReuniao/SReuniao';
import MCompartilhada from './pages/cadaEspaco/MCompartilhada/MCompartilhada';
import SAtendimento from './pages/cadaEspaco/SAtendimento/SAtendimento';
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Planos from './pages/Planos/Planos';
import Eventos from "./pages/Eventos/Eventos";
import Blog1 from './pages/blogs/Blog1/Blog1';
import Blog2 from "./pages/blogs/Blog2/Blog2";
import Blog3 from "./pages/blogs/Blog3/Blog3";

import HomeContextProvider  from "./contexts/HomeContext";

export default function App() {

    return (

        <BrowserRouter>

            <HomeContextProvider>
                <div className="App">
                    <Routes>


                        <Route path="/" element={<Main />} />
                        <Route path="/compartilhada" element={<MCompartilhada />} />
                        <Route path="/dedicada" element={<MDedicada />} />
                        <Route path="/privativa" element={<SPrivativa />} />
                        <Route path="/reuniao" element={<SReuniao />} />
                        <Route path="/atendimento" element={<SAtendimento />} />
                        <Route path="/quem-somos" element={<QuemSomos />} />

                        <Route path="/planos" element={<Planos />} />
                        <Route path="/eventos" element={<Eventos />} />

                        <Route path="/blog" element={<TelaBlog />} />

                        <Route path="/blog1" element={<Blog1 />} />
                        <Route path="/blog2" element={<Blog2 />} />
                        <Route path="/blog3" element={<Blog3 />} />

                        <Route path="/confirmar" element={<ConfirmarEnvio />} />


                    </Routes>
                </div>
            </HomeContextProvider>

        </BrowserRouter>


    )
}
