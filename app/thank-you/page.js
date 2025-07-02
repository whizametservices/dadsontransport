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
            <section className="thankyou-section">


                <div className="container">

                    <div className="page-thanku-inner">
                        <img src="/assets/images/about/thankyou.png" className="thankyou" alt="" />
                        <h3 className="text-white mt-3">
                            Thank you for filling
                            <span className="mycolor"> out this form</span>
                        </h3>
                        <p className="updates mt-3 text-white">
                            You do not need to do anything else. We have got your details.
                            Please allow <br />
                            time for processing. We will get back to you shortly.
                        </p>

                        <div className="cta-one__btn-box">
                            <Link href="/" className="theme-btn btn-small ms-lg-4">Back To Home Page</Link>
                        </div>
                    </div>

                </div>
            </section>






        </DadsonLayout>
    );
};
export default page;