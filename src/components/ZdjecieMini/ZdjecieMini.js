import  "./ZdjecieMini.css"
import {Link} from "react-router-dom";

function ZdjecieMini({item})
{
    return <div className="container grid-zdjecie">
        <Link to={"/Zdjecie/" + item.id }>
        {item.title}
        <br />
        <img src={item.urls.small}/>
        {item.description}    
        </Link>
    </div>
}
export default ZdjecieMini