import React, { useState } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import "./Home.css"

const Home = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <div className='Continer'>
                <Header openModal={openModal} setOpenModal={setOpenModal}></Header>
                <div className="home">
                    <Sidebar></Sidebar>
                    <Main setOpenModal={setOpenModal} openModal={openModal}></Main>
                </div>
            </div>
        </>
    )
}

export default Home
