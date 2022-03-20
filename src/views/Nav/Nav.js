import React from "react";
import "./Nav.scss"
import { Link, NavLink } from "react-router-dom"

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">

                <NavLink to='/' activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to='/Todos' activeClassName="active">Todos</NavLink>
                <NavLink to='/MyComponent' activeClassName="active">My Component</NavLink>
                <NavLink to='/ListUsers' activeClassName="active">Users</NavLink>
                <NavLink to='/about' activeClassName="active">About</NavLink>

                {/* /////// use Link to='', the page won't be reloaded, but the page is not actived */}
                {/* <Link to='/Home'>Home</Link>
                <Link to='/Todos'>Todos</Link>
                <Link to='/MyComponent'>My Component</Link>
                <Link to='/about'>About</Link> */}


                {/* /////// use a href, the page will be reloaded. */}
                {/* <a className="active" href="/">Home</a>
                <a href="/Todos">Todos</a>
                <a href="/MyComponent">My Component</a>
                <a href="about">About</a> */}
            </div>
        )
    }
} export default Nav