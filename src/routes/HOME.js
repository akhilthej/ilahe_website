import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Import Helmet
import Brandslider from "../components/Brand_slider";
import { HomeVideo } from "../components/data/data";
import ImageSlider from "../components/ImageSlider";
import { GlobalData } from "../components/data/GlobalData";
import {
  SelfGromming,
  Training,
  PersonalGrowth,
  ProfessionalDevelopment,
} from "../components/data/data";

const Home = () => {
  return (
    <>
      <Helmet>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
  <meta name="language" content="en" />
  <meta name="format-detection" content="telephone=no" />
  <title>Ilahe Modeling & Finishing School | Boost Your Confidence & Career</title>
  <meta name="description" content="Enroll at Ilahe Modeling & Finishing School - India's top-rated institute for personal growth, grooming, and professional development. Unleash your true potential today!" />
  <meta name="keywords" content="Modeling School, Finishing School, Personal Development, Grooming Classes, Professional Growth, Confidence Building, Self-Discovery" />
  <meta name="author" content="Ilahe" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="theme-color" content="#000000" />
  <meta name="application-name" content="Ilahe Modeling & Finishing School" />
  <meta name="referrer" content="no-referrer-when-downgrade" />

  <link rel="canonical" href="https://ilahe.in/" />
  <link rel="alternate" hrefLang="en" href="https://ilahe.in/" />
  <link rel="alternate" hrefLang="x-default" href="https://ilahe.in/" />

  <link rel="icon" href="https://ilahe.in/favicon.ico" />
  <link rel="apple-touch-icon" href="https://ilahe.in/apple-touch-icon.png" sizes="180x180" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://ilahe.in" />

  <meta property="og:title" content="Ilahe Modeling & Finishing School | Boost Your Confidence & Career" />
  <meta property="og:description" content="Join Ilahe and transform your personality & career. India's leading grooming & modeling school. Apply Now!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilahe.in/" />
  <meta property="og:image" content="https://ilahe.in/static/media/ilahe-modeling-banner.png" />
  <meta property="og:image:secure_url" content="https://ilahe.in/static/media/ilahe-modeling-banner.png" />
  <meta property="og:image:alt" content="Ilahe Modeling & Finishing School" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Ilahe" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:see_also" content="https://www.facebook.com/ilaheschool" />
  <meta property="og:see_also" content="https://www.instagram.com/ilahe_school" />
  <meta property="og:see_also" content="https://twitter.com/ilaheofficial" />
  <meta property="og:see_also" content="https://www.linkedin.com/company/ilahe" />
  <meta property="og:see_also" content="https://www.youtube.com/@ilaheofficial" />
 
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ilahe Modeling & Finishing School | Boost Your Confidence & Career" />
  <meta name="twitter:description" content="Enhance your skills & confidence with Ilahe - India's #1 Modeling & Finishing School. Apply now." />
  <meta name="twitter:image" content="https://ilahe.in/static/media/ilahe-modeling-banner.png" />
  <meta name="twitter:image:alt" content="Ilahe Modeling & Finishing School" />
  <meta name="twitter:site" content="@ilaheofficial" />
  <meta name="twitter:creator" content="@ilaheofficial" />
  <meta name="twitter:domain" content="ilahe.in" />
  <meta name="twitter:url" content="https://ilahe.in/" />

 
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Ilahe Modeling & Finishing School",
        "alternateName": "Ilahe",
        "url": "https://ilahe.in/",
        "logo": "https://ilahe.in/static/media/logo.png",
        "description": "India's leading Modeling & Finishing School for personality development, grooming & confidence building.",
        "sameAs": [
          "https://www.facebook.com/ilaheschool",
          "https://www.instagram.com/ilahe_school",
          "https://www.youtube.com/@Bharathiberri"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7893350700",
          "contactType": "Customer Support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://ilahe.in/"
        }
      })
    }}
  />
