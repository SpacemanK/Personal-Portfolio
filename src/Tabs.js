
import {useState, useEffect} from "react";
import TabHS from "./TabHS";
import TabPC from "./TabPC";
import TabES from "./TabES";
import TabFreelance from "./TabFreelance";
import TabIntellCap from "./TabIntellcap";
import TabDLS from "./TabDLS";
import TabRasget from "./TabRasget";
const Tabs = (props) => {
    const id=props.id;
    const tabnames=props.tabslist;
    const [activetabname, setTabname]= useState(props.tabslist[0]);
    const [activetabindex,setTabindex]=useState(0);    
    const handleClick = (event) => {
        setTabindex(event.target.getAttribute("data-index"));
        setTabname(event.target.id);    
      }
    let slider_id="sliding-"+id;
    useEffect (() => {
        let slider=document.querySelector(".tabs-slider#"+id);
        
        let button_size=document.querySelector(".tabs#"+id).getElementsByClassName("tab-button")[0].offsetWidth;
        let margin=activetabindex*button_size;
        var element = document.getElementById(slider_id);
        element.style.marginLeft = margin + "px";
        element.style.width=button_size + "px";
        slider.style.width=button_size*tabnames.length + "px";
    });
    const tabs_list = props.tabslist.map((tabname, index) => 
                             <button key={index} className="tab-button" data-index={index} id={tabname} onClick={handleClick} data-active={activetabname === tabnames[index] ? true:false}>{tabname}</button>
                           );
    return ( 
    <div className={"tabs "} id={props.id} data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true">
        <div className="tabs-navigation">
        <div className="tabs-buttons">{tabs_list}</div>
           
           
        <div className="tabs-slider" id={props.id}>
        <div className="sliding-bar" id={slider_id}></div>
        </div>
        
        </div>
        <div className="tab-content">
        {activetabname === "High School" ? <TabHS /> : ""}
        {activetabname === "Preparatory Classes" ? <TabPC /> : ""}
        {activetabname === "Engineering School" ? <TabES /> : ""}
        {activetabname === "Freelance" ? <TabFreelance /> : ""}
        {activetabname === "IntellCap" ? <TabIntellCap /> : ""}
        {activetabname === "DLS Inc." ? <TabDLS /> : ""}
        {activetabname === "Rasget" ? <TabRasget /> : ""}
        </div>
    </div>
     );
}
 
export default Tabs; 