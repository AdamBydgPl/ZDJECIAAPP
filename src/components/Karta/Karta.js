import './Karta.css'
import {Link} from "react-router-dom";
/*<div className="Karta">
    <h5>  <a href="#" class="card-link">{item.title}</a></h5>
    <h6 >Udostępnione: {item.published_at}</h6>
    <p> {item.description} </p>
  </div>*/
  

function Karta({item})
{
    return <div class="container">

<span class="border tl">Udostępnione: {item.published_at.substring(0,10)}</span>    
    <h1><Link to={"/zdjecia/" + item.id} class="card-link">{item.title}</Link></h1>
    <img src={item.preview_photos[0].urls.small}  />   
    {/*<span class="border bl">border-bottom-left</span>
    <span class="border br"h>border-bottom-right</span>
  
*/}
  
    <p>{item.description}</p>
  
  </div>
    
    
    
}

export default Karta