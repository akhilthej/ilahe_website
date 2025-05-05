import React from 'react';
import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';



import {googlereview} from '../components/data/data';

const Reviews = () => {
  return (
    <>
      <Helmet>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
  <meta name="language" content="en" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="referrer" content="no-referrer-when-downgrade" />
  <meta name="theme-color" content="#000000" />
  <meta name="application-name" content="Ilahe Modeling & Finishing School" />
  <meta name="author" content="Ilahe" />
  <meta name="keywords" content="Ilahe Reviews, Ilahe School Feedback, Modeling School Reviews, Finishing School Testimonials, Grooming Institute Reviews, Personality Development Feedback, Ilahe Success Stories, Verified Ilahe Reviews" />

  <title>Ilahe Reviews | Verified Student Stories & Success Experiences</title>
  <meta name="description" content="Discover real & verified reviews from students of Ilahe Modeling & Finishing School. Learn how they transformed their careers & confidence." />


  <link rel="canonical" href="https://ilahe.in/reviews" />
  <link rel="alternate" hrefLang="en" href="https://ilahe.in/reviews" />
  <link rel="alternate" hrefLang="x-default" href="https://ilahe.in/reviews" />

  
  <link rel="icon" href="https://ilahe.in/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="https://ilahe.in/apple-touch-icon.png" sizes="180x180" />

 
  <meta property="og:title" content="Ilahe Reviews | Verified Student Stories & Success Experiences" />
  <meta property="og:description" content="See what Ilahe students say about their grooming & modeling journey. Verified feedback & success stories." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilahe.in/reviews" />
  <meta property="og:image" content="https://ilahe.in/static/media/ilahe-modeling-banner.png" />
  <meta property="og:image:secure_url" content="https://ilahe.in/static/media/ilahe-modeling-banner.png" />
  <meta property="og:image:alt" content="Ilahe Reviews Banner" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Ilahe" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:updated_time" content="2025-03-27T00:00:00+05:30" />
  <meta property="og:see_also" content="https://www.facebook.com/ilaheschool" />
  <meta property="og:see_also" content="https://www.instagram.com/ilahe_school" />
  <meta property="og:see_also" content="https://twitter.com/ilaheofficial" />
  <meta property="og:see_also" content="https://www.linkedin.com/company/ilahe" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ilahe Reviews | Verified Student Stories & Success Experiences" />
  <meta name="twitter:description" content="Read verified reviews & real feedback from Ilahe students who transformed their careers & personality." />
  <meta name="twitter:image" content="https://ilahe.in/static/media/ilahe-modeling-banner.png" />
  <meta name="twitter:image:alt" content="Ilahe Reviews Banner" />
  <meta name="twitter:site" content="@ilaheofficial" />
  <meta name="twitter:creator" content="@ilaheofficial" />
  <meta name="twitter:domain" content="ilahe.in" />
  <meta name="twitter:url" content="https://ilahe.in/reviews" />

  <meta property="article:publisher" content="https://www.facebook.com/ilaheschool" />
  <meta property="article:author" content="https://www.facebook.com/ilaheschool" />
  <meta name="twitter:creator" content="@ilaheofficial" />
  <meta property="fb:app_id" content="YOUR_FB_APP_ID" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://ilahe.in" />

  <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Ilahe Reviews",
        "alternateName": "Ilahe Student Reviews",
        "url": "https://ilahe.in/reviews",
        "description": "Discover real reviews & success stories from students of Ilahe Modeling & Finishing School.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://ilahe.in/reviews"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Ilahe",
          "url": "https://ilahe.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ilahe.in/static/media/logo.png"
          },
          "sameAs": [
            "https://www.facebook.com/ilaheschool",
            "https://www.instagram.com/ilahe_school",
            "https://www.youtube.com/@Bharathiberri"

          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Verified Student"
            },
            "datePublished": "2024-10-01",
            "reviewBody": "The experience at Ilahe was transformational. The grooming sessions boosted my confidence and career.",
            "name": "Excellent Grooming & Confidence Training",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          }
        ]
      })
    }}
  />
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