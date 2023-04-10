import './App.css';
import AWSform from './component/form/form';
import HomePage from './pages/create_AWS/homePage';
import AppRoute from './route/routes';
import SideNav from './component/sideNav/sideNav';
import SignUp from './component/signup/signup';


function App() {
  return (
    <div className='appParent'>
      {AppRoute}
      {/* <SignUp /> */}

    </div>
  );
}

export default App;
