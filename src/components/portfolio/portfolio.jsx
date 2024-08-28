'use client';
import styles from './style.module.css';
import { FiLink } from "react-icons/fi";
import PortfolioData from '@/data/portfolio.json';
import { useState, useEffect, useRef } from 'react';
import imagesLoaded from 'imagesloaded';
import Link from 'next/link'

function Portfolio() {    
    const isotopeRef = useRef();
    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        if (typeof window !== 'undefined' && isotopeRef.current) {
            import("isotope-layout").then(Isotope => {
                imagesLoaded(isotopeRef.current, () => {
                    const isoInstance = new Isotope.default(isotopeRef.current, {
                        itemSelector: '.gallery-grid__item',
                    });
                    setIsotope(isoInstance);
                });
            });
        }
    }, []);

    useEffect(() => {
        if (isotope) {
            try {
                if (typeof isotope.arrange === 'function') {
                    filterKey === '*'
                        ? isotope.arrange({ filter: '*' })
                        : isotope.arrange({ filter: `.${filterKey}` });
                } else {
                    console.error("arrange is not a function on the isotope instance.");
                }
            } catch (error) {
                console.error("Error arranging isotope:", error);
            }
        }
    }, [isotope, filterKey]);

    const handleFilterChange = (e, key) => {
        e.preventDefault();
        setFilterKey(key);
    };

    return (  
        <div className="container pt-48 pb-96">
            <div className="row">
                <div className="col-12">
                    <ul className="list-unstyled d-flex flex-wrap justify-content-center fs-13 text-uppercase text-black-300 mb-32">
                        <li><a className={`py-8 px-17 mx-2 d-block ls-2 ${filterKey === '*' ? styles.active : ''}`} onClick={(e) => handleFilterChange(e, '*')} href="#">All</a></li>
                        <li><a className={`py-8 px-17 mx-2 d-block ls-2 ${filterKey === 'graphic' ? styles.active : ''}`} onClick={(e) => handleFilterChange(e, 'graphic')} href="#">Graphic</a></li>
                        <li><a className={`py-8 px-17 mx-2 d-block ls-2 ${filterKey === 'web' ? styles.active : ''}`} onClick={(e) => handleFilterChange(e, 'web')} href="#">Web template</a></li>
                        <li><a className={`py-8 px-17 mx-2 d-block ls-2 ${filterKey === 'photoshop' ? styles.active : ''}`} onClick={(e) => handleFilterChange(e, 'photoshop')} href="#">Photoshop</a></li>
                        <li><a className={`py-8 px-17 mx-2 d-block ls-2 ${filterKey === 'brand' ? styles.active : ''}`} onClick={(e) => handleFilterChange(e, 'brand')} href="#">Branding</a></li>
                    </ul>
                    <div className="filter-wrapper">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gallery-grid" ref={isotopeRef}>
                            {
                                PortfolioData.portfolio.map((item) => (
                                    <div 
                                        key={item.id}
                                        className={`gallery-grid__item col mb-24 ${item.categories
                                        .map((cat) => cat)
                                            .join(" ")}`}>
                                        <div className="position-relative">
                                            <img src={item.image} alt="" className='img-fluid' />
                                            <div className={`${styles['portfolio-item']} d-flex flex-column align-items-center justify-content-center`}>
                                                <Link href={`/project/${item.slug}`} className={`${styles['portfolio-link']} d-block rounded-circle d-flex align-items-center justify-content-center mb-20 mt-n20`}>
                                                    <FiLink />
                                                </Link>
                                                <div className='text-uppercase ls-4.8'>{item.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;