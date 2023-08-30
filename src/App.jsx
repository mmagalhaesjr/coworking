import TelaInicial from "./pages/TelaInicial/TelaInicial";
import TelaEspacoPrivativo from "./pages/TelaEspacos/Privativo/EspacoPrivativo";
import TelaEspacosIndividual from "./pages/TelaEspacos/Individual/EspacoIndividual";
import TelaEspacosReuniao from "./pages/TelaEspacos/Reuniao/EspacoReuniao";
import TelaQuemSomos from './pages/TelaQuemSomos/QuemSomos';
import TelaBlog from './pages/Blog/TelaBlog';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";


export default function App() {

    return (
        
            
                <BrowserRouter>

                    <UserProvider>
                        <div className="App">
                            <Routes>
                                <Route path="/" element={<TelaInicial />} />
                                <Route path="/privativo" element={<TelaEspacoPrivativo />} />
                                <Route path="/individual" element={<TelaEspacosIndividual />} />
                                <Route path="/reuniao" element={<TelaEspacosReuniao />} />

                                <Route path="/quemSomos" element={<TelaQuemSomos />} />
                                <Route path="/blog" element={<TelaBlog />} />
                            </Routes>
                        </div>
                    </UserProvider>

                </BrowserRouter>
           
   


    )
}
