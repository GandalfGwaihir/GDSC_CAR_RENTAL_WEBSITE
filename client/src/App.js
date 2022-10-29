import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter , Redirect} from 'react-router-dom'
import Cars from './pages/Cars'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminCars from './pages/AdminCars';
import EditCar from './pages/EditCar';
import About from './pages/About'
import Contact from './pages/Contact'
import productCard from './pages/ProductCard';
import adminPanel from './pages/Adminpanel';
import adminUsers from './pages/AdminUsers';
import adminTestimonials from './pages/Admintestimonials';
function App() {
  return (
    <div className="App">

         
         
         <BrowserRouter>
             
             <Route path='/' exact component={Home} />
             <Route path='/home' exact component={Home} />
             {/* <Route path='/login' exact component={Login} /> */}
             <Route path='/register' exact component={Register} />
             <Route path='/contact' exact component={Contact} />
             <Route path='/cars' exact component={Cars} />
             <Route path='/productcard' exact component={productCard} />
             <Route path='/about' exact component={About} />
             <Route path='/booking/:carid' exact component={BookingCar} />
             <Route path='/userbookings' exact component={UserBookings} />
             <Route path='/addcar' exact component={AddCar} />
             <Route path='/editcar/:carid' exact component={EditCar} />
             <Route path='/admin' exact component={Login} />
             
             <Route path='/admin/cars' exact component={AdminCars} />
             <Route path='/admin/testimonials' exact component={adminTestimonials} />
             <Route path='/admin/users' exact component={adminUsers} />
             <Route path='/admin/home' exact component={adminPanel} />
         
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }

}
