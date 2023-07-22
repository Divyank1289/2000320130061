import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Train = ({ token }) => {
    const { trainNumber } = useParams()
    const [data, setData] = useState();

    const fetcha = async () => {
        const fetchedData = await fetch(`http://20.244.56.144/train/trains/${trainNumber}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const dataT = await fetchedData.json();
        setData(dataT)
        console.log("ctycv:", dataT);
    }

    useEffect(() => {
        fetcha()
    }, [])
    return (
        <div>
            {data && <div>

                <h1 className='text-6xl'>
                    Train Details
                </h1>
                <div className='text-3xl text-blue-600'>Name : {data.trainName}</div>
                <div className='text-3xl text-blue-600'>Delayed By : {data.delayedBy}</div>
                <div className='text-3xl text-blue-600'>price-sleeper : {data.price.sleeper}</div>
                <div className='text-3xl text-blue-600'>price-AC : {data.price.AC}</div>
                <div className='text-3xl text-red-600'>Name : {data.trainName}</div>
            </div>}
            <Link to="/">
                <div className='p-4 bg-red-500'>
                    Go Back
                </div>
            </Link>
        </div>
    )
}

export default Train