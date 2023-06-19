import './navbar.css';
import React, { useContext } from 'react';
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Context } from '../../index'
import { observer } from 'mobx-react-lite';
import logo from "../../images/logo192.png";
import { NavLink } from "react-router-dom"
import {LOGIN_ROUTE, ADMIN_ROUTE, PROJECTS_ROUTE} from "../../utils/consts"

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

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
            <div className="navbar-bg">
                <div className="container">
                    <div className="navbar ">
                        <div className="navbar-links">
                            <div className="navbar-links__logo">
                                <NavLink to={PROJECTS_ROUTE}>
                                    <img src={logo} alt="logo" />
                                </NavLink>
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

                        {user.isAuth ?
                            <div className="navbar-button">
                                <NavLink to={ADMIN_ROUTE}  className="btn navbar-button" >Админпанель</NavLink>
                                <button className="btn" onClick={logOut}>Выйти</button>
                            </div>

                            :
                            <div className="navbar-button">
                                <NavLink to={LOGIN_ROUTE} className="btn navbar-button" >Авторизация</NavLink>
                            </div>

                        }

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
            </div>
    );
}
) 
export default NavBar;

