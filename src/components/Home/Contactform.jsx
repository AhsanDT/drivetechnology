// // import React, { useState } from "react";
// // import PhoneInput from "react-phone-number-input";
// // import Link from "next/link";
// // import Formbg from "../../assets/bg-images/Contact sections.png";
// // import "react-phone-number-input/style.css";
// // import Image from "next/image";
// // import Swal from "sweetalert2";

// // function Contactform() {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     phoneNumber: "", // This should be a string
// //     message: "",
// //     agreeToPolicy: false,
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;

// //     const newValue = type === "checkbox" ? checked : value;
// //     if (name === "phoneNumber") {
// //       // Handle phone number separately
// //       setFormData((prevData) => ({
// //         ...prevData,
// //         [name]: value,
// //       }));
// //     } else {
// //       setFormData((prevData) => ({
// //         ...prevData,
// //         [name]: newValue,
// //       }));
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Update the form data state first
// //       await new Promise((resolve) => {
// //         setFormData((prevData) => ({
// //           ...prevData,
// //           // Add any additional form fields as needed
// //         }));
// //         resolve();
// //       });

// //       await emailjs.send('', "", formData)

//       // // Send the form data to the backend using Axios
// //       // const response = await fetch("http://localhost:3200/submit-form", {
// //       //   method: "POST",
// //       //   headers: {
// //       //     "Content-Type": "application/json",
// //       //   },
// //       //   body: JSON.stringify(formData),
// //       // });

// //       // Handle the response from the backend if needed
// //       console.log(response.data);

// //       // Reset the form after successful submission
// //       setFormData({
// //         email: "",
// //         phoneNumber: "",
// //         message: "",
// //         agreeToPolicy: false,
// //       });
// //       // Show success alert
// //       // alert("Form submitted successfully!");
// //       Swal.fire({
// //         title: "Thanks",
// //         text: "Form submitted successfully!",
// //         icon: "success",
// //       });
// //     } catch (error) {
// //       console.error("Error submitting form:", error);

// //       // Show error alert
// //       // alert("Error submitting form. Please try again.");
// //       Swal.fire({
// //         icon: "error",
// //         title: "Sorry...",
// //         text: "Error submitting form. Please try again.!",
// //       });
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1
// //         data-aos="fade-top"
// //         className="text-[32px] mb-20 text-blue-950 lg:text-[48px] font-poppins font-bold text-[#282829] text-center"
// //       >
// //         {" "}
// //         Contact Us{" "}
// //       </h1>

// //       <div className="lg:py-0 relative  flex items-center justify-center">
// //         <Image
// //           src={Formbg}
// //           className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
// //         />

// //         <form
// //           className="mb-20 sm:flex mx-4 justify-center mb-10 Reveiwsection-banner3"
// //           onSubmit={handleSubmit}
// //         >
// //           <div>
// //             <div data-aos="fade-right">
// //               <label className="text-slate-700 text-lg font-medium font-['Inter'] leading-relaxed">
// //                 Email
// //               </label>
// //               <br></br>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 placeholder="you@company.com"
// //                 className="border border-gray-300 py-3 px-4 rounded-lg w-full sm:w-[400px] mt-2 outline-none text-slate-700 text-lg font-medium font-['Inter'] leading-relaxed"
// //               ></input>
// //             </div>

// //             <div className="mt-8" data-aos="fade-left">
// //               <label className="text-slate-700 text-lg font-medium font-['Inter'] leading-relaxed">
// //                 Phone Number
// //               </label>
// //               <br></br>
// //               <PhoneInput
// //                 defaultCountry="US"
// //                 className="border border-gray-300 py-3 px-4 rounded-lg w-full sm:w-[400px] mt-2 outline-none"
// //                 placeholder="Enter phone number"
// //                 value={formData.phoneNumber}
// //                 onChange={(value) =>
// //                   handleChange({ target: { name: "phoneNumber", value } })
// //                 }
// //                 displayInitialValueAsLocalNumber
// //                 international
// //                 format={(value, country) => (value ? `+${country.phone}` : "")}
// //               />
// //             </div>

// //             <div className="mt-8" data-aos="fade-right">
// //               <label className="text-slate-700 text-lg font-medium font-['Inter'] leading-relaxed">
// //                 Message
// //               </label>
// //               <br></br>
// //               <textarea
// //                 value={formData.message}
// //                 onChange={(e) =>
// //                   setFormData({ ...formData, message: e.target.value })
// //                 }
// //                 style={{ resize: "none" }}
// //                 placeholder="Write your message here..."
// //                 className="border text-red-1900 h-40 border-gray-300 py-3 px-4 rounded-lg  sm:w-[400px] mt-2 w-full outline-none text-slate-700 text-lg font-medium font-['Inter'] leading-relaxed"
// //               />
// //             </div>

