import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import { Testimonials2 } from "@/components/testimonials/Testimonials2";
import DadsonLayout from "@/layout/Layout";
import Link from "next/link";
const page = () => {
  return (
    <DadsonLayout
      header={1}
      footer={1}
      rootElements={{
        "--Tekprof-primary-color": "#e05b00",
        "--Tekprof-heading-color": "#020626",
        "--Tekprof-gray-color": "#FAF8F6",
      }}
    >
      <section className="page-banner-area   rel z-1">
        <div className="banner-wrap bgs-cover py-80"
          style={{
            backgroundImage: "url(/assets/images/background/truck.jpg)",
          }}
        >
          <div className="container">
            <div className="banner-inner">
              <h1
                className="page-title mb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                ABOUT US
              </h1>
             
            </div>
          </div>

        </div>
      </section>
      <section className="why-choose-us-area  rpb-70 rel z-1">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div
                className="why-choose-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >


                <div className="section-title mb-25">
                  <span className="sub-title mb-10 new-spacing">YOUR DISPATCH  </span>
                  <img className="text-image"
                    src="/assets/images/about/uncompromised.jpg"
                    alt="Why Choose"
                  />
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2>
                CHANGING THE WAY YOU  PERCEIVE DISPATCH
              </h2>

              <p  className="  coastt ">
                Coast-to-coast trucking solutions built on Dedication, Integrity, Commitment, and Execution
              </p>
               <p className="  coastt mt-15 "> — Our DICE Principle.   </p>
            </div>
          </div>



          {/* <div
            className="row"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="col-lg-6">
              <div className="feature-item-two">
                <div className="icon">
                  <i className="flaticon-experts" />
                </div>
                <h5>
                  <Link href="service-details">Dedicated Team</Link>
                </h5>
                <p>
                  This allowing scale resources as needed while
                  maintaining full control your project.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item-two">
                <div className="icon">
                  <i className="flaticon-loyal-customer" />
                </div>
                <h5>
                  <Link href="service-details">Clients Satisfaction</Link>
                </h5>
                <p>
                  From quality design and timely delivery post-project
                  support focus is on building lasting
                </p>
              </div>
            </div>
          </div> */}


        </div>
        <div className="col-lg-12 mt-15">
          {/* <div className="why-choose-images"> */}
          <div className="row ">
            <div className="col-md-4 col-12">
              <img className="three-imgs"
                src="/assets/images/about/Daimler.jpg"
                alt="Why Choose"
              />
            </div>

            <div className="col-md-4">
              <img
                src="/assets/images/about/newwqwqw.jpg"
                alt="Why Choose"
              />
            </div>
            <div className="col-md-4">
              <img className="three-imgs-2"
                src="/assets/images/about/new-trucki.jpg"
                alt="Why Choose"
              />
            </div>
          </div>

        </div>
      </section>

      <section id="AI" className="generative-ai-area pt-100 rpt-65 rel z-1">
        <div className="container">
          <div className="row justify-content-between mb-45 rmb-90">
            <div
              className="col-xl-5 col-lg-7 col-md-8"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-40">
                <h2>WE'RE NOT JUST MOVING FREIGHT.</h2>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-5 col-md-4 text-lg-end new-btn-main"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Link href="/contact" className="theme-btn">
                GET STARTED  NOW <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-ten">
                <div className="icon">
                  <img
                    src="/assets/images/about/mission.png" className="mission-logo"
                    alt="About Image"
                  />
                </div>
                <div className="content">
                  <h3>
                    MISSION
                  </h3>
                  <p>
                    To become a trusted partner in freight by delivering consistent results, proactive communication, and long-term reliability for both shippers and carriers.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-ten">
                <div className="icon">
                  <img
                    src="/assets/images/about/vision.png" className="mission-logo"
                    alt="About Image"
                  />
                </div>
                <div className="content">
                  <h3>
                    RESPONSIBILITY
                  </h3>
                  <p>
                    In an industry where silence, excuses, and short-term thinking win the norm, we stand for radical accountability, relationship-driven execution, and a carrier-first culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* About Page About Area Start */}
      {/* <section className="about-page-about-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9">
              <div className="about-page-about-left-content">
                <div
                  className="section-title mb-70 rmb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title color-primary mb-10">
                    About  
                  </span>
                  <h2>
                    Building Future-Ready Solutions for Today’s Challenges
                    Shaping the Future of Business Through Digital
                    Transformation
                  </h2>
                </div>
                <div className="row gap-70">
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                  >
                    <p>
                      We are dedicated to transforming businesses through
                      innovative, tailored software solutions With a team
                      skilled professionals commitment cutting-edge technology a
                      specialize creating scalable, user-friendly software.
                    </p>
                  </div>
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                    data-aos-offset={50}
                  >
                    <p>
                      From custom development and cloud solutions to
                      cybersecurity and data analytics, our services empower
                      organizations to streamline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div
                className="about-trusted-partners-area"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="trusted-clients-wrap pb-40 mb-30">
                  <h5>10m+ Trusted Partners</h5>
                  <div className="trusted-clients">
                    <img
                      src="/assets/images/testimonials/client1.jpg"
                      alt="Client"
                    />
                    <img
                      src="/assets/images/testimonials/client2.jpg"
                      alt="Client"
                    />
                    <img
                      src="/assets/images/testimonials/client3.jpg"
                      alt="Client"
                    />
                    <img
                      src="/assets/images/testimonials/client4.jpg"
                      alt="Client"
                    />
                  </div>
                </div>
                <img src="assets/images/logos/trustpilot.png" alt="Logo" />
                <p>8930+ reviews</p>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* About Page About Area End */}
      {/* About Page Image Start */}
      {/* <div className="about-page-image-area">
        <div className="container-fluid">
          <div className="about-page-wrap">
            <div
              className="about-page-image"
              data-aos="fade-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="/assets/images/about/about-page-image1.jpg"
                alt="About Image"
              />
            </div>
            <div
              className="about-page-image"
              data-aos="fade-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="/assets/images/about/about-page-image2.jpg"
                alt="About Image"
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* About Page Image End */}
      {/* About Page Experience Start */}
      {/* <section className="about-page-experience-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="about-page-experience-content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Experience Excellence with Our Uintech</h2>
                </div>
                <p>
                  At Company Name, excellence is at the core of everything we
                  do. Our team dedicated professionals combines deep industry
                  expertise with a passion for innovation to deliver
                  high-quality, tailored software solutions that drive results.
                  We pride ourselves meticulous attention to detail, our
                  commitment to client satisfaction, and our ability to turn
                  complex challenges into impactful outcomes. When you partner
                  with us, you’re not just getting a service provider—you’re
                  gaining a trusted committed to helping your business succeed.
                  Discover what true excellence means with Company Name by your
                  side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* About Page Experience End */}
      {/* Team Area start */}
      {/* <section className="team-area bgc-gray py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Meet Our Team
                </span>
                <h2>Experience Technical Team</h2>
              </div>
            </div>
          </div>
          <Team />
        </div>
      </section> */}
      {/* Team Area end */}
      {/* Why Choose Us Area start */}
      {/* <section className="why-choose-us-area py-130 rpt-100 rpb-75  rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50 rmb-0"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Why Choose Us
                </span>
                <h2>Empowering Businesses With Advanced IT Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 border-right border-left for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>Customizable Solutions</h4>
                  <p>
                    Providing highly customizable solutions tailored to each
                    client’s unique needs can set you apart. Clients are
                    looking.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                  <h4>Scalability &amp; Flexibility</h4>
                  <p>
                    Scalable solutions allow companies to grow without needing
                    to overhaul their software infrastructure architecture .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-data-protection" />
                </div>
                <div className="content">
                  <h4>Security &amp; Compliance</h4>
                  <p>
                    Prioritizing security ensures protection and compliance with
                    industry standards and regulations, safeguarding against.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right border-left"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>Customizable Solutions</h4>
                  <p>
                    Providing highly customizable solutions tailored to each
                    client’s unique needs can set you apart. Clients are
                    looking.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                  <h4>Scalability &amp; Flexibility</h4>
                  <p>
                    Scalable solutions allow companies to grow without needing
                    to overhaul their software infrastructure architecture .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-md-auto">
                <div className="icon">
                  <i className="flaticon-data-protection" />
                </div>
                <div className="content">
                  <h4>Security &amp; Compliance</h4>
                  <p>
                    Prioritizing security ensures protection and compliance with
                    industry standards and regulations, safeguarding against.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Why Choose Us Area end */}
      {/* Counter Area start */}
      {/* <div className="counter-area rel z-1">
        <div className="container-fluid">
          <div className="counter-wrap pt-70 pb-50 bgc-primary">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
                    <div className="counter-text-wrap">
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={8}
                      >
                        <Counter end={8} />
                      </span>
                      <span className="after">k+</span>
                    </div>
                    <span className="counter-title">
                      Project
                      <br /> Complete
                    </span>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
                    <div className="counter-text-wrap">
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={5}
                      >
                        <Counter end={5} />
                      </span>
                      <span className="after">k+</span>
                    </div>
                    <span className="counter-title">
                      We’ve Global
                      <br /> Trusted Clients
                    </span>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
                    <div className="counter-text-wrap">
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={23}
                      >
                        <Counter end={23} />
                      </span>
                      <span className="after">+</span>
                    </div>
                    <span className="counter-title">
                      Awards
                      <br /> Winning
                    </span>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
                    <div className="counter-text-wrap">
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={20}
                      >
                        <Counter end={20} />
                      </span>
                      <span className="after">+</span>
                    </div>
                    <span className="counter-title">
                      IT &amp; Tech
                      <br /> Services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Counter Area end */}
      {/* Testimonial Area start */}
      {/* <Testimonials2 bgClass="" /> */}
      {/* Testimonial Area end */}
      {/* Client Logo Area start */}
      {/* <ClientLogo containerClass="client-logo-area style-two for-border-top" /> */}
    </DadsonLayout>
  );
};
export default page;
