import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContextProvider from "./contexts/HomeContext";
import { Helmet } from 'react-helmet';


import Main from './pages/Main/Main'
import MDedicada from './pages/cadaEspaco/MDedicada/MDedicada';
import SPrivativa from './pages/cadaEspaco/SPrivativa/SPrivativa';
import SReuniao from './pages/cadaEspaco/SReuniao/SReuniao';
import MCompartilhada from './pages/cadaEspaco/MCompartilhada/MCompartilhada';

import SAtendimento from './pages/cadaEspaco/SAtendimento/SAtendimento';
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Planos from './pages/Planos/Planos';
import Eventos from "./pages/Eventos/Eventos";
// import TelaBlog from './pages/Blog/TelaBlog';
import BlogPagina from "./pages/BlogPagina/BlogPagina";

import { PoliticaP } from "./pages/PoliticaP/PoliticaP";
import { TermosU } from "./pages/TermosU/TermosU";
import ConfirmarEnvio from './pages/ConfirmarEnvio/ConfirmarEnvio';
import Erro from './components/Error/Error';



import Blog1 from './pages/blogs/Blog1/Blog1';
import Blog2 from "./pages/blogs/Blog2/Blog2";
import Blog3 from "./pages/blogs/Blog3/Blog3";
import Blog4 from "./pages/blogs/Blog4/Blog4";
import Blog5 from './pages/blogs/Blog5/Blog5';
import Blog6 from "./pages/blogs/Blog6/Blog6";
import Blog7 from './pages/blogs/Blog7/Blog7';
import Blog8 from './pages/blogs/Blog8/Blog8';
import Blog9 from './pages/blogs/Blog9/Blog9';
import Blog10 from './pages/blogs/Blog10/Blog10';
import Blog11 from './pages/blogs/Blog11/Blog11';
import Blog12 from "./pages/blogs/Blog12/Blog12";
import Blog13 from './pages/blogs/Blog13/Blog13';
import Blog14 from "./pages/blogs/Blog14/Blog14";
import Blog15 from "./pages/blogs/Blog15/Blog15";
import Blog16 from "./pages/blogs/Blog16/Blog16";

import SalaParis from "./pages/LandingPages/SalaParis/SalaParis";











export default function App() {

    return (
        <>

            <Helmet>
                <meta name="description" content="Bem-vindo ao Temasek Coworking JF - O melhor espaço de coworking em Juiz de Fora. Oferecemos ambientes colaborativos para trabalho, networking e eventos. Conheça nossos espaços e planos." />
            </Helmet>

            <BrowserRouter>

                <HomeContextProvider>
                    <div className="App">
                        <Routes>






                            <Route path="/" exact element={<Main />} />
                            <Route path="/compartilhada" exact element={<MCompartilhada />} />
                            <Route path="/dedicada" exact element={<MDedicada />} />
                            <Route path="/privativa" exact element={<SPrivativa />} />
                            <Route path="/reuniao" exact element={<SReuniao />} />
                            <Route path="/atendimento" exact element={<SAtendimento />} />
                            <Route path="/quem-somos" exact element={<QuemSomos />} />

                            <Route path="/planos" exact element={<Planos />} />
                            <Route path="/eventos" exact element={<Eventos />} />

                            <Route path="/politicaDePrivacidade" exact element={<PoliticaP />} />
                            <Route path="/termosDeUso" exact element={<TermosU />} />

                            {/* <Route path="/blog" exact element={<TelaBlog />} /> */}
                            <Route path="/Blog" exact element={<BlogPagina/>} />

                            <Route path="/blog1" exact element={<Blog1 />} />
                            <Route path="/blog2" exact element={<Blog2 />} />
                            <Route path="/blog3" exact element={<Blog3 />} />
                            <Route path="/blog4" exact element={<Blog4 />} />
                            <Route path="/blog5" exact element={<Blog5 />} />
                            <Route path="/blog6" exact element={<Blog6 />} />
                            <Route path="/blog7" exact element={<Blog7 />} />
                            <Route path="/blog8" exact element={<Blog8 />} />
                            <Route path="/blog9" exact element={<Blog9 />} />
                            <Route path="/blog10" exact element={<Blog10 />} />
                            <Route path="/blog11" exact element={<Blog11 />} />
                            <Route path="/blog12" exact element={<Blog12 />} />
                            <Route path="/blog13" exact element={<Blog13 />} />
                            <Route path="/blog14" exact element={<Blog14 />} />
                            <Route path="/blog15" exact element={<Blog15 />} />
                            <Route path="/blog16" exact element={<Blog16/>} />

                            <Route path="/confirmar" exact element={<ConfirmarEnvio />} />
                            <Route path="*" element={<Erro />} />

                            <Route path="/salaparis" element={<SalaParis />} />

                        </Routes>
                    </div>
                </HomeContextProvider>

            </BrowserRouter>

        </>


    )
}
