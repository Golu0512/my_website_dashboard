import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const UserTable = ({data}) => {

    const [ columns, setColumns ] = useState([]);

    const getColumn = () => {
        setColumns(Object.keys(data[0] || {}))
    }

    useEffect(() =>{
        getColumn();
    },[data])

    return (
        <>
        <Box
                sx={{
                    width: 1200,
                    maxHeight: 500,
                    overflow: 'scroll'
                }}
            >
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            {columns ?
                                columns.map((val)=>{
                                    return (
                                        <th className='text-uppercase' scope="col" key={val}>{val}</th>
                                    )
                                })
                                :
                                ''
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {data ? 
                            data.map((val)=>{
                                return (
                                    <tr key={val?._id}>
                                        <th scope="row">{val?._id}</th>
                                        <td className='text-nowrap'>{val?.movie_name}</td>
                                        <td className='text-nowrap'>{val?.email}</td>
                                        <td className='text-nowrap'>{val?.mobile_number}</td>
                                    </tr>
                                )
                            })
                            : ''
                        }
                    </tbody>
                </table>
            </Box>
        </>
    )
}

export default UserTable
