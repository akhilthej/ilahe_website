import React from 'react'
import { Link } from 'react-router-dom'
import {GlobalData} from '../../../components/data/GlobalData'

import ModelingPriceTable from '../../../components/PriceTables/ModelingSchool/ModlingPriceTable'

import lvlexpert from './lvlexpert-mobeling-1.webp'
import lvlelit from './lvlelirt-mobeling.webp'
import lvlbasic from './lvlbasic-modeling-1.webp'

const Modeling = () => {
  return (
    <div>
     {/* Title Card */}
     <section className="py-20 sm:py-40" style={{ backgroundImage: `url(${GlobalData.Coverimages.ModelingCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
     <div className="flex flex-col items-center md:flex-row justify-center">
       <div className="md:w-1/2 md:pr-10">
        
       </div>
       <div className="md:w-1/2 px-5">
         <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
           <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
           Modeling
           </h1>
           <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
           Let's Build Fashion With Style.
           </p>
   
           <div className="mt-8 flex flex-wrap justify-center gap-4">
             <Link to="/contactus">
               <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 Get in Touch
               </a>
             </Link>
   
             <a href={GlobalData.company.companyWhatsapp}>
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
              WHAT IS Modling School ?
              </p>

              <p className="cursor-default text-sm sm:text-xl pt-5  text-gray-900">
              “A Modeling school, such as ILAHE, focuses on training students in overall personality development and cultural and social activities. Our goal is to motivate and educate individuals in developing the right attitude, which is crucial for achieving growth and success later in life. Through our efforts, we aim to develop the personality traits of our students and bridge any skill gaps that may hinder them from seeking employment in various sectors. Our initiative is to create a new culture in India where all youth have equal opportunities to succeed and contribute to building a better nation and brighter future.”
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap"></div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a  href={`tel:${GlobalData.company.companyPhone}`}>
                <button className="text-xs sm:text-sm transform rounded bg-pink-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Contact Now
                </button>
              </a>
            </div>
          </div>
        </section>

        <ModelingPriceTable />
        
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
         
          <Link to='/best-modeling-school-in-basic'>
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
          
          <Link to='/best-modeling-school-in-elite'>
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
          
          <Link to='/best-modeling-school-in-expert'>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-black border border-slate-200 px-12 py-2 font-medium text-white hover:text-black transition-colors hover:bg-slate-50">Apply Now</button>
          </Link>
        </div>
      </div>
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
            <a href={GlobalData.company.companyWhatsapp}>
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


export default Modeling