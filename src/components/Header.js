import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Budget App</h1>
        <NavLink exact to = '/' activeClassName="onPage">Go Home</NavLink>
        <NavLink exact to = '/create' activeClassName="onPage">Create Page</NavLink>
    </header>
)
export default Header