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

import BlogPagina from "./pages/BlogPagina/BlogPagina";
import Blog from "./pages/blogs/Blog/Blog";
import BlogPagina2 from "./pages/BlogPagina2/BlogPagina2";

import { PoliticaP } from "./pages/PoliticaP/PoliticaP";
import { TermosU } from "./pages/TermosU/TermosU";
import ConfirmarEnvio from './pages/ConfirmarEnvio/ConfirmarEnvio';
import Erro from './components/Error/Error';

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

                           
                            <Route path="/Blog" exact element={<BlogPagina/>} />
                            <Route path="/blog/:blogId" element={<Blog />} />
                            <Route path="/Blogpagina2" exact element={<BlogPagina2/>} />

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
