import "./Sports.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Top from "../Topscll/Top";

import ach from "../images/ach1.jpeg";
import ach1 from "../images/ach2.jpeg.jpg";
import ach2 from "../images/ach3.jpg";
import ach3 from "../images/ach4.jpg";

import pers1 from "../images/best-stu.jpg";

const Sports = () => {
  return (
    <div className="our-stud">
      <Navbar />
      <Top />
      <h1 data-aos="fade-up-right" className="achi">
        <hr></hr>
        Our Students Achievements
        <hr></hr>
      </h1>
      <div className="sport">
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach} alt="" />
            <div className="cont">
              <h3>Nagaarjun.M</h3>
              <p>
                <span>Sceintific Exhipition</span> - 2024
              </p>
              <h4>DISTRICT 2nd WINNER</h4>
            </div>
          </div>
         
          <div className="sports-cont2">  
            <p>
              <RiDoubleQuotesL />
              District 2's exhibit at the 2024 Scientific Exhibition impressed
              with cutting-edge research, emphasizing interdisciplinary
              collaboration and ethical considerations in scientific progress.
              As the second winner, our showcase sparked curiosity and inspired
              attendees to envision a future driven by innovation and positive
              change.
              <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach1} alt="" />
            <div className="cont">
              <h3>Nagaarjun.M</h3>
              <p>
                <span>Basketball</span> - 2024
              </p>
              <h4>DISTRICT WINNER - STATE PARTICIPATE</h4>
            </div>
          </div>
          <div className="sports-cont2">
           
            <p>
              <RiDoubleQuotesL /> District soared to victory in the 2024
              basketball tournament, showcasing exceptional teamwork and skill.
              As proud state participants, our team's unwavering determination
              and passion ignited the court, leaving spectators in awe of our
              stellar performance
              <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach2} alt="" />
          </div>
          <div className="sports-cont2">
            <div className="cont">
              <h3>Nagaarjun.M</h3>
              <p>
                <span>Basketball</span> - 2024
              </p>
              <h4>DISTRICT WINNER</h4>
            </div>
            <p>
              <RiDoubleQuotesL /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi quo libero natus, deserunt assumenda
              aperiam molestiae. Veniam hic aperiam tenetur iste quibusdam quae
              eos ipsam iure expedita dolorem, rerum nisi velit suscipit alias
              delectus, optio soluta quisquam totam, repellat voluptatum
              perspiciatis? Impedit quas laboriosam modi, a unde quibusdam
              autem. Odio? <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={ach3} alt="" />
          </div>
          <div className="sports-cont2">
            <div className="cont">
              <h3>Surenthar.M</h3>
              <p>
                <span>Net Ball</span> - 2024
              </p>
              <h4>
                PARTICIPATED IN NATIONAL LEVEL ON BEHALF OF NETBALL TAMILNADU
                TEAM
              </h4>
            </div>
            <p>
              <RiDoubleQuotesL />
              Representing Netball Tamilnadu at the national level was a proud
              achievement, showcasing our team's skill and dedication. We faced
              formidable opponents with resilience and sportsmanship, leaving a
              lasting impression on the tournament. <RiDoubleQuotesR />
            </p>
          </div>
        </div>
        {/* <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={pers1} alt="" />
          </div>
          <div className="sports-cont2">
            <div className="cont">
              <h3>Nagaarjun.M</h3>
              <p>
                <span>Basketball</span> - 2020,2021,2023
              </p>
              <h4>NATIONALS WINNER</h4>
            </div>
            <p>
              <RiDoubleQuotesL /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi quo libero natus, deserunt assumenda
              aperiam molestiae. Veniam hic aperiam tenetur iste quibusdam quae
              eos ipsam iure expedita dolorem, rerum nisi velit suscipit alias
              delectus, optio soluta quisquam totam, repellat voluptatum
              perspiciatis? Impedit quas laboriosam modi, a unde quibusdam
              autem. Odio? <RiDoubleQuotesR />
            </p>
          </div>
        </div> */}
        {/* <div data-aos="zoom-out-down" className="sports-container">
          <div className="sport-cont1">
            <img src={pers1} alt="" />
          </div>
          <div className="sports-cont2">
            <div className="cont">
              <h3>Nagaarjun.M</h3>
              <p>
                <span>Basketball</span> - 2020,2021,2023
              </p>
              <h4>NATIONALS WINNER</h4>
            </div>
            <p>
              <RiDoubleQuotesL /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi quo libero natus, deserunt assumenda
              aperiam molestiae. Veniam hic aperiam tenetur iste quibusdam quae
              eos ipsam iure expedita dolorem, rerum nisi velit suscipit alias
              delectus, optio soluta quisquam totam, repellat voluptatum
              perspiciatis? Impedit quas laboriosam modi, a unde quibusdam
              autem. Odio? <RiDoubleQuotesR />
            </p>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
