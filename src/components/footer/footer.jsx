'use client';
import { SlSocialTwitter, SlSocialDribbble, SlSocialBehance, SlSocialGoogle, SlSocialFacebook  } from "react-icons/sl";
import styles from "./style.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Footer() {
    useEffect(() => {
      AOS.init({
          offset: 80,
          duration: 1000,
          once: true,
          easing: "ease",
      });
      AOS.refresh();
    }, []);
    return (  
        <footer className="bg-black-500 py-120">
            <div className="container text-center">
                <p className="text-gray ls-1 mb-20" data-aos="fade-up" data-aos-delay="200">Copyright © 2016 Your Company Name - Designed by Tooplate</p>
                <ul className="d-flex justify-content-center mb-0 ps-0 column-gap-16 list-unstyled" data-aos="fade-up" data-aos-delay="400">
                    <li><a href="#" className={styles['social-link']}><SlSocialFacebook /></a></li>
                    <li><a href="#" className={styles['social-link']}><SlSocialTwitter /></a></li>
                    <li><a href="#" className={styles['social-link']}><SlSocialDribbble /></a></li>
                    <li><a href="#" className={styles['social-link']}><SlSocialBehance /></a></li>
                    <li><a href="#" className={styles['social-link']}><SlSocialGoogle /></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;