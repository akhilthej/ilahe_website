import React from 'react';
import { Helmet } from 'react-helmet-async';

import { GlobalData } from '../components/data/GlobalData';
import AboutSubcover from '../assets/CoverImages/AboutSubcover1.jpg'
import About2 from '../assets/CoverImages/About2.png'
import About3 from '../assets/CoverImages/About3.webp'

const Aboutus = () => {
  return (
    <main >
      <Helmet>
            <title>About Us ilahe</title>
            <meta name="description" content='Discover the top modeling and finishing school to refine your skills, boost your confidence, and embark on a successful modeling career.'/>
            <link rel="canonical" href="/aboutus" />
      </Helmet>
    
     
        
     {/* Title Card */}
     <section
  className="py-10 sm:py-48"
  style={{
    backgroundImage: `url(${GlobalData.Coverimages.Aboutus1})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  }}>

        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-yellow-500 tracking-tight">
                Know More About ilahe
              </h3>
              <p className="cursor-default text-yellow-600 sm:text-sm text-xs text-center sm:ml-0">
                Get-in-Touch
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:admin@ilahe.in">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Email
                  </a>
                </a>
              
                <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20some%20information.">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    WhatsApp
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
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
              I HAVE BEEN SO HAPPY YOU'RE HERE!
              </h2>
              <p className="text-sm font-medium text-black">
              "To join our modeling and finishing school (ILAHE), visit my website for more info then fill out the contact form so I can send personalized details over! You can also follow me . on other social platforms, and read blog posts."
              </p>
            </section>
            </div>
       </section>


       {/* WE BUILD */}
       <section
          style={{
            backgroundImage:`url(${AboutSubcover})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}>
          <div className="cursor-default py-40 flex flex-col items-center justify-center bg-black/70">
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-pink-400 tracking-tight ">
              KNOW MORE
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-5xl md:text-5xl lg:text-5xl bg-clip-text bg-orange-600 tracking-tight ">
              ABOUT ME
              </h2>
            </div>
          </div>
        </section>



        <section className="bg-white">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <p className="max-w-2xl mb-6 text-center">
        Hi, Berri here! A model, a ramp choreographer, and an entrepreneur. I’m so happy you’re here!! I could talk forever about how much I wanted to instill confidence in women, to foster self-belief, self-respect, self-love. You cannot give what you don’t have, so how can these girls/women give caring and love – if they don’t care or love themselves – but having a passion for both modeling and each client personality development should be given. So instead I’ll tell you a little bit about who I am! You spend so much of your day with me, it’s important to be sure our personalities are a great match!
      </p>
    </div>
    <div className="lg:mt-4 lg:col-span-5 lg:flex rounded-lg">
      <img
        src={About2}
        alt="mockup"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
</section>


<section className="bg-white">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
    <h1 class="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 leading-[3.5rem] tracking-tight">
    JOURNEY TO ILAHE
              </h1>
      <p className="max-w-2xl mb-6 text-center">
      I wanted to blaze a path and show other girls/boys it can be done. To give them hope for a future and a life. It has been six years, six long years of weaving my way through the modeling field. I taught modeling and ramp choreography to more than 200+ students till now. I saw my own friends and other girls in my age group who wanted to connect and feel a sense of family, safety, to have a safe place to share things. One person I know committed suicide, due to parents opposition towards modelling. I have seen the lack of self-love and the various methods (drinks, drugs etc.) to cover this lack temporarily.</p>
    <br/>
    <p className="max-w-2xl mb-6 text-center">
    Short cuts that can both cut short a life and certainly nothing that adds to their future. I wanted to instill confidence in women, to foster self-belief, self-respect, self-love. You cannot give what you don’t have so how can these girls/women give caring and love – if they don’t care or love themselves. I realized modeling and finishing school can help give girls confidence, after all – most women are judged by their looks but looks alone are not enough. I realized I can use modeling/finishing school to also teach other skills, life skills, self development skills along with grooming and etiquette skills. I could provide them a platform online/offline where they could get jobs for the skills developed. A platform that helps them sign proper agreements, a place of trust, transformation and self-growth for all women and thus was born ilahe. It Means Beautiful.</p>
    </div>
    <div className="lg:mt-4 lg:col-span-5 lg:flex rounded-lg">
      <img
        src={About3}
        alt="mockup"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
</section>



<section>
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 leading-[3.5rem] tracking-tight text-center">
        ILAHE
      </h1>
    </div>
    <div className="lg:mt-4 lg:col-span-5 lg:flex rounded-lg">
      <p className="max-w-2xl mb-6 text-center">
        was born. Its meaning is – The most beautiful, intelligent, smart, lovely woman in the world. Also means Goddess. All women are ILAHE – all women have the Divine Feminine in them.
      </p>
    </div>
  </div>
</section>





        {/*Line of Engagement */}
        <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
          <div className="xl:max-w-8xl mx-auto px-4">
            {/* Heading for "Line of Engagement" section */}

            <section className="text-center mx-auto mb-12 lg:px-20">
            <h1 class="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 leading-[3.5rem] tracking-tight">
            MY INTENT IS TO ALLOW ALL WOMEN TO FIND THEIR ILAHE WITHIN.
              </h1>
            </section>
            </div>
       </section>
        </main>

  )
}

export default Aboutus