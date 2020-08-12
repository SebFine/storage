import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <NavLink to='/dashboard' activeClassName="selected">Dashboard</NavLink>
            <NavLink to='/list' activeClassName="selected">All Articles</NavLink>
            <NavLink to='/entnahme' activeClassName="selected">Entnahme</NavLink>
            <NavLink to='/rueckgabe' activeClassName="selected">Rückgabe</NavLink>
        </div>
    )
}

export default Sidebar