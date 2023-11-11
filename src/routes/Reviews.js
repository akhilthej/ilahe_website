import React from 'react';
import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';



import {googlereview} from '../components/data/data';

const Reviews = () => {
  return (
    <>
      <Helmet>
                <title>ilahe - Reviews</title>
                <meta name="description" content='Discover the top modeling and finishing school to refine your skills, boost your confidence, and embark on a successful modeling career.'/>
                <link rel="canonical" href="/reviews" />
      </Helmet>
    

 {/* Title Card */}
 <section className="py-28 sm:py-40" style={{ backgroundImage: 'url("https://drive.google.com/uc?id=1YOJ-Sjp3oiidK-JivRLm10UzunYuryOg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="flex flex-col items-center md:flex-row justify-center">
    <div className="md:w-1/2 md:pr-10">
     
    </div>
    <div className="md:w-1/2 px-5">
      <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
        <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
        Reviews
        </h1>
        <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
        Feedback From our Community.
        </p>

       
      </div>
    </div>
  </div>
</section>


{/*Testimony*/}
<div>
      <h2 class='text-black text-center '>Share your reviews at </h2>
      <a href="https://search.google.com/local/writereview?placeid=ChIJM0IEPqRRmg0RyLQAP_5varc"> <img  class="h-10 hover:h-12  max-w-full ml-auto mr-auto mt-2" src= {googlereview} alt="googlereview_icon" /></a>
    </div>



</>
  )
}

export default Reviews