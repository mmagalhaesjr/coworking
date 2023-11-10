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
import Blog4 from "./pages/blogs/Blog4/Blog4";
import Blog5 from './pages/blogs/Blog5/Blog5';
// import Blog6 from './pages/blogs/Blog6/Blog6';
// import Blog7 from './pages/blogs/Blog7/Blog7';
// import Blog8 from './pages/blogs/Blog8/Blog8';
// import Blog9 from './pages/blogs/Blog9/Blog9';
// import Blog10 from './pages/blogs/Blog10/Blog10';

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
                        <Route path="/blog4" element={<Blog4 />} />
                        <Route path="/blog5" element={<Blog5 />} />
                        {/* <Route path="/blog6" element={<Blog6 />} />
                        <Route path="/blog7" element={<Blog7 />} />
                        <Route path="/blog8" element={<Blog8 />} />
                        <Route path="/blog9" element={<Blog9 />} />
                        <Route path="/blog10" element={<Blog10 />} /> */}

                        <Route path="/confirmar" element={<ConfirmarEnvio />} />


                    </Routes>
                </div>
            </HomeContextProvider>

        </BrowserRouter>


    )
}
