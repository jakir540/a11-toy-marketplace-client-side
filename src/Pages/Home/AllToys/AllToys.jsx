import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

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
        <div className='my-10'>
            <h2 className='text-center font-semibold text-4xl text-orange-500'> All toys {toys.length}</h2>


            <div className=' max-w-7xl grid grid-cols-3 mx-auto gap-4 my-16'>
            {
                toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
            }
            </div>
            
        </div>
    );
};

export default AllToys;