import React,{useEffect} from "react";
import "./footer.css";
import AOS from 'aos';

const Footer = () => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (

    <footer>
        <div className="icons py-2 ">

          <div data-aos="slide-right" data-aos-duration="2000" data-aos-offset="100">
            <a href="https://www.instagram.com/satyam_chaudhry__/" target="_blank"><i className="bi bi-instagram display-6 mx-3"></i></a>
          </div>

          <div data-aos="slide-top" data-aos-duration="2000" data-aos-offset="100">
          <a href="https://www.instagram.com/satyam_chaudhry__/" target="_blank"><i className="bi bi-twitter display-6 mx-3"></i></a>
          </div>

          <div data-aos="slide-left" data-aos-duration="2000" data-aos-offset="100">
          <a href="https://www.linkedin.com/in/satyam-singh-51b1bb193/"><i class="bi bi-linkedin display-6 mx-3"></i></a>
          </div>

        </div>

        <div>
          <a class="footer__btn" href="satyamror1109@gmail.com"><i class="bi bi-envelope display-6 mailus"></i></a>
        </div>

        <div data-aos="slide-left" data-aos-duration="1000" data-aos-offset="100">
          <p className="comp-name">Fitness Buddy</p>
        </div>
    </footer>
  );
};

export default Footer;
