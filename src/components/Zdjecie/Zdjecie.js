import './Zdjecie.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import apiPhoto from '../../api/apiPhoto'
import styl from 'styled-components'
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

function img({alt_description, urls, likes,downloads, location})
{
return <div><StylH1><h1>{alt_description}</h1></StylH1>
<img src={urls.full} />

<StyledZdjecia><h2>Polubień: {likes}<br/>Pobrań: {downloads}<br/> Kraj: {location?.country} </h2></StyledZdjecia>

</div>
    

}

const StylH1 = styl.h1
`
color:white;
text-align: center;
`

const StyledZdjecia = 

styl.h2
`
position: absolute;
top: 2em;
left: 0;
width: 100%;
height: 100%;
color:transparent;
text-align: center;

  &:hover 
  {
    color: black;
  }
`

export default Zdjecie