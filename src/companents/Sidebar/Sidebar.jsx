import React from 'react'
import "./Sidebar.css"
import sidebar from "../../assets/sidebar.png"

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className="sidebar_img">
                <img src={sidebar} alt="" />
                <span>Posts</span>
            </div>

        </div>
    )
}

export default Sidebar
