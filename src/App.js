
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
      <div className="intro-section" id="intro-section">
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin urna felis, eu ultricies urna ullamcorper vitae. Integer laoreet, dolor egestas fringilla vulputate, nunc magna elementum diam, ut laoreet sapien ante sit amet dolor. Praesent in gravida leo, et consectetur elit. Nunc tellus lectus, posuere nec egestas eget, finibus fringilla enim. Vestibulum sit amet sollicitudin urna. Donec tempor varius massa, nec dictum risus condimentum ac. Aliquam erat volutpat. Duis urna magna, volutpat ut rutrum vel, placerat eget orci. Morbi mauris orci, vestibulum ac hendrerit eget, blandit at nisi. In hac habitasse platea dictumst. Nam augue sem, tincidunt nec velit quis, rhoncus egestas turpis. Sed consequat sodales iaculis. Aenean ut ante posuere, placerat tortor non, euismod tellus.

      Praesent <span className='colored-text'> id dui luctus, bibendum lacus eget, fringilla turpis. </span> Nullam facilisis massa at hendrerit convallis. Suspendisse lacinia dignissim tempus. Nulla rhoncus consectetur ligula eu tempus. Aliquam commodo sollicitudin erat sit amet tincidunt. Quisque ac molestie sem. Aliquam ornare quam tortor. Aliquam non dignissim turpis. Nullam placerat dui sed erat vulputate mattis.

      Donec quis convallis magna. Sed et mauris porta quam ornare rhoncus. Integer mi risus, maximus eget egestas vel, dapibus quis ipsum. Aenean pulvinar suscipit sem, vel porttitor leo sollicitudin at. Donec sollicitudin venenatis nibh, sit amet tristique neque interdum sed. Aliquam vel consequat sapien. Vivamus tempor suscipit sapien non dignissim. Morbi vel enim imperdiet, mattis ante id, tincidunt tellus.</p>
      
      <div className="picture" >
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
      <h3>I'm currently looking for future opportunitites to further grow and hone my skills, if you're interested in my service or just want to chat feel free to drop me an email my inbox is always open ! </h3> 
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
