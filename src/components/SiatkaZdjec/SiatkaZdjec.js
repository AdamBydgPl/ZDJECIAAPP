import './SiatkaZdjec.css'
import ZdjecieMini from '../ZdjecieMini'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiCollectionPhotos from '../../api/apiCollectionPhotos'

function ListZdjec(data)
{
    return data.map((item) => 
     <ZdjecieMini item={item}></ZdjecieMini>)
    }



function SiatkaZdjec()  {
    const { id } = useParams()
    const [data,setData] = useState()
    useEffect( function() 
    {
        apiCollectionPhotos(responseData=>setData(responseData),{id})
    },
    
    {id})
    return <div className="grid-container">
        {!data?<div>Ładowanie danych...</div>:
        ListZdjec(data)}
    </div>

}

export default SiatkaZdjec