import React, { useEffect, useState } from 'react';

const All = ({ search }) => {
    const [postStatus, setPostStatus] = useState({});
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const [searchData, setSearchData] = useState([]);
    const [page, setPage] = useState(0); // Sahifa raqami
    const postsPerPage = 5; // Har sahifada ko'rsatiladigan postlar soni

    const handleStatusChange = (id, newStatus) => {
        const data = JSON.parse(localStorage.getItem("posts")) || [];

        const newData = data.map(elem => {
            if (elem?.id === id) {
                return { ...elem, status: newStatus };
            } else {
                return elem;
            }
        });

        localStorage.setItem("posts", JSON.stringify(newData));

        setPostStatus(prev => ({
            ...prev,
            [id]: newStatus,
        }));
    };

    useEffect(() => {
        if (search) {
            const item = posts.filter(item => item?.title?.toLowerCase().includes(search?.toLowerCase()));
            setSearchData(item);
        } else {
            setSearchData(posts);
        }
    }, [search]);

    // Sahifalash funksiyalari
    const startIndex = page * postsPerPage;
    const paginatedPosts = searchData.slice(startIndex, startIndex + postsPerPage);

    const handleNextPage = () => {
        if ((page + 1) * postsPerPage < searchData.length) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedPosts.length > 0 ? (
                        paginatedPosts.map(item => (
                            <tr key={item.id}>
                                <td>{item?.id}</td>
                                <td>{item?.title}</td>
                                <td>{item?.time}</td>
                                <td>
                                    <select className='sel'
                                        value={postStatus[item.id] || item.status}
                                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                                    >
                                        <option value="Draft">Draft</option>
                                        <option value="Published">Published</option>
                                    </select>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Hech qanday post topilmadi.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="pagination">
                <button className='pg_btn' onClick={handlePreviousPage} disabled={page === 0}>Previous</button>
                <span>Page {page + 1}</span>
                <button className='pg_btn' onClick={handleNextPage} disabled={(page + 1) * postsPerPage >= searchData.length}>Next</button>
            </div>
        </div>
    );
}

export default All;
