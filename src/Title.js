
import Linebreak from "./Linebreak";
const Title = (props) => {
    return ( 
        <div className="title" id={props.titleid}>
            <div className="section-number"><h3>{props.number}</h3>
            </div>
            <div className="section-title"><h2>{props.name}</h2></div>
            <Linebreak></Linebreak>
        </div>
     );
}
 
export default Title;