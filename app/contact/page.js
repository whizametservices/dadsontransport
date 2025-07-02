import ContactForm from "@/components/contact-form";
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
            backgroundImage: "url(/assets/images/background/blue-truck.jpg)",
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
                CONTACT US
              </h1>
          
            </div>
          </div>

        </div>
      </section>
      <section className="contact-form-area pt-130 rpt-100 pb-120 rpb-90">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div
                className="contact-info-part rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Contact Us</span>
                  <h2>LETS MOVE FREIGHT SMATER.</h2>
                </div>
                <p>
                  Whether you're shipping local or long haul, we’re ready to roll. Contact us today to request a quote or speak with our team.
                </p>
                <div className="contact-info-wrap mt-40">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="text">
                      <h5 className="title"> Location</h5>

                      <p className="contacxt-text-new">Main Office: 1511 S Miles Ave Apt 211,<br /> Lodi, CA 95242</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="text">
                      <h5 className="title">Email Address</h5>
                      <div>
                      <a className="contacxt-text-new" href="mailto:support@dadson.us">  support@dadson.us</a> </div>
                      <div>
                         <a className="contacxt-text-new" href="mailto: ar@dadson.us"> ar@dadson.us</a></div>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone-volume" />
                    </div>
                    <div className="text">
                      <h5 className="title">Call Us</h5>
                      <a className="contacxt-text-new" href="tel:209-470-7250">
                        209-470-7250
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-xl-6 col-lg-6 col-md-9">
              <div
                className="contact-page-form z-1 rel"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>GET IN TOUCH</h2>
                <p>Drop us your query and we will get back to you.</p>
               <ContactForm />
              </div>
            </div>


          </div>
          {/* <div
            className="our-location mt-130 rmt-100"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}
        </div>
      </section>
    </DadsonLayout>
  );
};
export default page;
