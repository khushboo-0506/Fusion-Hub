import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navb.css';
import { assets } from '../../assets/assets';
import {StoreContext} from '../../context/Scontext';

const Nav = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

   const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
   const navigate = useNavigate();

   const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
   }

  return (
    <div className='navbar'>
     <Link to='/'> <img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        {/* <li onClick={() => setMenu("cart")} className={menu === "cart" ? "active" : ""}>
          <Link to="/cart">Cart</Link>
        </li> */}
        <li onClick={() => setMenu("order")} className={menu === "order" ? "active" : ""}>
          <Link to="/order">Order</Link>
        </li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          <Link to='/mobile'> Mobile</Link>
        </li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
        <Link to='/contact'> Contact</Link>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className='navbar-search'>
         <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link> 
          <div className={getTotalCartAmount()?"dot":""}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)} >Sign-in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')} ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li  onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
        
      </div>
    </div>
  );
};

export default Nav;
