import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrder from './Pages/Dashboard/MyOrder';
import Purchase from './Pages/Purchase/Purchase';
import Users from './Pages/Dashboard/Users';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/purchase/:productId' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="myOrder" element={<MyOrder />}></Route>
          <Route path="payment/:id" element={<RequireAdmin><Payment /></RequireAdmin>}></Route>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="allOrders" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
