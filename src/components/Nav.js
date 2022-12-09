import login from "./logo2.jpg"

import './navbar.css';


const Navbar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Medical Darpan</div>
        <div className='navbar__item' >Home</div>
        <div className='navbar__item'>Products</div>
        <div className='navbar__item'>Distributors</div>
        <div className='navbar__item'>Manufacturers</div>
        <div className='navbar__item'>About us</div>     
        <div className='navbar__item'>Blog</div> 
        <div className='navbar__item2'>
            <p className='login'>Login</p>
            <img className="logo" src={login}></img>
            </div>  
    </header>
);

export default Navbar

