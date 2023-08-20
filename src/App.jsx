import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registration from "./Components/Registration"
import Login from "./Components/Login"
import EMSWelcomePage from "./Components/EMSWelcomePage"
import Home from "./Components/Home"
import Update from "./Components/Update"


const App=()=> {
    return (
        <div>
        <BrowserRouter>
           <EMSWelcomePage />
           <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/update" element={<Update />}></Route>
            {/* <Route path="/contact" element={<Conta />}/> */}
           </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App