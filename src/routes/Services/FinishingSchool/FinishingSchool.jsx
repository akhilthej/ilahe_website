import React from 'react'
import { Link } from 'react-router-dom'

import { GlobalData } from '../../../components/data/GlobalData'

import lvlexpert from '../Modeling/lvlexpert-mobeling-1.webp'
import lvlelit from '../Modeling/lvlelirt-mobeling.webp'
import lvlbasic from '../Modeling/lvlbasic-modeling-1.webp'
import { Helmet } from "react-helmet-async";


import {FinishingSchoolVideo} from '../../../components/data/data';

import FinishingPriceTable from '../../../components/PriceTables/FinishingSchool/FinishingPriceTable'

const FinishingSchool = () => {
  return (
    <div>
    <Helmet>
        <title>Finishing School - ilahe</title>
        <meta
          name="description"
          content="Discover the top modeling and finishing school to refine your skills, boost your confidence, and embark on a successful modeling career."
        />
        <link rel="canonical" href="/contactus" />
      </Helmet>

     {/* Title Card */}
     <section className="py-20 sm:py-40" style={{ backgroundImage: `url(${GlobalData.Coverimages.FinishingSchool1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
     <div className="flex flex-col items-center md:flex-row justify-center">
       <div className="md:w-1/2 md:pr-10">
        
       </div>
       <div className="md:w-1/2 px-5">
         <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
           <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
           Finishing School
           </h1>
           <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
           Travelling worldwide and yourwide to transform your love towards “you” in an honest and truthful way.
           </p>
   
           <div className="mt-8 flex flex-wrap justify-center gap-4">
             <Link to="/contactus">
               <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 Get in Touch
               </a>
             </Link>
   
             <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20FinishingSchool">
               <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 WhatsApp
               </a>
             </a>
           </div>
         </div>
       </div>
     </div>
   </section>



    {/* Tagline */}
    <section className="flex items-center my-10 justify-center  bg-white ">
          <div className="mx-auto max-w-[55rem]">
            <div className="text-center">
              <p className="cursor-default text-xl sm:text-4xl font-extrabold  text-gray-900">
              WHAT IS FINISHING SCHOOL ?
              </p>

              <p className="cursor-default text-sm sm:text-xl pt-5  text-gray-900">
              “A finishing school, such as ILAHE, focuses on training students in overall personality development and cultural and social activities. Our goal is to motivate and educate individuals in developing the right attitude, which is crucial for achieving growth and success later in life. Through our efforts, we aim to develop the personality traits of our students and bridge any skill gaps that may hinder them from seeking employment in various sectors. Our initiative is to create a new culture in India where all youth have equal opportunities to succeed and contribute to building a better nation and brighter future.”
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap"></div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20FinishingSchool">
                <button className="text-xs sm:text-sm transform rounded bg-pink-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Contact Now
                </button>
              </a>
            </div>
          </div>
        </section>

  {/*Video */}
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
            <source src={FinishingSchoolVideo} type="video/mp4" />
          </video>
        </div>


        <FinishingPriceTable />

        <section>
  <div className="container mx-auto px-4">
    <div className="grid gap-4 grid-cols-3">
      {/* "Level-Basic" section */}
      <div className="text-center">
        <div >
        <img src={lvlbasic} />
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Level-Basic
          </h3>
         
          <Link to='/best-Finishing-school-basic'>
            <button className="mt-5 text-xs sm:text-sm transform rounded bg-black border border-slate-200 px-12 py-2 font-medium text-white hover:text-black transition-colors hover:bg-slate-50">Apply Now</button>
          </Link>
        </div>
      </div>

      {/* "Level-Elite" section */}
      <div className="text-center">
        <div>
        <img src={lvlelit} />
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Level-Elite
          </h3>
          
          <Link to='/best-Finishing-school-elite'>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-black border border-slate-200 px-12 py-2 font-medium text-white hover:text-black transition-colors hover:bg-slate-50">Apply Now</button>
          </Link>
        </div>
      </div>

      {/* "Level-Expert" section */}
      <div className="text-center">
        <div>
        <img src={lvlexpert} />
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Level-Expert
          </h3>
          
          <Link to='/best-Finishing-school-expert'>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-black border border-slate-200 px-12 py-2 font-medium text-white hover:text-black transition-colors hover:bg-slate-50">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

 {/*Whatdowedo */}
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

              <h2 className="pt-10 font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-black">
              APPLICATION GUIDELINES
              </h2>
              <p className=" cursor-default text-sm sm:text-xl text-gray-900 ">
              <li>You do not need Professional Photographs to apply.</li>
              <li>No selfies , Please ask a friend to help you.</li>
              <li>No sunglasses or hats.</li>
              <li>No or minimal make-up and no filters.</li>
              <li>Try to use natural light.</li>
              <li>Photographs must be in color and in focus.</li>
              <li>Please try to upload at least one full length and one close up picture.</li>
              <p>Once you have made your application, we will do our best to get back to you within five working days. If you have not heard back from us, please call us and quote your full name and email address.</p>
              <p>While your waiting to hear back,keep up to date with ILAHE by following us on social media.</p>
              </p>
            </div>
          </div>
        </section>

{/*FAQ*/}
<div className="flex py-5">
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
           
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> What is a modeling and finishing school?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                A modeling and finishing school is an institution that provides comprehensive training in various aspects of modeling and personal development. Our school focuses on enhancing not only modeling skills but also refining personal attributes such as poise, etiquette, and communication.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Who can enroll in the modeling and finishing school?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Our programs are open to individuals of all ages and backgrounds who are passionate about pursuing a career in modeling or wish to enhance their personal and professional development. We welcome beginners as well as those with some prior experience in the field.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    What programs do you offer?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offer a range of programs tailored to meet the diverse needs of our students. Our offerings include modeling courses, grooming and etiquette classes, personal development workshops, and specialized training sessions. Whether you're interested in runway modeling, photography, or overall personality development, we have a program for you.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    How long are the courses, and what is the time commitment?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                The duration of our courses varies based on the program. Typically, courses range from a few weeks to one month. The time commitment also depends on the specific program, with options for both online and offline courses.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    What skills will I learn in the modeling program?

                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Our modeling program covers a wide array of skills, including runway techniques, posing, photo shoots, makeup application, and more. We also focus on building self-confidence and developing a strong personal brand, essential for success in the modeling industry.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    How can I apply for admission?

                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                You can apply for admission through our online application portal on our website. Simply fill out the application form, submit the required documents, and follow the instructions provided. Our admissions team will review your application, and you will be contacted for further steps.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    How can I stay updated on upcoming events and workshops?


                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                To stay informed about our latest events, workshops, and news, you can know through our website. Additionally, follow us on our social media channels for real-time updates and behind-the-scenes glimpses of our school activities.
                </p>
              </details>
            </div>
   
        
         
            {/* Add more FAQ questions here using the same structure */}
          </div>
        </div>

        
  </div>

{/* "Documentation" section */}
<section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3  tracking-tight ">
            Apply Now
          </h2>
          <p className="cursor-default text-sm font-medium text-black mb-5">
            Explore our comprehensive documentation for more information on our
            services.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20want%20to%20apply%20for%20FinishingSchool">
              <button className="text-xs sm:text-sm transform rounded bg-pink-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
                Apply Now
              </button>
            </a>
            <Link to="/contactus">
              <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
                Contact us
              </button>
            </Link>
          </div>
        </section>

   </div>
  )
}

export default FinishingSchool