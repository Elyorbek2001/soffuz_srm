import React, { useState } from 'react'
import "./Create.css"

const Create = ({ setOpenModal }) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault(); // Forma yuborilishini to'xtatish

        // Yangi ma'lumotlarni qo'shish
        const newPost = {
            id: JSON.parse(localStorage.getItem("posts")).length + 1,
            title: title,
            status: status,
            time: date,
        };

        console.log(newPost)


        // Local storage dan mavjud postlarni olish
        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        console.log(existingPosts)

        // Yangi postni mavjud postlar ro'yxatiga qo'shish
        const updatedPosts = [...existingPosts, newPost];

        // Yangilangan postlarni localStorage ga saqlash
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        setOpenModal(false)
        console.log(updatedPosts); // Yangilangan postlarni konsolga chiqarish

        // Forma maydonlarini tozalash
        setTitle('');
        setStatus('');
        setDate('');




    }

    console.log(status)




    return (
        <div className='create'>

            <form className='modal' onSubmit={handleSubmit}>
                <p>Post informatsion</p>

                <input className='title' onChange={(e) => setTitle(e.target
                    .value)} type="text" placeholder='Title' />



                <select className='title' onChange={(e) => setStatus(e.target.value)} id="status-options" >

                    <option className='options' value="Published">Published</option>
                    <option className='options' value="Draft">Draft</option>

                </select>
                <input className='title' onChange={(e) => setDate(e.target.value)} type="date" placeholder='sana'
                />
                <button type='submit' className='submit'>Submit</button>
            </form>



        </div>
    )
}

export default Create

