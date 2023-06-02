import './navbar.css';
import React, { useContext } from 'react';
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Context } from '../../index'
import { observer } from 'mobx-react-lite';
import logo from "../../images/logo192.png";

const pages = ['Проекты', 'Услуги', 'Blog'];
const settings = ['Профиль', 'Акаунт', 'Админ панель', 'Выход'];

const NavBar = observer(() => {

    const { user } = useContext(Context)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [toggleMenu, setToggleMenu] = React.useState(false)
    

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <div className="navbar-bg">
                    <div className="navbar ">
                        <div className="navbar-links">
                            <div className="navbar-links__logo">
                                <a href="#">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            <div className="navbar-links_container">
                                <ul className="navigation__list">
                                    {pages.map((page) => (
                                        <li key={page} onClick={handleCloseNavMenu}>
                                            {page}
                                        </li>
                                    ))}                                
                                </ul>
                            </div>                                                    
                        </div>
                        <div className="navbar-button">
                            <button className="btn" onClick={handleOpenUserMenu}>Авторизация</button>
                        </div>
                        <div className="navbar-menu">
                            {toggleMenu ? (
                                <RiCloseLine
                                color="#000"
                                size={27}
                                onClick={() => setToggleMenu(false)}

                            />): (
                                <RiMenu3Line
                                color="#000"
                                size={27}
                                onClick={() => setToggleMenu(true)}
                                />
                            )}
                            {toggleMenu && (
                                <div className="navbar-menu__container scale-up-center">
                                        <div className="navbar-menu-links_container">
                                            <ul className="navbar-menu-links__list">
                                                {pages.map((page) => (
                                                    <li key={page} onClick={handleCloseNavMenu}>
                                                        {page}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="navbar-menu__container-button">
                                            <button className="btn" onClick={handleOpenUserMenu}>Авторизация</button>
                                        </div>
                                </div>
                                
                            )}
                        </div>
                    </div>
            </div>

        </>
    );
}
) 
export default NavBar;


// const NavbarExample=()=>{
//     const [toggleMenu, setToggleMenu] = useState(false);
//     return (
//         <div className="navbar-bg">
//             <div className="sb__navbar">
//                 <div className="sb__navbar-links">
//                     <div className="sb__navbar-links_logo">
//                         <a href="www.google.com">
//                             <img src={logo} alt="logo"/>
//                         </a>
//                     </div>
//                     <div className="sb__navbar-links_container">
//                         <p>
//                             <a href="www.google.com">
//                                 ABOUT
//                             </a>
//                         </p>
//                         <p>
//                             <a href="www.google.com">
//                                 ORGANIZATIONS
//                             </a>
//                         </p>
//                         <p>
//                             <a href="www.google.com">
//                                 INDIVIDUALS
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//                 <div className="sb__navbar-button">
//                     <a href="www.google.com">
//                         <button type="button">JOIN US</button>
//                     </a>
//                 </div>
//                 <div className="sb__navbar-menu">
//                    {toggleMenu ? (
//                     <RiCloseLine
//                     color="#000"
//                     size={27}
//                     onClick={()=> setToggleMenu(false)}
//                    />) : (
//                     <RiMenu3Line
//                     color="#000"
//                     size={27}
//                     onClick={()=> setToggleMenu(true)}
//                     />
//                    )}
//                    {toggleMenu && (
//                     <div className="sb__navbar-menu_container scale-up-center">
//                         <div className="sb__navbar-menu_container-links">
//                             <p>
//                                 <a href="www.google.com">ABOUT</a>
//                             </p>
//                             <p>
//                                 <a href="www.google.com">ORGANIZATIONS</a>
//                             </p>
//                             <p>
//                                 <a href="www.google.com">INDIVIDUALS</a>
//                             </p>
//                             </div>
//                           <div className="sb__navbar-menu_container-links-sign">
//                             <a href="www.google.com">
//                                 <button type="button">JOIN US</button>
//                             </a>
//                             </div> 
//                             </div> 
//                    )}
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default NavbarExample;