// //             <div className="flex gap-2 items-center mt-4" data-aos="fade-left">
// //               {/* <div className="w-[26.67px] h-[26.67px] relative bg-white rounded-lg border border-gray-300"></div> */}
// //               <input
// //                 name="agreeToPolicy" // Add name attribute
// //                 checked={formData.agreeToPolicy}
// //                 onChange={handleChange} // Add this line
// //                 type="checkbox"
// //                 className="w-[20px] h-[20px] relative bg-white rounded-lg border border-gray-300"
// //               />

// //               <p className="text-slate-700 font-medium font-['Inter'] leading-loose">
// //                 You agree to our friendly{" "}
// //                 <span className="ml-2 border-b border-b-2  border-slate-500">
// //                   <Link href={"/privacypolicy"}>privacy policy.</Link>
// //                 </span>
// //               </p>
// //             </div>

// //             <button
// //               type="submit"
// //               data-aos="flip-up"
// //               className="bg-[#5973C1] text-white w-full mt-10 rounded-lg py-4 font-medium font-['Inter'] leading-loose"
// //             >
// //               Send Message
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Contactform;

// // import Image from 'next/image'
// // import React from 'react'
// // import imgcontact from '../../assets/contact-lady.jpg'
// // import contactBack from '../../assets/bg-images/service.png'

// // function Contactsec() {
// //   return (

// //     <div className='relative bg-[#20274D] h-auto flex justify-center mx-auto my-10'>

// // <Image src={contactBack} className='absolute top-[-270px]'/>

// //       <div className='w-[50%] flex items-center px-20 justify-center'>

// //         <div>
// //           <h1 className='h-[0px] text-end relative text-4xl bottom-[50px] text-gray-400'>●・○</h1>

// //           <h1 className="text-4xl font-bold font-['Poppins'] text-[white]">Reach Out to Us</h1>
// // <p className="font-['Poppins'] pt-4 text-[white]">

// // We value your feedback and inquiries. If you have any questions, suggestions, or concerns, please feel free to reach out to us.<br/><br/>
// //  Your input is crucial in helping us enhance our services and better cater to your needs.
// //  We are committed to providing prompt and helpful responses to ensure your experience with us is seamless. Contact us at<span className='font-extrabold text-[#4169E1] ml-2 border-[#20274D] border border-b-[#4169E1]'>info@drivetechnology.co</span>
// // </p>

// // <h1 className='h-[0px] text-strat relative text-4xl top-[20px] text-gray-400'>○・●</h1>
// //         </div>
// //       </div>

// //       <div className='w-[50%] border border-[#20274D] rounded-full '>
// //         <Image src={imgcontact} className='h-full w-[100%] rounded-full rounded-tr-none rounded-br-none object-cover' />
// //       </div>

// //     </div>
// //   )
// // }

// // export default Contactsec

// // Import the necessary styles for AOS
// import 'aos/dist/aos.css';

// // Import AOS library
// import AOS from 'aos';

// import Image from 'next/image';
// import React, { useEffect } from 'react';
// import imgcontact from '../../assets/contact-lady.jpg';
// import contactBack from '../../assets/bg-images/contact-bg1.jpg';

// function Contactsec() {
//   // Initialize AOS on component mount
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-out',
//       once: false,
//     });
//   }, []);

//   return (
//     <div>
//       <div className='relative bg-[#20274D] h-52 md:h-96 flex justify-center items-center mx-auto my-10' data-aos="fade-up">
//         <div className='z-[40]'>
//           <p className="text-center text-white pb-2 font-['Poppins'] " data-aos="flip-up">Reach out anytime, anywhere.</p>
//           <h1 className="text-4xl font-bold font-['Poppins'] text-[white] text-center" data-aos="flip-up">CONTACT US</h1>
//         </div>
//         <Image src={contactBack} className='absolute h-52 md:h-96 object-cover w-full opacity-50'/>
//       </div>

//       <div className='flex flex-wrap sm:flex-nowrap px-8 justify-around my-20' data-aos="fade-up">
//         <div data-aos="flip-up">
//           <h1 className="font-['poppins'] text-2xl sm:text-4xl font-medium text-center text-[#20274D]">PHONE</h1>
//           <p className="font-['poppins'] text-center border border-[white] border-b-[#20274D] pt-4 text-[#20274D]">+1 (888) 910 8298 92188</p>
//         </div>

