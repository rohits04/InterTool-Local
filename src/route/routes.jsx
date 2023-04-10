import { Routes,Route, Navigate } from "react-router-dom";
import HomePage from "../pages/create_AWS/homePage";
import SignUp from '../component/signup/signup';
import FormPage from '../pages/formPage/formPage';
import List from "../pages/list/list";
import LogIn from "../component/login/login";
import Protected from "../protectedroute/protectedRoute";


const AppRoute=(
    <Routes>
            <Route path="/" element={<Navigate to="login"/>}/>
        
            <Route  path="/login" element={<LogIn/>}/>
        <Route path='/' element={< Protected Component={HomePage}/>}>
            <Route path='/form' element={< FormPage/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            </Route>
    </Routes>
)
export default AppRoute;