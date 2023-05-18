import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [toys,setToys] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setToys(data)
    })
},[])

    return (
        <div>
            <h2 className='text-center font-semibold text-4xl text-orange-500'> All toys {toys.length}</h2>
            
        </div>
    );
};

export default AllToys;