//             <div className="mt-8" data-aos="fade-right">
//               <label className="text-slate-700 text-lg font-medium font-['Inter'] leading-relaxed">
//                 Message
//               </label>
//               <br></br>
//               <textarea
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 style={{ resize: "none" }}
//                 placeholder="Write your message here..."
//                 className="border text-red-1900 h-40 border-gray-300 py-3 px-4 rounded-lg  sm:w-[400px] mt-2 w-full outline-none text-slate-700 text-lg font-medium font-['Inter'] leading-relaxed"
//               />
//             </div>

//         <div data-aos="flip-down">
//           <h1 className="font-['poppins'] text-2xl mt-12 sm:mt-0 sm:text-4xl font-medium text-center text-[#20274D]">GENERAL INQUIRIES</h1>
//           <p className="font-['poppins'] text-center border border-[white] border-b-[#20274D] mx-auto w-56 pt-4">office@drivetechnology.co</p>
//         </div>
//       </div>

//       <div className='text-center mb-20 mx-auto' data-aos="fade-up">
//         <p className="font-['poppins'] text-xl font-medium text-[#20274D] px-4" data-aos="fade-left">Our Customer Service team is waiting to Assist you</p>
//         <p className="font-['poppins'] pt-4 text-[#20274D] px-4" data-aos="fade-right">Got a question or need help? We're just a message away. Reach out whenever you need assistance.</p>
//         <p className="font-['poppins'] pt-4 text-[#20274D] px-4" data-aos="fade-left">Your thoughts matter to us. Whether it's feedback, inquiries, or just a friendly hello, we're here to chat. Connect with us today.</p>
//       </div>
//     </div>
//   );
// }

// export default Contactsec;

import "aos/dist/aos.css";

// Import AOS library
import AOS from "aos";

import Image from "next/image";
import React, { useEffect } from "react";
import imgcontact from "../../assets/contact-lady.jpg";
import contactBack from "../../assets/bg-images/contact-bg1.jpg";

function Contactsec() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false,
    });
  }, []);

  return (
    <div>
      <div
        className="relative bg-[#20274D] h-52 md:h-96 flex justify-center items-center mx-auto my-0"
        data-aos="fade-up"
      >
        <div className="z-[40]">
          <p
            className="text-center text-white pb-2 font-['Poppins'] "
            data-aos="flip-up"
          >
            Reach out anytime, anywhere.
          </p>
          <h1
            className="text-4xl font-bold font-['Poppins'] text-[white] text-center"
            data-aos="flip-up"
          >
            CONTACT US
          </h1>
        </div>
        <Image
          src={contactBack}
          className="absolute h-52 md:h-96 object-cover w-full opacity-50"
        />
      </div>

      <div className="flex items-center justify-center">
        <div>
          <div
            className="flex sm:flex-nowrap flex-wrap gap-12 sm:flex-nowrap px-8 justify-around my-20"
            data-aos="fade-up"
          >
            <div data-aos="flip-up">
              <h1 className="font-['poppins'] text-2xl sm:text-4xl font-medium text-center text-[#20274D]">
                PHONE
              </h1>
              <p className="font-['poppins'] text-center border border-[white] border-b-[#20274D] pt-4 text-[#20274D]">
                +1 (888) 910 8298 92188
              </p>
            </div>

            <div data-aos="flip-down">
              <h1 className="font-['poppins'] text-2xl sm:mt-0 sm:mt-0 sm:text-4xl font-medium text-center text-[#20274D]">
                GENERAL INQUIRIES
              </h1>
              <p className="font-['poppins'] text-center border border-[white] border-b-[#20274D] mx-auto w-56 pt-4 text-[#20274D]">
                office@drivetechnology.co
              </p>
            </div>
          </div>

          <div className="text-center mb-20 mx-auto" data-aos="fade-up">
            <p
              className="font-['poppins'] text-xl font-medium text-[#20274D] px-4"
              data-aos="fade-left"
            >
              Our Customer Service team is waiting to Assist you
            </p>
            <p
              className="font-['poppins'] pt-4 text-[#20274D] px-4"
              data-aos="fade-right"
            >
              Got a question or need help? We're just a message away. Reach out
              whenever you need assistance.
            </p>
            <p
              className="font-['poppins'] pt-4 text-[#20274D] px-4"
              data-aos="fade-left"
            >
              Your thoughts matter to us. Whether it's feedback, inquiries, or
              just a friendly hello, we're here to chat. Connect with us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactsec;
