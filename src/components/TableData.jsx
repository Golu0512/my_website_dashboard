import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const TableData = ({data}) => {
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
                                        <td className='text-nowrap'>{val?.title}</td>
                                        <td className='text-nowrap'>{val?.movie_name}</td>
                                        <td className='text-nowrap'>{val?.movie_image}</td>
                                        <td className='text-nowrap'>{val?.banner_link}</td>
                                        <td className='text-nowrap'>{val?.banner_image}</td>
                                        <td className='text-nowrap'>{val?.category}</td>
                                        <td className='text-nowrap'>{val?.main_stars}</td>
                                        <td className='text-nowrap'>{val?.description}</td>
                                        <td className='text-nowrap'>{val?.releasing_year}</td>
                                        <td className='text-nowrap'>{val?.language}</td>
                                        <td className='text-nowrap'>{val?.resolution}</td>
                                        <td className='text-nowrap'>{val?.file_size}</td>
                                        <td className='text-nowrap'>{val?.quick_story}</td>
                                        <td className='text-nowrap'>{val?.download_low}</td>
                                        <td className='text-nowrap'>{val?.download_medium}</td>
                                        <td className='text-nowrap'>{val?.download_high}</td>
                                        <td className='text-nowrap'>{val?.youtube_trailer}</td>
                                    </tr>
                                )
                            })
                            :
                            ''
                        }
                    </tbody>
                </table>
            </Box>
        </>
    )
}

export default TableData

// max-width: 1200px;
//     overflow: scroll;
//     max-height: 500px