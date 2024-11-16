import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Atv1 from "./Atv1";

const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv1" element={<Atv1 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;