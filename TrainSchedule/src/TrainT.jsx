import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

export default function TrainTable({ token }) {
    console.log("token : ", token)
    const [data, setData] = React.useState()

    const fetchData = async () => {
        const fetchedData = await fetch("http://20.244.56.144:80/train/trains", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const dataT = await fetchedData.json();
        setData(dataT)
        console.log("ctycv:", dataT);
    }

    React.useEffect(() => {
        fetchData()
    }, [])
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Trains Lists:</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {data && data.map((d) => (
                    <Link to={`/train/${d.trainNumber}`}>
                        <div className='w-full h-16 m-7 bg-blue-500 text-white cursor-pointer'>
                            {d.trainName}
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}