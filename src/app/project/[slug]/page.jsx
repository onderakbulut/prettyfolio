import { notFound } from "next/navigation";
import PortfolioData from '@/data/portfolio.json';

function ProjectDetail({params}) {
    const project = PortfolioData.portfolio.find(project => project.slug === params.slug);

    if (!project) {
        notFound();
        return null;
    }
    
    return (  
        <section className="project-detail">   
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
                                    {project.title}
                                </h6>
                                <p className="fs-13 fs-lg-14 ls-4 text-black-200 wow animate__fadeInUp" data-wow-delay="0.9s">
                                    Vestibulum at aliquam lorem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-64 pb-96">
                <div className="row">
                    <div className="col-md-4 text-black-100">
                        <div className="mb-20">
                            <h5 className="ls-4.8 fs-18 text-uppercase">Client</h5>
                            <p className="text-gray">Ananda Co.</p>
                        </div>
                        <div className="mb-20">
                            <h5 className="ls-4.8 fs-18 text-uppercase">Date</h5>
                            <p className="text-gray">12 June 2016</p>
                        </div>
                        <div className="mb-20">
                            <h5 className="ls-4.8 fs-18 text-uppercase">Category</h5>
                            <p className="text-gray">Branding</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p className="ls-1 ws-1 lh-28 text-gray">Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante.</p>
                        <p className="ls-1 ws-1 lh-28 text-gray">Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit.</p>
                        <img src={`/${project.image}`} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetail;