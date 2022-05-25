import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrder from './Pages/Dashboard/MyOrder';
import Purchase from './Pages/Purchase/Purchase';
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myOrder" element={<MyOrder />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
