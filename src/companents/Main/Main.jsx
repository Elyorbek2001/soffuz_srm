import React, { useEffect, useState } from 'react'
import "./Main.css"
import searchimg from "../../assets/search.png"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Draft from '../Draft/Draft';
import Published from '../Published/Published';
import All from '../All/All';

import Create from '../Create/Create';



const Main = ({ openModal, setOpenModal }) => {
    const [age, setAge] = React.useState('');
    const [tabStatus, setTabStatus] = useState('all')
    const [refreshStatus, setRefreshStatus] = useState(false)
    const [data, setData] = useState(JSON.parse(localStorage.getItem("posts")))
    const [search, setSearch] = useState("")
    let paginationSize = Math.ceil(data?.length / 5)

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("posts"))
        setData(data)
    }, [refreshStatus])

    return (

        <div className='main_con'>


            <div className='main'>
                {openModal && <Create setOpenModal={setOpenModal} />}
                <div className='input'>
                    <div className='input_search'>
                        <input placeholder='Search' type="text" onChange={(e) => setSearch(e.target.value)} />
                        <img src={searchimg} alt="search" />
                    </div>


                    <div>
                        <button onClick={() => setOpenModal(true)} className='btn'>Create post</button>
                    </div>
                </div>

                <div className="all">

                    <div className='buttons'>
                        <button className='status' onClick={() => setTabStatus("all")}>
                            <p className='status_text'  >All status
                                <span className='status_number'>{data?.length}</span></p>

                        </button>
                    </div>

                    <div className='buttons'>
                        <button className='status' onClick={() => setTabStatus("draft")}>
                            <p className='status_text' >Draft
                                <span className='status_numberr'>{data?.filter(el => el?.status === "Draft").length}</span></p>

                        </button>
                    </div>

                    <div className='buttons'>
                        <button className='status' onClick={() => setTabStatus("published")}>
                            <p className='status_text'>Published
                                <span className='status_number'>{data?.filter(el => el?.status === "Published").length}</span></p>

                        </button>
                    </div>

                </div>

                {
                    tabStatus === "all" ? <div className="table">
                        <All refreshStatus={refreshStatus} search={search} setRefreshStatus={setRefreshStatus} />





                    </div> : tabStatus === 'draft' ?
                        <div>
                            <Draft refreshStatus={refreshStatus} search={search} setRefreshStatus={setRefreshStatus} />

                        </div>



                        : tabStatus === "published" ?
                            <div>
                                <Published refreshStatus={refreshStatus} search={search} setRefreshStatus={setRefreshStatus} />

                            </div>
                            :
                            <div></div>
                }



            </div>
        </div>

    )
}

export default Main
