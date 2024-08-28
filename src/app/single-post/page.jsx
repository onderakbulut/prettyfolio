function BlogPost() {
    return (  
        <section className="blog-post">
            <div className="position-relative">
                <div className="position-absolute start-0 top-0 end-0 bottom-0 z-n1">
                    <img
                        className="w-100 h-100 object-fit-cover"
                        src="/images/single-blog-banner.jpg"
                        alt="hero-bg"
                    />
                </div>
                <div className="container">
                    <div className="row justify-content-center pt-80 pb-120 py-lg-160 text-center text-uppercase">
                        <div className="col-md-8 col-lg-6">
                            <div className="bg-white py-32 px-20 border border-10 border-white-50">
                                <h6 className="fs-20 fs-lg-28 fw-bold mt-20 mb-10 ls-4.8 wow animate__fadeIn" data-wow-delay="0.6s">
                                    Single Blog post
                                </h6>
                                <p className="fs-13 fs-lg-14 ls-4 text-black-200 wow animate__fadeInUp" data-wow-delay="0.9s">
                                    Vestibulum at aliquam lorem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-64 pb-lg-96">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row mb-62">
                        <div className="col-12">
                            <h6 className="fw-bold fs-lg-28 ls-4.8 text-uppercase mb-10">Lorem ipsum dolor sit amet</h6>
                            <div className="text-gray-200 ls-1 mb-10 fs-14">
                                <span className="me-10">By <a href="#">Elon Musk</a></span>
                                <span>4 June 2016, Saturday</span>
                            </div>
                            <p className="ls-1 ws-1 lh-28 text-gray">Donec sem sem, egestas sit amet sagittis pellentesque, semper non libero. Nunc iaculis sodales pretium. Sed laoreet, neque vitae vehicula egestas, odio enim ultricies nunc, at venenatis diam libero eu purus. Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus.</p>
                            <blockquote className="ls-2 mb-20 py-10 px-20 border-start border-5 text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</blockquote>
                            <img src="./blog/blog-img1.jpg" alt="" className="img-fluid mb-20" />
                            <p className="ls-1 ws-1 lh-28 text-gray">Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit. Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante.</p>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="text-black-200 text-uppercase fs-14 ls-4 mb-30">Comments</div>
                                <div className="d-flex column-gap-24">
                                    <div className="flex-shrink-0">
                                        <img src="./images/comment1.jpg" alt="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="fw-bold text-uppercase fs-18 ls-4.8 mb-5">Jenne leon</div>
                                        <div className="fs-14 ls-1">5 June 2016, Sunday</div>
                                        <p className="ls-1 ws-1 lh-28 text-gray">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate voluptate neque, curabitur.</p>
                                    </div>
                                </div>
                                <div className="d-flex column-gap-24 mb-40 mb-lg-62">
                                    <div className="flex-shrink-0">
                                        <img src="./images/comment2.jpg" alt="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="fw-bold text-uppercase fs-18 ls-4.8 mb-5">Jenne leon</div>
                                        <div className="fs-14 ls-1">5 June 2016, Sunday</div>
                                        <p className="ls-1 ws-1 lh-28 text-gray">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate voluptate neque, curabitur.</p>
                                    </div>
                                </div>
                                <div className="text-black-200 text-uppercase fs-14 ls-4 mb-30">Leave a comment</div>
                                
                                <div className="mb-16">
                                    <input type="text" className="form-control border-white-100 text-gray-300 py-12" placeholder="Name" />
                                </div>
                                <div className="mb-16">
                                    <input type="text" className="form-control border-white-100 text-gray-300 py-12" placeholder="Email" />
                                </div>
                                <div className="mb-16">
                                    <textarea name="" className="form-control" rows="4" placeholder="Comment"></textarea>
                                </div>
                                <button className="btn btn-dark w-50 py-12">Submit a comment</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPost;