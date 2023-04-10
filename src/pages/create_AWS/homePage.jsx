import { Outlet } from 'react-router-dom';
import Formhead from '../../component/header/header.jsx';
import './homePage.css'
// import SideNav from "../../component/sideNav/sideNav";
// import SignUp from '../../component/signup/signup'
// import FormPage from "../formPage/formPage";
// import List from '../list/list';
// import LogIn from '../../component/login/login.jsx';

export default function  HomePage(){
    
    return(
        <div className='homeParent'>
            <Formhead/>

           <div className='navCss'>
                <Outlet/>
                {/* <LogIn/> */}
            </div>
        </div>
    )
}