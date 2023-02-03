import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/Login"; 
import { Home } from "../pages/Home";

const AppRoutes = () => {
    return (        
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<SignIn />} />
                <Route exact path='/Home' element={<Home />} />                                
            </Routes>
        </BrowserRouter>        
    )
}

export { AppRoutes }
