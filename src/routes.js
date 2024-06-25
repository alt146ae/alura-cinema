//import Cabecera from "components/Cabecera/Cabecera"
//import Container from "components/Container";
//import Pie from "components/Pie";
//import FavoritoProvider from "context/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
             {/* <Cabecera /> 
             <Container> 
                 <FavoritoProvider>  */}
                <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
                {/* </FavoritoProvider> 
             </Container> 
             <Pie /> */}
        </BrowserRouter>
    )

}


export default AppRoutes