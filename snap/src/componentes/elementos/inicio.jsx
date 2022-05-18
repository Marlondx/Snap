
import {Link} from "react-router-dom"
function Inicio({to,text}) {
    return(
        <div>
            <Link to={to}>{text}</Link>
        </div>
    )
}

export default Inicio