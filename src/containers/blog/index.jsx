'use client';
import { useEffect } from 'react';
import Link from 'next/link';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

function Blog() {
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
        <section className="blog">
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
                                    Our Blog
                                </h6>
                                <p className="fs-13 fs-lg-14 ls-4 text-black-200 wow animate__fadeInUp" data-wow-delay="0.9s">
                                    Lastest News and Articles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-64 pb-96">
                <div className="row row-cols-1 row-cols-sm-2 mb-40 mb-lg-100 row-gap-40">
                    <div className="col wow animate__fadeInUp" data-wow-delay="1s">
                        <Link href="/single-pos/single-post">
                            <img src="./blog/blog-img1.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">Flying the Clouds</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Frank Wang</a></span>
                            <span> 5 June 2016, Sunday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat sit amet, consectetuer adipiscing elit, sed diam nonumm.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Full Article</Link>
                    </div>
                    <div className="col wow animate__fadeInUp" data-wow-delay="1.6s">
                        <Link href="/single-post">
                            <img src="./blog/blog-img2.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">Walk in the Moon</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Elon Musk</a></span>
                            <span>4 June 2016, Saturday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat sit amet, consectetuer adipiscing elit, sed diam nonumm.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Read More</Link>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-3 mb-40 mb-lg-100 row-gap-40">
                    <div className="col wow animate__fadeInUp" data-wow-delay="1.9s">
                        <Link href="/single-post">
                            <img src="./blog/blog-img3.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">Swim the Pool</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Jack Ma</a></span>
                            <span>3 June 2016, Friday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Details</Link>
                    </div>
                    <div className="col wow animate__fadeInUp" data-wow-delay="2.2s">
                        <Link href="/single-post">
                            <img src="./blog/blog-img4.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">Talking the Sun</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Sandar</a></span>
                            <span> 2 June 2016, Thursday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Read More</Link>
                    </div>
                    <div className="col wow animate__fadeInUp" data-wow-delay="2s">
                        <Link href="/single-post">
                            <img src="./blog/blog-img5.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">View the Mountain</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Cindy</a></span>
                            <span>  1 June 2016, Wednesday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Full Story</Link>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-40 mb-lg-100 row-gap-40">
                    <div className="col wow animate__fadeInUp" data-wow-delay="2.4s">
                        <Link href="/single-pos/single-post">
                            <img src="./blog/blog-img6.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">Mountain</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Linda</a></span>
                            <span>   31 May 2016, Tuesday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Read More</Link>
                    </div>
                    <div className="col wow animate__fadeInUp" data-wow-delay="1.5s">
                        <Link href="/single-post">
                            <img src="./blog/blog-img7.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">Cloud</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Bill Gates</a></span>
                            <span>30 May 2016, Monday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Details</Link>
                    </div>
                    <div className="col wow animate__fadeInUp" data-wow-delay="1s">
                        <Link href="/single-post">
                            <img src="./blog/blog-img8.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">Blue Sky</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Elon Musk</a></span>
                            <span> 29 May 2016, Sunday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Read More</Link>
                    </div>
                    <div className="col wow animate__fadeInUp" data-wow-delay="1.3s">
                        <Link href="/single-post">
                            <img src="./blog/blog-img9.jpg" alt="" className='img-fluid' />
                        </Link>
                        <h6 className="fs-28 text-uppercase ls-4.8 fw-bold mt-20 mb-10">Forest</h6>
                        <div className="text-gray-200 ls-1 mb-10 fs-14">
                            <span className="me-10">By <a href="#">Jack Ma</a></span>
                            <span>  28 May 2016, Saturday</span>
                        </div>
                        <p className="text-gray lh-28 ws-1 ls-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                        <Link href="/single-post" className="btn btn-default mt-14">Details</Link>
                    </div>

                </div>
                <div className="row wow animate__fadeInUp" data-wow-delay="1.3s">
                    <div className="col-12">
                        <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mb-10">Interdum et malesuada fames</h6>
                        <p className="ls-1 ws-1 lh-28 text-gray">Sed quis laoreet purus, a luctus ligula. Suspendisse nec urna a dolor sodales venenatis. Donec et sem quam. Fusce faucibus neque sit amet arcu auctor tincidunt. Etiam feugiat nibh orci, quis sagittis velit pretium ac. Suspendisse egestas ex a dolor dictum gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis urna id odio consequat fringilla.</p>
                        <p className="ls-1 ws-1 lh-28 text-gray">Integer eu rhoncus libero. Nulla dignissim laoreet eros quis interdum. Proin ut placerat dui, eget vehicula ipsum. Mauris id molestie eros. Vestibulum fringilla dui nunc, vitae euismod ligula consectetur eget. Sed accumsan, ipsum in scelerisque euismod, nisi quam placerat urna, ac porttitor augue sapien varius velit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;