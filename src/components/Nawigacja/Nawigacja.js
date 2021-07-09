
import { useEffect, useState } from 'react';
import './Nawigacja.css'
import Karta from '../Karta';
import api from '../../api/api';

const listaLi = (data, k) => 
data.map((item) => 
<li key={item.no}> <Karta item={item}> </Karta></li>
)
//const url = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/2021-06-01/2021-06-30/'

function Nawigacja()
{
    const [data,setData] = useState()

    useEffect(function() 

    {
     /*fetch(url)
    .then(response=>response.json())*/
    api('//collections')
    .then(responseData=>setData(responseData));
    
},[])

    return <nav className="Nawigacja">
    <ul>
    {!data
    ? <div>Loading ...</div>
    : listaLi(data)}


    
 
    </ul></nav>
}

export default Nawigacja;