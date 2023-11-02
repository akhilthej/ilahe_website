import React from "react";
import { Link } from "react-router-dom";

import Brand_slider from "../components/Brand_slider";

import { HomeVideo } from "../components/data/data";
import ImageSlider from "../components/ImageSlider";

import {
  FixedPrice,
  OntimeDelivery,
  TimeManage,
  HiringModel,
} from "../components/data/data";
import { GlobalData } from "../components/data/GlobalData";


const Home = () => {
  return (
    <>
      
      <main className=" overflow-hidden">
        <ImageSlider />

        {/*herosection */}

        <section class="flex items-center my-5 justify-center  bg-white">
          <div class="mx-auto max-w-[55rem]">
            <div class="text-center">
              <null class="cursor-default text-sm sm:text-2xl font-extrabold leading-8 text-gray-900">
                FASHION . STYLE . EXECUTIVE
              </null>
              <h1 class="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 leading-[3.5rem] tracking-tight">
                Ilahe
              </h1>

              <p class="cursor-default text-sm sm:text-xl font-extrabold leading-8 text-gray-900">
                Modeling and Finishing School
              </p>
            </div>
            <div class="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="/contactus">
                <button class="text-xs sm:text-sm transform rounded bg-pink-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Apply Now
                </button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20some%20information.">
                <button class="text-xs sm:text-sm transform rounded border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-600 hover:text-black">
                  Whatsapp
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Video */}
        <div className="flex justify-center items-center">
          <video
            className="rounded-lg"
            poster=""
            loop
            width="80%"
            height="auto"
            autoPlay
            playsInline
            preload="metadata" 
          >
            <source src={HomeVideo} type="video/mp4" />
          </video>
        </div>

        {/* Tagline */}
        <section className="flex items-center my-10 justify-center  bg-white ">
          <div className="mx-auto max-w-[55rem]">
            <div className="text-center">
              <p className="cursor-default text-sm sm:text-4xl font-extrabold  text-gray-900">
                Your Vision, Our Code – Perfectly Executed.
              </p>

              <p className="cursor-default text-sm sm:text-xl pt-5  text-gray-900">
                Unlocking the Full Potential of Your Online Brand.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap"></div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
                <button className="text-xs sm:text-sm transform rounded bg-pink-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Contact Now
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Clients */}
        <Brand_slider />

        {/* Services */}
           {/*Line of Engagement */}
 <section id="services" className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
  <div className="xl:max-w-8xl mx-auto px-4">
    {/* Heading for "Line of Engagement" section */}

    <section className="text-center mx-auto mb-12 lg:px-20">

    <p className="text-xl font-medium text-black">
        website for startup compines
      </p>
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
        Build Your Web Office Online.
      </h2>
      <p className="text-sm font-medium text-black">
      "Every business requires a unique website to effectively reach its customers or clients. At Cyber Space Digital, we're here to help you discover the best choices tailored to your needs."
      </p>
    </section>

{/* "Modeling" section */}
<div className="flex flex-wrap justify-center -mx-4 text-center">
  <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-16">
    <div style={{ backgroundImage: 'url("https://drive.google.com/uc?id=11NXjq2_6_yas4Hi8C3h8_V79PLb-9FzR")', backgroundSize: 'cover', backgroundPosition: 'left' }} className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <h3 className="text-lg leading-normal mb-2 font-semibold text-white">
        Modeling School
      </h3>
      <p className="text-gray-200 text-sm">
        Catalyzing Business Success: Our business website solutions are designed to drive growth, enhance visibility, and boost profitability in the digital landscape.
      </p>
      <Link to='/best-modeling-school-in-india'>
        <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">Get Quotation</button>
      </Link>
    </div>
  </div>

  {/* "Finishing" section */}
  <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-16">
    <div style={{ backgroundImage: 'url("https://drive.google.com/uc?id=11NXjq2_6_yas4Hi8C3h8_V79PLb-9FzR")', backgroundSize: 'cover', backgroundPosition: 'left' }} className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <h3 className="text-lg leading-normal mb-2 font-semibold text-white">
      Finishing School
      </h3>
      <p className="text-gray-200 text-sm">
        Catalyzing Business Success: Our business website solutions are designed to drive growth, enhance visibility, and boost profitability in the digital landscape.
      </p>
      <Link to='/best-Finishing-school-in-india'>
        <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">Get Quotation</button>
      </Link>
    </div>
  </div>
</div>

