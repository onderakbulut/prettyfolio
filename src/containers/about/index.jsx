'use client';
import { useEffect } from 'react';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

function About() {
    useEffect(() => {
        const wow = new WOW(
			{
			  boxClass:     'wow',     
			  animateClass: 'animate__animated', 
			  offset:       0,      
			  mobile:       true,    
			  live:         true      
			}
		)
		wow.init();
    }, []);
    return (  
        <section className="about">
            <div className="position-relative">
                <div className="position-absolute start-0 top-0 end-0 bottom-0 z-n1">
                    <img
                        className="w-100 h-100 object-fit-cover"
                        src="/images/about-img1.jpg"
                        alt="hero-bg"
                    />
                </div>
                <div className="container">
                    <div className="row justify-content-center pt-80 pb-120 py-lg-160 text-center text-uppercase">
                        <div className="col-md-8 col-lg-6">
                            <div className="bg-white py-32 px-20 border border-10 border-white-50">
                                <h6 className="fs-20 fs-lg-28 fw-bold mt-20 mb-10 ls-4.8 wow animate__fadeIn" data-wow-delay="0.6s">
                                    About Us
                                </h6>
                                <p className="fs-13 fs-lg-14 ls-4 text-black-200 wow animate__fadeInUp" data-wow-delay="0.9s">
                                    Vestibulum at aliquam lorem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-80 pb-128">
                <div className="row mb-32">
                    <div className="col-sm-5 col-md-4 wow animate__fadeInUp" data-wow-delay="1.3s">
                        <img src="./images/about-img2.jpg" alt="" className="img-fluid mb-20" />
                        <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mt-20 mb-10">About Pretty</h6>
                        <p className="ls-1 ws-1 text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="col-sm-7 col-md-8 wow animate__fadeInUp" data-wow-delay="1.6s">
                        <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mb-10">Lorem ipsum dolor sit amet</h6>
                        <p className="ls-1 ws-1 lh-28 text-gray">Morbi mattis scelerisque nunc quis faucibus. Cras consectetur, nulla nec condimentum bibendum, est est accumsan ipsum, id vestibulum nulla odio vel massa. Duis pharetra augue ac bibendum eleifend. Curabitur id luctus lectus. Donec sem sem, egestas sit amet sagittis pellentesque, semper non libero.</p>
                        <blockquote className="ls-2 mb-20 py-10 px-20 border-start border-5 text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</blockquote>
                        <img src="./images/about-img3.jpg" alt="" className="img-fluid mb-20" />
                        <p className="ls-1 ws-1 lh-28 text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="row row-gap-lg-32">
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-delay="0.4s">
                        <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mt-20 mb-10">Donec eu porta 1</h6>
                        <p className="ls-1 ws-1 text-gray">Duis id ultricies magna. Fusce placerat eu magna non euismod. Curabitur suscipit tristique massa, nec pretium tellus maximus nec. Pellentesque convallis viverra mauris quis sollicitudin. Praesent et libero in augue aliquam malesuada vitae ultricies neque. Donec rutrum diam sagittis diam viverra tincidunt.</p>
                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-delay="0.8s">
                        <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mt-20 mb-10">Donec eu porta 2</h6>
                        <p className="ls-1 ws-1 text-gray">Duis id ultricies magna. Fusce placerat eu magna non euismod. Curabitur suscipit tristique massa, nec pretium tellus maximus nec. Pellentesque convallis viverra mauris quis sollicitudin. Praesent et libero in augue aliquam malesuada vitae ultricies neque. Donec rutrum diam sagittis diam viverra tincidunt.</p>
                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-delay="1.2s">
                        <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mt-20 mb-10">Donec eu porta 3</h6>
                        <p className="ls-1 ws-1 text-gray">Duis id ultricies magna. Fusce placerat eu magna non euismod. Curabitur suscipit tristique massa, nec pretium tellus maximus nec. Pellentesque convallis viverra mauris quis sollicitudin. Praesent et libero in augue aliquam malesuada vitae ultricies neque. Donec rutrum diam sagittis diam viverra tincidunt.</p>
                    </div>
                    <div className="col col-md-6 wow animate__fadeInUp" data-wow-delay="1.4s">
                        <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mt-20 mb-10">Donec eu porta 4</h6>
                        <p className="ls-1 ws-1 text-gray">Duis id ultricies magna. Fusce placerat eu magna non euismod. Curabitur suscipit tristique massa, nec pretium tellus maximus nec. Pellentesque convallis viverra mauris quis sollicitudin. Praesent et libero in augue aliquam malesuada vitae ultricies neque. Donec rutrum diam sagittis diam viverra tincidunt.</p>
                    </div>
                    <div className="col col-md-6 wow animate__fadeInUp" data-wow-delay="1.6s">
                        <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mt-20 mb-10">Donec eu porta 5</h6>
                        <p className="ls-1 ws-1 text-gray">Duis id ultricies magna. Fusce placerat eu magna non euismod. Curabitur suscipit tristique massa, nec pretium tellus maximus nec. Pellentesque convallis viverra mauris quis sollicitudin. Praesent et libero in augue aliquam malesuada vitae ultricies neque. Donec rutrum diam sagittis diam viverra tincidunt.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;