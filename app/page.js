import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import Team from "@/components/Team";
import Testimonials from "@/components/testimonials/Testimonials1";
import ProgressBar from "@/components/ProgressBar";
import WorkingProcess, { WorkingProcess2 } from "@/components/WorkingProcess";
import DadsonLayout from "@/layout/Layout";
import Link from "next/link";
import ProgressBarNew from "@/components/progressbarnew";

const page = () => {
  return (
    <DadsonLayout
      header={1}
      footer={1}
      rootElements={{
        "--Dadson-primary-color": "#e05b00",
        "--Dadson-heading-color": "#020626",
        "--Dadson-gray-color": "#FAF8F6",
      }}
    >
      {/*End Hidden Sidebar */}
      {/* Hero Section Start */}
      {/* <section
        className="hero-area pt-100 rpt-70 pb-130 rpb-100 rel z-1"
        style={{ backgroundImage: "url(/assets/images/hero/hero-bg.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 align-self-center">
              <div
                className="hero-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-15">Modern IT Solutions</span>
                <h1>Empowering Businesses with IT Solutions</h1>
                <p>
                  An IT solution agency is your trusted partner in navigating
                  complexities landscape wide range of services such as
                  software.
                </p>
                <Link href="services" className="theme-btn mt-15">
                  Explore UinTech IT Services
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="hero-image radius-animation"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="/assets/images/hero/hero.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <section className="new-banner d-flex align-items-center justify-content-center text-center">
        <div className="overlay-bnr"></div>
        <div className="container position-relative z-1">
          <h1 className="text-white mb-4 new-bnr-text">DRIVEN BY TRUST. <br /> DELIVERED WITH CARE.
          </h1>

          {/* <p className="bnr-text-new">Changing the way you perceive logistics <br />
            Coast-to-coast trucking solutions built on Dedication, Integrity, Commitment, and Execution</p> */}
          <div className="two-btn">
            <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">


              <Link href="tel:209-470-7250" className="theme-btn btn-small ms-lg-4">
                 GET A QUOTE
              </Link>
              <Link href="mailto:support@dadson.us" className="theme-btn-2 btn-small ms-lg-4">BECOME A CARRIER </Link>

            </div>

            <p className=" banner-text-desc text-white mt-15">
              MC 065783 • US DOT 3079379</p>
          </div>
        </div>
      </section>


      {/* Hero Section End */}
      {/* Features Area start */}
      {/* <section className="features-area rel z-1">
        <div className="container features-bg pt-130 rpt-100 pb-100 rpb-70">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-35"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Modern IT Solutions
                </span>
                <h2>
                  Transforming Challenges Into Opportunities with Smart IT
                  Solutions
                </h2>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <p>
                      IT solutions integrate cutting-edge technologies with
                      strategic planning to optimize processes and deliver
                      measurable results partnering with IT experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="/assets/images/features/feature1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">IT Solutions</Link>
                  </h4>
                  <p>
                    IT solutions encompass a broad range of services and
                    technologies.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="/assets/images/features/feature2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cyber Security</Link>
                  </h4>
                  <p>
                    Cybersecurity is the practice of protecting systems
                    networks.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="/assets/images/features/feature3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cloud Services</Link>
                  </h4>
                  <p>
                    Cloud services are on-demand computing resources delivered.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Area end */}
      {/* Why Choose Us Area start */}
      <section className="team-area bgc-gray py-90 rpy-100 rel z-1">

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>
                CHANGING THE WAY YOU  PERCEIVE   DISPATCH
              </h2>
              <p className="coastt">
                Coast-to-coast trucking solutions built on Dedication, Integrity, Commitment, and Execution
              </p>
                <p className="coastt mt-15"> — Our DICE Principle.   </p>
            </div>
            <img
              src="/assets/images/team/image.png"
              alt="Feature" className="new-about-img"
            />
          </div>
        </div>
        {/* <Team /> */}

      </section>




      {/* <section className="feature-area rpt-110 rpb-45 rel z-1">
        <div className="container-fluid">
            <h2 className="choose-section"> WHY DADSON TRANSPORT? </h2>
          <div className="row justify-content-around">
            <div
              className="col-lg-2 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>Unmatched Reliability</h4>
                <p>
                  Every shipment is managed by experienced professionals using verified equipment and trusted carrier partners.
                </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                   <h4>Smart, Seamless Solutions</h4>
                <p>
                  We simplify complex dispatch using advanced tools and a people-first approach
                </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three me-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-data-protection" />
                </div>
                <div className="content">
                  <h4>Complete Visibility</h4>
                <p>
                  Real-time tracking and transparent updates — so you're never in the dark
                </p>
                </div>
              </div>
            </div>
              <div
              className="col-lg-2 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                 <h4>
                  Proven Performance</h4>
                <p>
                  Trusted by leading brands like Amazon, Temu, Sysco, and Costco.
                </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-graphic-design" />
                </div>
                <div className="content">
                  <h4>
                  Nationwide Coverage</h4>
                <p>
                  From California to New York, we keep freight moving efficiently across the U.S. and Canada.

                </p>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Area end */}

      <WorkingProcess />


      <section className="services-two-area rel z-1">
        <div className="container container-1300">

          <div className="row justify-content-center align-items-stretch">
            <div className="new-service-txtt">
              <h2>SERVICES WHAT WE OFFER</h2></div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 mt-30"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two hover-two">
                <div className="icon">
                  <img
                    src="/assets/images/services/container.png" className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>
                  1. Full Truckload (FTL)
                </h4>
                <p> Direct, efficient FTL coverage across the U.S. and Canada, backed by over 5,000 carrier connections.</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 mt-30"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two hover-two">
                <div className="icon">
                  <img
                    src="/assets/images/services/vehicle.png" className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>2. Less Than Truckload (LTL)</h4>
                <p>  From one pallet to partial loads up to 15,000 lbs — cost-effective and reliable. </p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 mt-30"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two hover-two">
                <div className="icon">
                  <img
                    src="/assets/images/services/semi.png" className="service-icons-1"
                    alt="Feature"
                  />
                </div>
                <h4> 3. Intermodal & Drayage</h4>
                <p>  We specialize in port-to-warehouse container movements. Whether it’s first-mile pickup from a rail ramp or final-mile delivery to one, we handle the over-the-road segment of intermodal shipping.</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 mt-30"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two hover-two">
                <div className="icon">
                  <img
                    src="/assets/images/services/truck.png" className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>4. Expedited Freight</h4>
                <p>  Time-sensitive deliveries with 24/7 operational support and tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies-area pt-70 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >

                <h2>
                  EQUIPMENT TYPE
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="case-study-item">
                <div className="image">
                  <img
                    src="/assets/images/team/21.png"
                    alt="Case Study"
                  />
                </div>
                <div className="content">

                  <h4 className="title">
                    Dry Vans
                  </h4>

                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="case-study-item">
                <div className="image">
                  <img
                    src="/assets/images/team/16.png"
                    alt="Case Study"
                  />
                </div>
                <div className="content">

                  <h4 className="title">

                    Refrigerated Trucks

                  </h4>

                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="case-study-item">
                <div className="image">
                  <img
                    src="/assets/images/team/234.jpg"
                    alt="Case Study"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Flatbeds
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="case-study-item">
                <div className="image">
                  <img
                    src="/assets/images/team/14.png"
                    alt="Case Study"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Power Only
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="case-study-item">
                <div className="image">
                  <img
                    src="/assets/images/team/25.png"
                    alt="Case Study"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Dedicated Teams
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="features-area rel z-1">
        <div className="container features-bg pt-40  pb-70  ">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-35"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>

                  SPECIALIZED TRANSPORT
                </h2>

              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image-1">
                  <img
                    src="/assets/images/team/member4.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Amazon and Retail Fulfillment
                  </h4>


                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image-1">
                  <img
                    src="/assets/images/team/member1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Dedicated Contract Freight
                  </h4>


                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image-1">
                  <img
                    src="/assets/images/team/member3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    Distribution Center & Cross-Dock Support
                  </h4>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <WorkingProcess2 /> */}
      <ProgressBarNew />
      {/* Services Area start */}
      {/* <section className="services-area bgc-blue pt-130 rpt-100 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-white text-center mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Modern IT Solutions
                </span>
                <h2>Empowering Businesses With Advanced IT Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="/assets/images/services/service1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-it" /> Managed IT Services
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Comprehensive support for all aspects of your IT
                      infrastructure, including monitoring, maintenance, and
                      technical support.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="/assets/images/services/service2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-network-security" /> Cybersecurity
                      Services
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Comprehensive support for all aspects of your IT
                      infrastructure, including monitoring, maintenance, and
                      technical support.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="/assets/images/services/service3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-cloud" /> Cloud Solutions
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Comprehensive support for all aspects of your IT
                      infrastructure, including monitoring, maintenance, and
                      technical support.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="/assets/images/services/service4.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-data-management" /> Data Backup
                      &amp; Recovery
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Comprehensive support for all aspects of your IT
                      infrastructure, including monitoring, maintenance, and
                      technical support.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Services Area end */}
      {/* Achievement Area start */}
      {/* <section
        className="achievement-area bgc-blue bgs-cover pt-100 rpt-70 pb-130 rpb-130 rel z-1"
        style={{
          backgroundImage: "url(/assets/images/background/achievement-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div
                className="achievement-content text-white rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="sub-title mb-10">Great Achievement</span>
                  <h2>Modern Design Agency Blueprint Innovation</h2>
                </div>
                <p>
                  We empower businesses to thrive in the digital system with
                  best innovative IT solutions.
                </p>
                <Link href="about" className="theme-btn mt-20">
                  Get Consultation
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="achievement-counter bg-white"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row no-gap">
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
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
                      <span className="counter-title">Project Complete</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
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
                      <span className="counter-title">Global Clients</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
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
                      <span className="counter-title">Awards Winning</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
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
                      <span className="counter-title">Expert Team Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Achievement Area end */}
      {/* Team Area start */}
      {/* <section className="team-area py-130 rpy-100 rel z-1">
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
      {/* Working Process Area start */}



      {/* Working Process Area end */}
      {/* Features Area start */}
      {/* <section className="features-area-two pt-130 rpt-100 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="/assets/images/features/feature-two1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Assessment and Strategy Development
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="/assets/images/features/feature-two2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Enhanced Cybersecurity Protocols solutions
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="/assets/images/features/feature-two3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Cloud Migration and Optimization
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Area end */}
      {/* Testimonials Area start */}
      {/* <Testimonials /> */}
      {/* Testimonials Area end */}
      {/* Client Logo Area start */}
      {/* <ClientLogo /> */}
      {/* Client Logo Area end */}
      {/* Blog Area start */}
      {/* <section className="blog-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  News &amp; Blog
                </span>
                <h2>Latest Insight &amp; Articles</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href="#">IT Solutions</a>
                    </li>
                    <li>
                      <a href="#">25 December 2024</a>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      Cybersecurity Essentials Protecting Business from Emerging
                      Threats
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Highlights clear problem-solution-result narrative,
                      demonstrating agency’s ability to provide.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="/assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">IT Solutions</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      The Ultimate Guide to Choosing the Right IT Solutions
                      Partner
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Highlights clear problem-solution-result narrative,
                      demonstrating agency’s ability to provide.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="/assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">IT Solutions</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      The Importance of Data Backup and Disaster Recovery Plans"
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Highlights clear problem-solution-result narrative,
                      demonstrating agency’s ability to provide.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Blog Area end */}
    </DadsonLayout>
  );
};
export default page;
