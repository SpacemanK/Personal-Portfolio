
import './App.scss';
import Resume from "./Marouane Asselman Resume (1).pdf";
import Navbar from './Navbar';
import Card from './Card';
import Title from './Title';
import Picture from './picture.png';

import Tabs from './Tabs';

function App() {
  
  return (
    <div className="App">
    <Navbar></Navbar>
    <div className="sidebars">
      <div className="sidebar left">
        <div className="vertical-line"></div>
        <div className="icon linkedin" onClick={() => window.location = 'https://www.linkedin.com/in/marouane-asselman/'}></div>
        <div className="icon github"   onClick={() => window.location = 'https://github.com/SpacemanK/'}></div>
      </div>
      <div className="sidebar right">
      <div className="vertical-line"></div>
      <h4 onClick={() => window.location = 'mailto:marouanasselman@gmail.com'} className="mail-sidebar">marouanasselman@gmail.com</h4>
      </div>
    </div>
    <div className="main">
      <div className="intro-section" id="intro-section"  data-aos="fade-up"  data-aos-duration="700" data-aos-once="true" >
        <h3> Hey there, I am </h3>
        <h1> Marouane ASSELMAN.</h1>
        <h2> And I build all sorts of software.</h2>
        <p> 
        I am a software engineer building great digital experiences.
        A jack of many trades, and a master of some, my areas of expertise include but are not limited to : 
        <ul>
          <li>Fullstack  Responsive Web Development</li>
          <li>Blockchain Development</li>
          <li>Data Science and Data Scraping</li>
          <li> UI/UX Design</li>
          <li>Automation</li>
        </ul>
        <p>For a brief overview, you can <span className="colored-text">download my resume</span> here !</p>
        <a href={Resume} download="Marouane Asselman Resume" target='_blank' rel="noreferrer" >
        <button id="resume-download" >Download my Resume</button>
        </a>
        
        
        </p>
        
      </div>
      <Title number="01." name="About me" titleid="About" ></Title>
      <p  data-aos="fade-up"  data-aos-duration="500" data-aos-once="true" >I am Marouan ASSELMAN, a 22 year old software engineer who just graduated from Ecole Nationale Superieure de l'Informatique et d'Analyse des Systemes (ENSIAS). <br/> I fell in love with IT when I was still a kid, my father had brought home a computer before I was born, one of those old Pentium 2 models with a 
     huge old monitor. I believe I picked up a keyboard before I even picked up a pen, and it all started with electronic games. At first I was playing every game I could play, and I was always fascinated with how everything works in harmony. 22 years later, I'm pursuing a career in what I love and I am still looking forward to learning more with the same fiery passion that led me here.<br/> I started off coding some basic projects in C and later on in Python, and I've picked up quite a few skills along the way, below you'll find more details about what I can do !</p>
      
      <div className="picture"  data-aos="fade-up"  data-aos-duration="500" data-aos-once="true" >
        <div className="filter-box"></div>
        <img src={Picture} alt="The Spaceman" className='img-picture'/>
      </div>
      <Title number="02." name="Education" titleid="Education"></Title>
      <Tabs nbtabs={3} tabslist={[ "Engineering School", "Preparatory Classes","High School"]} id="Dashboard"></Tabs>

      

      <Title number="03." name="Experience" titleid="Experience"></Title>
      <Tabs nbtabs={4} tabslist={[ "Rasget","DLS Inc.","IntellCap","Freelance"]} id="Experience"></Tabs>

      <Title number="04." name="Projects" titleid="Projects"></Title>
      <div className="card-div" >
        <Card tools={["react","sass","html5","css3", "javascript","photoshop"]} title="Creating this responsive portfolio :) " description="What more can I say ? I built this website from scratch using ReactJS, Javascript and a lot of scss." team={1} date={2022}></Card>
        <Card tools={["python","selenium","django"]} title="Building multiple web-scrapers" description="Built a lot of web-scrapers, and got to thoroughly know this domain. I mainly use Python, Selenium and BeautifulSoup4." team={1} date={"various periods"}></Card>
        <Card tools={["hyperledger","cplusplus","python"]} title="Developing a Blockchain messaging system" description="A fully anonymous messaging system, leveraging the powers of blockchains. Used mainly Hyperledger Fabric, C++ and Python." team={4} date={2022}></Card>
        <Card tools={["python","matlab","docker"]} title="Developing an Algo trading Solution" description="A fully automatic trading bot, that waits for certain market signals and leverages an API to make trades. Uses Python, Matlab, REST-API, and k-means clustering." team={6} date={2021}></Card>
        <Card tools={["ruby","rails","bootstrap","javascript"]} title="E-shopping Data Warehouse" description="A responsive website with built in datawarehouse, with dummy sales data. We used multiple technologies but mainly Bootstrap, Vanilla JS, Ruby On Rails, SSIS, SSAS,SSRS and Scrum." team={4} date={2021}></Card>
        <Card tools={["java","git","trello"]} title="Super Mario Game Development" description="A 2D Super Mario Game, we were assigned this project to work under SCRUM, we use Java, Github, Trello and Arquillian among others" team={12} date={2021}></Card>
        <Card tools={["c","cplusplus"]} title="ENSIASX Language Compiler" description="A compiler for a custom language we developed called EnsiasX, built using C and C++" team={5} date={2021}> </Card>
        <Card tools={["bootstrap","php","composer","css3","html5","docker"]} title="E-shopping Website" description="An e-commerce website for selling sanitary products during the Covid-19 crisis, fullstack built using Bootstrap and PHP" team={2} date={2020}></Card>
        <Card tools={["c","sdl"]} title="Wordle Game Development" description="Wordle Game, built using C and SDL2, with various difficulty levels and word lengths." team={2} date={2019} ></Card>
      </div>





      <Title number="05." name="Contact" titleid="Contact"></Title>
      <div className="contact">
      <h3>I'm currently looking for future opportunitites to further grow and hone my skills, if you're interested in my services or just want to chat feel free to drop me an email. My inbox is always open ! </h3> 
      <button id="email"  onClick={() => window.location = 'mailto:marouanasselman@gmail.com'}  >Reach me by E-mail</button>
      </div>
      <div className="footer">
      <h4>Fueled by caffeine and a dream <br/> Designed and Built by Marouan ASSELMAN - 2022 <br/> Spaceman Labs ©</h4>
    </div>

    </div>
    
    </div>
  );
}

export default App;
