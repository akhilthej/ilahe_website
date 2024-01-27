import React from 'react'
import { Helmet } from 'react-helmet-async';
import { GlobalData } from '../components/data/GlobalData';

import {BlogVideo} from '../components/data/data';


const TECHNOLOGIES = () => {
  return (
    <div className='Technologies'>
      <Helmet>
                <title>ilahe - Blogs</title>
                <meta name="description" content='Discover the top modeling and finishing school to refine your skills, boost your confidence, and embark on a successful modeling career.'/>
                <link rel="canonical" href="/blog" />
      </Helmet>
    
<main>

 {/* Title Card */}
 <section className="py-28 sm:py-40" style={{ backgroundImage: `url(${GlobalData.Coverimages.BlogCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="flex flex-col items-center md:flex-row justify-center">
    <div className="md:w-1/2 md:pr-10">
     
    </div>
    <div className="md:w-1/2 px-5">
      <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
        <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-black tracking-tight">
        Blogs & Research
        </h1>
        <p className="text-black sm:text-sm text-xs text-center sm:ml-0">
        Few Helpful tips for our community.
        </p>

       
      </div>
    </div>
  </div>
</section>


  {/*Video */}
  <div className="flex pt-10 justify-center items-center">
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
            <source src={BlogVideo} type="video/mp4" />
          </video>
        </div>








  <>
  <div className='text-center justify-center pt-10 pb-8'>
  <span className="text-black cursor-default upanddown  font-extrabold  text-2xl md:text-4xl  lg:text-4xl bg-clip-text  tracking-tight">
                  Ilahe : Blogs
                </span></div>
  {/* ====== Blog Section Start */}
  <section className=" pb-10 lg:pb-20">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <h3>
                <a
                  href="https://cyberspacedigital.blogspot.com/2023/06/the-importance-of-website-for-your.html"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Coming Soon
                </a>
              </h3>
              <p className="text-body-color text-base">
              Coming Soon
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <h3>
                <a
                  href="javascript:void(0)"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Coming Soon
                </a>
              </h3>
              <p className="text-body-color text-base">
              Coming Soon
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <h3>
                <a
                  href="javascript:void(0)"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Coming Soon
                </a>
              </h3>
              <p className="text-body-color text-base">
              Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ====== Blog Section End */}
</>






  </main>



    </div>
  )



}

export default TECHNOLOGIES