</Helmet>

      <main className="overflow-hidden">
        <ImageSlider />

        {/* Hero Section */}
        <section className="flex items-center my-5 justify-center bg-white">
          <div className="mx-auto max-w-[55rem]">
            <div className="text-center">
              <null className="cursor-default text-sm sm:text-2xl font-extrabold leading-8 text-gray-900">
                FASHION . STYLE . EXECUTIVE
              </null>
              <h1 className="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 leading-[3.5rem] tracking-tight">
                Ilahe
              </h1>
              <p className="cursor-default text-sm sm:text-xl font-extrabold leading-8 text-gray-900">
                Modeling and Finishing School
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="/contactus">
                <button className="text-xs sm:text-sm transform rounded bg-pink-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Apply Now
                </button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20some%20information.">
                <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-600 hover:text-black">
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
            controls
            playsInline
            preload="metadata"
          >
            <source src={HomeVideo} type="video/mp4" />
          </video>
        </div>

        {/* Tagline */}
        <section className="flex items-center my-10 justify-center bg-white ">
          <div className="mx-auto max-w-[55rem]">
            <div className="text-center">
              <p className="cursor-default text-sm sm:text-4xl font-extrabold text-gray-900">
                Polishing Dreams, Shaping Futures – Your Confidence, Our Commitment.
              </p>
              <p className="cursor-default text-sm sm:text-xl pt-5 text-gray-900">
                Empowering Lives, One Stride at a Time.
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
        <Brandslider />

        {/* Services */}
        {/* Line of Engagement */}
        <section className="cursor-default section relative w-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
          <div className="xl:max-w-8xl mx-auto px-4 h-full flex flex-col justify-center">
            {/* Heading for "Line of Engagement" section */}
            <section className="text-center mx-auto mb-8 lg:px-20">
              <p className="text-lg sm:text-xl font-medium text-black mt-5">
                Explore Ilahe Modeling and Finishing School's Digital Home.
              </p>
              <h2 className="pb-2 font-extrabold text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl ">
                Empowering Your Journey, One Click at a Time.
              </h2>
              <p className="text-sm sm:text-base font-medium text-black">
                "We make it easy for you! Ilahe offers user-friendly websites
                designed just for you. Whether you're a budding model or looking
                to refine your skills, our online platform is your go-to
                destination. Showcase your talent effortlessly and step
                confidently into the world of modeling and finishing. Your
                journey begins here, online, with Ilahe."
              </p>
            </section>

            {/* "Modeling" and "Finishing" sections */}
            <div className="flex flex-wrap justify-center -mx-4 text-center">
              {/* "Modeling" section */}
              <div className="px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 mb-8">
                <div className="flex justify-center items-center">
                  <div
                    className="rounded-xl shadow-xl bg-cover bg-center w-full"
                    style={{
                      backgroundImage: `url(${GlobalData.Coverimages.ModelingschoolEmpower})`,
                      paddingTop: "100%",
                    }}
                  ></div>
                </div>
                <h3 className="text-lg leading-normal my-2 font-bold text-black">
                  Modeling school
                </h3>
                <p className="font-semibold text-sm text-white bg-orange-600 p-5 drop-shadow-lg rounded-lg">
                  Elevate Your Modeling School’s Presence: Our tailored website
                  solutions are crafted to amplify your brand, increase
                  visibility, and attract more opportunities in the modeling
                  industry. Get a quote today and step confidently into the
                  digital spotlight!
                </p>
                <Link to="/best-modeling-school-in-india">
                  <button className="mt-2 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-white hover:text-black transition-colors hover:bg-slate-50 mb-10">
                    Apply Now
                  </button>
                </Link>
              </div>

              {/* "Finishing" section */}
              <div className="px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 mb-8">
                <div className="flex justify-center items-center">
                  <div
                    className="rounded-xl shadow-xl bg-cover bg-center w-full"
                    style={{
                      backgroundImage: `url(${GlobalData.Coverimages.FinishingCoverEmpower})`,
                      paddingTop: "100%",
                    }}
                  ></div>
                </div>
                <h3 className="text-lg leading-normal my-2 font-bold text-black">
                  Finishing school
                </h3>
                <p className="font-semibold text-sm text-white bg-yellow-500 p-5 drop-shadow-lg rounded-lg">
                  Polish Your Presence Online: Our tailored websites add a touch
                  of class to your finishing school! Boost elegance, increase
                  visibility, & charm a refined audience. Get a quote now and
                  let your finishing school shine online with grace and style!
                </p>
                <Link to="/best-Finishing-school-in-india">
                  <button className="mt-2 text-xs sm:text-sm transform rounded bg-orange-600 border border-slate-200 px-12 py-2 font-medium text-white hover:text-black transition-colors hover:bg-slate-50 mb-10">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WE BUILD */}
        <section
          style={{
            backgroundImage: `url(${GlobalData.Coverimages.embark})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="cursor-default py-40 flex flex-col items-center justify-center bg-black/70">
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-pink-400 tracking-tight ">
                Embark on a journey of self-discovery with Ilahe.
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-5xl md:text-5xl lg:text-5xl bg-clip-text bg-orange-600 tracking-tight ">
                It's not just about style
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-pink-400 tracking-tight ">
                it's about unveiling your true self. Let us guide you as you
                travel the world of confidence, grace, and authenticity.
              </h2>
            </div>
          </div>
        </section>

        {/* Who is it for? */}
        <section>
          <div className="cursor-default px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-black">
                Who is it for?
              </h2>
              <p className="cursor-default text-sm sm:text-xl text-gray-900 ">
                <li>People seeking a professional and personal life balance</li>
                <li>Professionals who wish to enhance their career life</li>
                <li>Ladies looking for exposure in a different field</li>
                <li>
                  Amateurs want to develop a personal and professional image
                </li>
                <li>
                  For all ladies who wish to be empowered, bloom to their
                  fullest potential, and have the secret ingredient to the life
                  of their dreams.
                </li>
              </p>
            </div>
          </div>
        </section>

        {/* Explore */}
        <section className="cursor-default px-6 mx-auto bg-black">
          <section>
            <div className="cursor-default container px-6 mx-auto bg-black">
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
                        <li>
                          You do not need Professional Photographs to apply.
                        </li>
                        <li>No selfies, please ask a friend to help you.</li>
                        <li>No sunglasses or hats.</li>
                        <li>No or minimal make-up and no filters.</li>
                        <li>Try to use natural light.</li>
                        <li>Photographs must be in color and in focus.</li>
                        <li>
                          Please try to upload at least one full length and one
                          close-up picture.
                        </li>
                        <p className="text-sm pt-5">
                          Once you have made your application, we will do our
                          best to get back to you within five working days. If
                          you have not heard back from us, please call us and
                          quote your full name and email address.
                        </p>
                        <p className="text-sm">
                          While you're waiting to hear back, keep up to date with
                          ILAHE by following us on social media.
                        </p>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="lg:flex lg:items-center lg:w-1/2 lg:justify-center ">
                  <img
                    className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] "
                    src={GlobalData.Coverimages.Application}
                    alt="Application Guidelines"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Line of Engagement */}
        <section
          id="services"
          className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10"
        >
          <div className="xl:max-w-8xl mx-auto px-4">
            {/* Heading for "Line of Engagement" section */}
            <section className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 ">
                Unlock Your Potential Online
              </h2>
              <p className="text-sm font-medium text-black">
                Navigating the digital world is vital for modeling and finishing
                school, and Ilahe understands this. Our website development
                services ensure your online presence is not only visually
                appealing but also strategically optimized. Here's how joining
                Ilahe Modeling and Finishing School benefits you:
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
                      src={SelfGromming}
                      className="w-40 ml-auto"
                      alt="Personalized Growth"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Personalized Growth
                  </h3>
                  <p className="text-gray-500 text-sm">
                    At Ilahe, we tailor our training to your unique strengths,
                    helping you refine your skills, boost your confidence, and
                    carve your path in the modeling industry. Our personalized
                    approach ensures you develop as an individual, both
                    personally and professionally.
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
                      src={Training}
                      className="w-40 ml-auto"
                      alt="Industry-Relevant Training"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Industry-Relevant Training
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Ilahe provides hands-on experience and industry insights,
                    preparing you for the demands of the modeling and finishing
                    world. Our expert trainers impart knowledge that aligns with
                    current trends and industry expectations, giving you a
                    competitive edge.
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
                      src={PersonalGrowth}
                      className="w-40 ml-auto"
                      alt="Professional Development"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Professional Development
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Beyond modeling techniques, we focus on grooming, etiquette,
                    and effective communication. Ilahe equips you with the tools
                    to present yourself professionally, whether on the runway or
                    in a boardroom. Our training extends beyond the surface,
                    fostering holistic growth.
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
                      src={ProfessionalDevelopment}
                      className="w-40 ml-auto"
                      alt="Supportive Community"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Supportive Community
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Joining Ilahe means becoming part of a supportive community.
                    Connect with fellow aspiring models and individuals who
                    share your dreams and aspirations. Our network becomes your
                    foundation, offering encouragement, mentorship, and lifelong
                    friendships, enhancing your modeling journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* "Documentation" section */}
        <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 tracking-tight ">
            Need Help?
          </h2>
          <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
            By choosing Ilahe Modeling and Finishing School, you invest in more
            than just a training program – you invest in a transformative
            experience that propels you towards a successful and fulfilling
            career in the world of modeling and finishing.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contactus">
              <button className="text-xs sm:text-sm transform rounded bg-pink-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
                FAQ
              </button>
            </Link>

            <a
              href={`tel:${GlobalData.company.companyPhone}`}
              className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black"
            >
              Contact us
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;