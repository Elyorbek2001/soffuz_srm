import React from 'react'
import h_img from "../../assets/sof.png"
import "./Header.css"
import btn from "../../assets/Button.png"

const Header = ({ setOpenModal, openModal }) => {
    return (
        <div className='header'>

            <img className='header_img' src={h_img} alt="" />

            {openModal ? <button className='new_btn' onClick={() => setOpenModal(false)}> <img src={btn} alt="" />New Post</button> : <p>Posts</p>}


        </div>
    )
}

export default Header
