import '../styles/Dashboard.css'
import React from 'react'
import Sidebar from './Sidebar'
import {useHistory} from 'react-router-dom'
import Articles from './Articles'


const Dashboard = (props) => {
    const history = useHistory()
    const location = history.location.pathname
    console.log(history)
    return (
        <div className='dashboard'>            
            <Sidebar />            
            {location=='/list' && <Articles />}
        </div>
    )
}

export default Dashboard