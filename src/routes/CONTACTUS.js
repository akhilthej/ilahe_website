import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function App() {

  const [message, setMessage] = useState('');

  function Submit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);

    // Check if the email field is empty
    if (formDatab.get('Email') === '') {
      setMessage('Please enter your email address.');
      return; // Don't submit the form if the email is empty
    }

    fetch(
      'https://script.google.com/macros/s/AKfycbxxWbBcbFO20MqQSlzNQlOZyNDj3dTj4QJTQM9w3yClV6vYIIEfGijFdkiR6XTI8m9ftQ/exec',
      {
        method: 'POST',
        body: formDatab,
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.text();
        } else {
          throw new Error(`Received status code ${res.status}`);
        }
      })
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        setMessage(`An error occurred: ${error.message}`);
        console.log(error);
      });
  }

  return (
    <main>
    <Helmet>
      <title>Contact us</title>
      <meta
        name="description"
        content="Discover the top modeling and finishing school to refine your skills, boost your confidence, and embark on a successful modeling career."
      />
      <link rel="canonical" href="/contactus" />
    </Helmet>

      {/* Title Card */}
      <section
        className="py-10 sm:py-40"
        style={{
          backgroundImage:
            'url("https://drive.google.com/uc?id=1-RKGIgPQ6gfNDnoW1jr6R_TzB9P_12ge")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                Get in touch,
                <br />
                we’d love to hear from you.
              </h3>
              <p className="cursor-default text-white sm:text-sm text-xs text-center sm:ml-0">
                You can contact us through mail or you can get in touch at our
                digital office.
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


  {/*contact form*/}
  <section className="bg-gray-200 pt-20">
        <div class="relative flex items-top justify-center  sm:items-center sm:pt-0">
          <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class=" overflow-hidden">
              <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="p-6 mr-2   sm:rounded-lg">
                  <h1 class="text-center sm:text-left text-4xl sm:text-5xl text-black font-extrabold tracking-tight">
                    Get in Touch
                  </h1>
                  <p class="text-center sm:text-left text-normal text-lg sm:text-2xl font-medium text-black mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div class="flex items-center mt-8 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      class="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div class="ml-2 text-sm sm:text-base text-md tracking-wide font-semibold w-">
                    fifth floor, ABACUS TOWERS, 501, <br /> 
                    beside Gvk One Mall, Banjara Hills, <br /> 
                    Hyderabad, Telangana 500082.
                    </div>
                  </div>

                  <div class="flex items-center mt-4 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      class="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div class="ml-4 text-sm sm:text-base tracking-wide font-semibold w-40">
                      +91 8096598155
                    </div>
                  </div>

                  <div class="flex items-center mt-4 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      class="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div class="ml-4 text-sm sm:text-base tracking-wide font-semibold w-40">
                    admin@ilahe.in
                    </div>
                  </div>
                </div>

                 {/*Contact Form*/}
                 <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <label>Name</label>
          <br />
          <input
            placeholder="Your Name"
            name="Name"
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            placeholder="Your Email"
            name="Email"
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          />
          <br />
          <label>Subject</label>
          <br />
          <input
            placeholder="Subject"
            name="Subject"
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          />
          <br />
          <label>Message</label>
          <br />
          <input
            placeholder="Your Message"
            name="Message"
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 pb-10"
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="block p-3 w-full text-sm bg-black text-white hover:text-black  hover:bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </form>
        <p className="pb-5 text-center">{message}</p>
      </div>

              </div>
            </div>
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
  
    </main>
  );
}
