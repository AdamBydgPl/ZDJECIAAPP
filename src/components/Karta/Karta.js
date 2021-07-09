import './Karta.css'

/*<div className="Karta">
    <h5>  <a href="#" class="card-link">{item.title}</a></h5>
    <h6 >Udostępnione: {item.published_at}</h6>
    <p> {item.description} </p>
  </div>*/

function Karta({item})
{
    return <div class="container">

<span class="border tl">Udostępnione: {item.published_at}</span>    
    <h1><a href="http://localhost:3000/" class="card-link">{item.title}</a></h1>    
    {/*<span class="border bl">border-bottom-left</span>
    <span class="border br">border-bottom-right</span>
  
*/}
  
    <p>{item.description}</p>
  
  </div>
    
    
    
}

export default Karta