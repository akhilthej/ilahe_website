import React from 'react'
import {
    FixedPrice,
    OntimeDelivery,
    TimeManage,
  } from "../components/data/data";

const FinishingPriceTable = () => {
  return (
    <div>
    
       {/*Line of Engagement */}
       <section
          id="services"
          className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10"
        >
          <div className="xl:max-w-8xl mx-auto px-4">
            {/* Heading for "Line of Engagement" section */}

            <section className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mt-3 ">
              PRICE DETAILS
              </h2>
              <p className="text-sm font-medium text-black">
                Streamline the management of advertising and content for your
                business, saving you valuable time.
              </p>
            </section>

            {/* "Fixed Price Model" section */}
            <div className="flex flex-wrap flex-row -mx-4 text-center">
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/3 lg:w-1/3 lg:px-6 wow fadeInUp"
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
                  Online 3 Days
                  </h3>
                  <p className="text-gray-500 text-sm mb-10">2499 INR </p>
                    <div>
                  <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20FinishingSchool">
               <a className="transform rounded-md bg-white px-5  py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 WhatsApp
               </a>
             </a></div>

                </div>
              </div>

              {/* "Time and Materials Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/3 lg:w-1/3 lg:px-6 wow fadeInUp"
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
                  Online 15 Days
                  </h3>
                  <p className="mb-10 text-gray-500 text-sm">15999 INR
                  </p>
                  <div>
                  <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20FinishingSchool">
               <a className="transform rounded-md bg-white px-5  py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 WhatsApp
               </a>
             </a></div>
                </div>
              </div>

              {/* "On-Time Delivery" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/3 lg:w-1/3 lg:px-6 wow fadeInUp"
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
                  Online 7 Days
                  </h3>
                  <p className="mb-10 text-gray-500 text-sm">7499 INR
                  </p>
                  <div>
                  <a href="https://api.whatsapp.com/send?phone=+918096598155&text=Hi,%20i%20am%20looking%20FinishingSchool">
               <a className="transform rounded-md bg-white px-5  py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 WhatsApp
               </a>
             </a></div>
                </div>
              </div>

             
               
              
            </div>
          </div>
        </section>
        </div>
  )
}

export default FinishingPriceTable