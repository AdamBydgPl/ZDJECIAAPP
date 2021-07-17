import './Zdjecie.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import apiPhoto from '../../api/apiPhoto'

function Zdjecie()
{
    const { id } = useParams()
    const [ data, setData] = useState()
    useEffect(function() 
    {
        apiPhoto(responseData => setData(responseData),{id});
       
    },[]    )
    return  <div>{!data?<div>Ładowanie danych...</div>:
            img(data)}  </div>
}

function img({alt_description, urls})
{
return <div><h1>{alt_description}</h1> <img src={urls.full} /></div>
}

export default Zdjecie