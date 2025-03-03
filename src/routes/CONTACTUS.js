import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Contactcover from "../assets/CoverImages/Contact_us.png";
import { GlobalData } from "../components/data/GlobalData";
import FAQ from "../components/Tools/FAQ";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
    honeypot: "", // honeypot field
    captcha: "", // CAPTCHA field
  });

  const [captchaAnswer, setCaptchaAnswer] = useState(Math.floor(Math.random() * 10));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (formData.honeypot !== "") {
      // honeypot field is filled, likely a bot
      return;
    }

    if (Number(formData.captcha) !== 2 + captchaAnswer) {
      // CAPTCHA answer is incorrect
      alert("Invalid CAPTCHA answer. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://discord.com/api/webhooks/1346051475452985396/sSCb0llcJXIHuR7h5XPJt0dSR8CosdmLTPD-k9TMBLpbTbqaANVeT1CLePkJ0ZNOpnEA", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          message: "",
          honeypot: "",
          captcha: "",
        });
      } else {
        alert("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact us</title>
        <meta
          name="description"
          content="Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs."
        />
        <link rel="canonical" href="/contactus" />
      </Helmet>

      {/* Title Card */}
      <section
        className="py-10 sm:py-40"
        style={{
          backgroundImage: `url("${Contactcover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
                <a href="mailto:admin@cyberspacedigital.in">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Email
                  </a>
                </a>
                <a href="tel:+91-814-340-7758">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Phone
                  </a>
                </a>

                <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
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

                  <p class="text-center sm:text-left text-normal text-lg sm:text-2xl font-medium text-black mt-2">
                    Hyderabad
                  </p>
                  <div class="flex items-center text-black">
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

                  <p class="text-center sm:text-left text-normal text-lg sm:text-2xl font-medium text-black mt-2">
                    Visakhapatnam
                  </p>

                  <div class="flex items-center text-black">
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
                      Neelus store building fourth floor , <br />
                      HB Colony Rd, next to BODY SHOP, Hill View Doctors Colony,{" "}
                      <br />
                      Seethammadara, Visakhapatnam, Andhra Pradesh 530016,
                      India.
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
                      <span className="text-[12px]">Visakhapatnam</span> <br />
                      {GlobalData.company.companyPhone} <br />
                      <span className="text-[12px]">Hyderabad</span>
                      <br />
                      {GlobalData.company.companyPhone2}
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

                <form onSubmit={handleSubmit} className="space-y-8 mx-5 my-5">
                  <div>
                    <label
                      htmlFor="Name"
                      className="text-black block mb-2 text-sm font-medium "
                    >
                      {" "}
                      Name:
                      <input
                        type="text"
                        name="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                        placeholder="Sam"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    <label
                      htmlFor="phonenumber"
                      className="text-black block mb-2 text-sm font-medium pt-2"
                    >
                      Phone number:
                      <input
                        type="phonenumber"
                        name="phonenumber"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                        placeholder="sam@mail.com"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    <label
                      htmlFor="email"
                      className="text-black block mb-2 text-sm font-medium pt-2"
                    >
                      Email:
                      <input
                        type="email"
                        name="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                        placeholder="sam@mail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium "
                    >
                      {" "}
                      <textarea
                        name="message"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                        placeholder="Leave a comment..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </label>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="captcha"
                      className="block mb-2 text-sm font-medium "
                    >
                      {" "}
                      What is {2} + {captchaAnswer}?
                      <input
                        type="number"
                        name="captcha"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                        placeholder="Answer"
                        value={formData.captcha}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  <div className="hidden">
                    <input
                      type="text"
                      name="honeypot"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-black block w-full rounded-3xl border  border-black px-12 py-3 text-sm font-medium   hover:text-black hover:bg-white  sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default ContactForm;