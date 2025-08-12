import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={ <Home /> } />
                <Route path="/sp" element={ <SaoPaulo />} />
                <Route path="/mg" element={ <MinasGerais />} />
                
            </Routes>
        </BrowserRouter>
    );
}