import ClientLogo from "@/components/ClientLogo";
import PageBanner from "@/components/PageBanner";
import Service from "@/components/Service";
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
            backgroundImage: "url(/assets/images/background/white-img.png)",
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
                Services
              </h1>
            </div>
          </div>

        </div>
      </section>

      <section className="services-area bgc-black pt-130 rpt-100 rel z-1 new-space-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-white text-center "
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >

                <h2>SERVICES – WHAT WE OFFER </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-stretch">
            <div
              className="col-xxl-3 col-lg-4 col-sm-6 mt-25"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item new-padding-sect">
                <div className="image">
                  <img
                    src="/assets/images/services/1.jpg" className="secvices-for-img"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                   Full Truckload (FTL)
                  </h4>
                  <p className="service-desc"> Direct, efficient FTL coverage across the U.S. and Canada, backed by over 5,000 carrier connections.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6 mt-25"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content new-padding-sect-2">
                <div className="image">
                  <img
                    src="/assets/images/services/2.jpg" className="secvices-for-img"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                  Less Than Truckload (LTL)
                  </h4>
                  <p>  From one pallet to partial loads up to 15,000 lbs — cost-effective and reliable.</p>

                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6 mt-25"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content new-padding-sect-2">
                <div className="image">
                  <img
                    src="/assets/images/services/3.png" className="secvices-for-img"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                Intermodal & Drayage 
                  </h4>
                  <p>    We specialize in port-to-warehouse container movements. Whether it’s first-mile pickup from a rail ramp or final-mile delivery to one, we handle the over-the-road segment of intermodal shipping.  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6 mt-25"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content new-padding-sect-3">
                <div className="image">
                  <img
                    src="/assets/images/services/4.jpg" className="secvices-for-img"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                     Expedited Freight
                  </h4>
                  <p>  Time-sensitive deliveries with 24/7 operational support and tracking.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id="services"
        className="services-area-five radius-shape-top bg-white pt-130 rpt-100 pb-70 rel z-2"
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div
              className="col-xl-10 text-center"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-50">
                
                <h2>
                  EQUIPMENT TYPES
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img
                    src="/assets/images/services/semi.png"  className="service-icons-1"
                    alt="Feature"
                  />
                </div>
                <h4>
                  DRY VANS
                </h4>
              </div>
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                 <img
                    src="/assets/images/services/truck.png"  className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>
                  REFRIGERATED TRUCKS
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="service-two-item style-three height-100"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                 <img
                    src="/assets/images/services/container.png"  className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>
                  FLATBED
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="flip-up">
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                <img
                    src="/assets/images/services/vehicle.png"  className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>
                  POWER ONLY
                </h4>
              </div>
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                 <img
                    src="/assets/images/services/networking.png"  className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>
                  DEDICATED TEAMS
                </h4>
              </div>
            </div>
            <h2 className="mt-20 mb-40">SPEICALIZE TRANSPORT </h2>

            <div className="col-xl-4 col-md-6" data-aos="flip-up">
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
              <img
                    src="/assets/images/services/logistics.png"  className="service-icons-1"
                    alt="Feature"
                  />
                </div>
                <h4>
                 AMAZON AND RETAILFULFILLMENT
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="flip-up">
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                      <img
                    src="/assets/images/services/freight.png"  className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>
                  DEDICATED CONTRACT FREIGHT
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="flip-up">
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                   <img
                    src="/assets/images/services/customer-service.png" className="service-icons"
                    alt="Feature"
                  />
                </div>
                <h4>
               DISTRIBUTION CENTER & CRESS-DOCK SUPPORT
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}




{/* <section className="services-two-area rel z-1">
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
      </section> */}

      <section className="case-studies-area pt-70 rpt-100 pb-100 rpb-70 rel z-1 new-space-section-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-30"
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
    </DadsonLayout>
  );
};
export default page;
