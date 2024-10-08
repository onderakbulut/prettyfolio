import { FaMobileScreenButton } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { GiWorld } from "react-icons/gi";

export const metadata = {
    title: "Prettyfolio - Contact",
    description: "Generated by create next app",
};

function Contact() {
    return (  
        <section className="contact pb-40 pb-lg-0">
            <div className="position-relative">
                <div className="position-absolute start-0 top-0 end-0 bottom-0 z-n1">
                    <img
                        className="w-100 h-100 object-fit-cover"
                        src="/images/contact-banner.jpg"
                        alt="hero-bg"
                    />
                </div>
                <div className="container">
                    <div className="row justify-content-center pt-80 pb-120 py-lg-160 text-center text-uppercase">
                        <div className="col-md-8 col-lg-6">
                            <div className="bg-white py-32 px-20 border border-10 border-white-50">
                                <h6 className="fs-20 fs-lg-28 fw-bold mt-20 mb-10 ls-4.8 wow animate__fadeIn" data-wow-delay="0.6s">
                                    Contact Us
                                </h6>
                                <p className="fs-13 fs-lg-14 ls-4 text-black-200 wow animate__fadeInUp" data-wow-delay="0.9s">
                                    Vestibulum at aliquam lorem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-40 pt-lg-80 mb-40 mb-lg-80">
                <div className="row row-gap-20">
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24146.80380737277!2d-74.38705491854346!3d40.84222841028493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy%20Meadows%20Wetlands!5e0!3m2!1str!2str!4v1724601631540!5m2!1str!2str" className="w-100 h-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-28 fw-bold text-uppercase ls-4.8 mb-10">Let's work together!</h3>
                        <div className="mb-16">
                            <input type="text" className="form-control border-white-100 text-gray-300 py-12" placeholder="Your Name" />
                        </div>
                        <div className="mb-16">
                            <input type="text" className="form-control border-white-100 text-gray-300 py-12" placeholder="Your Email" />
                        </div>
                        <div className="mb-16">
                            <textarea name="" className="form-control" rows="4"></textarea>
                        </div>
                        <button className="btn btn-dark w-50 py-12">Send a message</button>

                    </div>
                </div>
            </div>
            <div className="container bg-white mb-lg-n20 position-relative z-1">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col">
                        <div className="d-flex column-gap-20">
                            <FaMobileScreenButton className="fs-32" />
                            <div>
                                <div className="text-black-200 fs-14 ls-4 text-uppercase mb-5">Phone</div>
                                <p className="text-gray lh-28 ws-1 ls-1">+99 00 8877 6655</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex column-gap-20">
                            <IoMdMail className="fs-32" />
                            <div>
                                <div className="text-black-200 fs-14 ls-4 text-uppercase mb-5">Email</div>
                                <p className="text-gray lh-28 ws-1 ls-1">hello@company.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex column-gap-20">
                            <GiWorld className="fs-32" />
                            <div>
                                <div className="text-black-200 fs-14 ls-4 text-uppercase mb-5">Address</div>
                                <p className="text-gray lh-28 ws-1 ls-1">
                                    123 New Street, Old Town <br />
                                    Another Village, 11220
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;