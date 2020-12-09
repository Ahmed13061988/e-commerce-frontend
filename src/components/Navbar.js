import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout'

const Navbar = props => {  
    return (
        <div>
           <button className="home"><NavLink to='/'>Home</NavLink></button><br/>
           <button className="Shop"><NavLink to='/items'>Shop</NavLink></button>

            { props.user.loggedIn ?
                <Logout handleLogoutClick={props.handleLogoutClick} /> :
                <>
                   <button className="login"><NavLink to='/login'> Login</NavLink></button>
                   <button className="signup"><NavLink to='/signup'> Signup</NavLink></button>
                </>
            }
            <button><NavLink to='/cart'>Cart</NavLink></button>
        </div>
    )
}

export default Navbar;