</div>
</section>


        {/* WE BUILD */}
        <section
          style={{
            backgroundImage:
              'url("https://drive.google.com/uc?id=1YbaOxUrnvo_bq067RffGDgedztOaEMia")',
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="cursor-default py-40 flex flex-col items-center justify-center bg-black/70">
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-pink-400 tracking-tight ">
              Travelling worldwide
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-5xl md:text-5xl lg:text-5xl bg-clip-text bg-orange-600 tracking-tight ">
              and yourwide to transform your
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-pink-400 tracking-tight ">
              love towards “you” in an honest and truthful way.
              </h2>
            </div>
          </div>
        </section>
     
 {/*Who is it for? */}
 <section>
          <div className="cursor-default px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-black">
              Who is it for?
              </h2>
              <p className=" cursor-default text-sm sm:text-xl text-gray-900 ">
              <li>People seeking a professional and personal life balance</li>
              <li>Professionals who wish to enhance their career life</li>
              <li>Ladies looking for exposure in a different field</li>
              <li>Amateurs want to develop a personal and professional image</li>
              <li>For all ladies who wish to be empowered, bloom to their fullest potential, and have the secret ingredient to the life of their dreams.</li>
              </p>
            </div>
          </div>
        </section>

        {/*Explore */}
        <section
          style={{
            backgroundImage:
              'url("https://drive.google.com/uc?id=17CKOf3456AJ6ZjKhbaLuKGziUWrTUrAG")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section>
            <div className="cursor-default container px-6 py-10 mx-auto bg-black/60">
              <div className="lg:flex lg:items-center ">
                <div className="w-full space-y-12 lg:w-1/2 ">
                  <div>
                    <h2 className="text-3xl font-semibold text-white capitalize lg:text-4xl ">
                    APPLICATION GUIDELINES
                    </h2>
                    <div className="mt-2">
                      <span className="inline-block w-40 h-1 rounded-full bg-pink-500" />
                      <span className="inline-block w-3 h-1 ml-1 rounded-full bg-pink-500" />
                      <span className="inline-block w-1 h-1 ml-1 rounded-full bg-pink-500" />
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-white bg-pink-500 rounded-xl md:mx-4  ">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h2 className="text-2xl font-semibold text-white capitalize ">
                      <li>You do not need Professional Photographs to apply.</li>
                      <li>No selfies , Please ask a friend to help you.</li>
              <li>No sunglasses or hats.</li>
              <li>No or minimal make-up and no filters.</li>
              <li>Try to use natural light.</li>
              <li>Photographs must be in color and in focus.</li>
              <li>Please try to upload at least one full length and one close up picture.</li>
              <p className="text-sm pt-5">Once you have made your application, we will do our best to get back to you within five working days. If you have not heard back from us, please call us and quote your full name and email address.</p>
              <p className="text-sm">While your waiting to hear back,keep up to date with ILAHE by following us on social media.</p>
                      </h2>
                    </div>
                  </div>
                 
                </div>
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img
                    className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] "
                    src="https://drive.google.com/uc?id=17CKOf3456AJ6ZjKhbaLuKGziUWrTUrAG"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/*Line of Engagement */}
        <section
          id="services"
          className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10"
        >
          <div className="xl:max-w-8xl mx-auto px-4">
            {/* Heading for "Line of Engagement" section */}

            <section className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 ">
                Line of Engagement
              </h2>
              <p className="text-sm font-medium text-black">
                Streamline the management of advertising and content for your
                business, saving you valuable time.
              </p>
            </section>

            {/* "Fixed Price Model" section */}
            <div className="flex flex-wrap flex-row -mx-4 text-center">
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={FixedPrice}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Fixed Price Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Under this model, the web development company and the client
                    agree on a fixed price for the entire project scope.
                  </p>
                </div>
              </div>

              {/* "Time and Materials Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={TimeManage}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Time and Materials Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The client pays based on the time and resources spent on the
                    project.
                  </p>
                </div>
              </div>

              {/* "On-Time Delivery" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={OntimeDelivery}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    On-Time Delivery
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The web development company commits to delivering projects
                    on or before agreed-upon deadlines.
                  </p>
                </div>
              </div>

              {/* "Hiring Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={HiringModel}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Hiring Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    if your project requires additional manpower and extra
                    resources, we're ready to scale up and bring in the
                    necessary talent to meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* "Documentation" section */}
        <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3  tracking-tight ">
            Need Help ?
          </h2>
          <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
            Explore our comprehensive documentation for more information on our
            services.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contactus">
              <button className="text-xs sm:text-sm transform rounded bg-pink-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
                FAQ
              </button>
            </Link>
 
              <a href={`tel:${GlobalData.company.companyPhone}`} className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
                Contact us
              </a>
   
          </div>
        </section>
      </main>
      {/*        <a href={`tel:${GlobalData.company.companyPhone}`}></a>
<a href={`mailto:${GlobalData.company.companyEmail}`}></a> */}
    </>
  );
};

export default Home;
