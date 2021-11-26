import React from 'react'
import './Component.css'
import { GoSearch } from "react-icons/go";


export const NavBar = () => {
    return (
        <div className="Nav_Div">
            <img src="https://forestecoresort.com/wp-content/themes/best-hotel-in-chopta/assets/img/forest-eco-resort-logo-mob.png" alt = "Logo" width = '79' height='79' />
            
            <input className="search_button" type="text"></input>
            <span className="SearchSpan"><GoSearch size={25} /></span>

            <button className="owner_button">Owner</button>
            <button className="tenant_button">Tenant</button>
            <button className="normal_button" >SignUp/Login</button>
        </div>
    )
}
