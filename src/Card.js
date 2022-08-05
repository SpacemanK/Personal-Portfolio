
import AOS from 'aos';

const Card = (props) => {
    const tools=[];
    for (const tool in props.tools){
        tools.push(<div className={`icon ${props.tools[tool]}`}></div>)
    }
    AOS.init();
    return ( 
        <div className="card" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true"
        >
            <div className="card-content">
                <div className="card-header">
                {tools}
                    
                </div>
                
                <div className="card-body">
                    <h3 className="project-description">{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                
                <div className="card-footer">
                    <h4 className="project-date">Team of {props.team} - {props.date}</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Card;