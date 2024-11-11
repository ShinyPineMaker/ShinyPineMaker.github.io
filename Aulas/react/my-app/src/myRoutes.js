import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";

const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;