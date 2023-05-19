import React, { useEffect, useState } from 'react';

const BookingsAllToy = () => {
    const[allToys ,setAllToys] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/getToy')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllToys(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl text-orange-500 font-bold'>All Toys {allToys.length}</h1>
        </div>
    );
};

export default BookingsAllToy;