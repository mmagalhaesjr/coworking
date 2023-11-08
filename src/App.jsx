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
import Blog1 from "./pages/TodosBlogs/Blog1/Blog1";


export default function App() {

    return (

        <BrowserRouter>


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
                    <Route path="/confirmar" element={<ConfirmarEnvio />} />

                </Routes>
            </div>

        </BrowserRouter>


    )
}
