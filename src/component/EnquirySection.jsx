import React from "react";
import "../Css/Enquiry.css";
import { useForm } from "react-hook-form";
import imagesetter from "../assets/Images/enquire.jpg";

function EnquirySection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="enquire_main_container flex justify-center flex-row mt-10 gap-16 bg-black">
        <div>
          <div className="text-center enquire_top_heading">
            Need Travel Assistance?
          </div>

          {/* Form with react-hook-form */}
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)} // Using handleSubmit here
          >
            <input
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="mt-8"
              autoComplete="off"
            />
            {errors.name && (
              <span style={{ color: "white", marginLeft: "10px" }}>
                This field is required
              </span>
            )}

            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span style={{ color: "white", marginLeft: "10px" }}>
                {errors.email.message}
              </span>
            )}

            <input
              type="tel"
              placeholder="Enter your WhatsApp number"
              autoComplete="off"
              {...register("contactnumber", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Please enter a valid number",
                },
              })}
            />
            {errors.contactnumber && (
              <span style={{ color: "white", marginLeft: "10px" }}>
                {errors.contactnumber.message}
              </span>
            )}

            <textarea
              rows={5}
              cols={10}
              autoComplete="off"
              {...register("description", { required: true })}
              placeholder="Describe what you're looking for your next destination."
            ></textarea>
            {errors.description && (
              <span style={{ color: "white", marginLeft: "10px"}}>
                This field is required
              </span>
            )}

            <button
              type="submit"
              className="submit_button_style flex justify-center mb-4 p-4 rounded-2xl w-auto px-8 font-bold mt-4"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
      {/* <div className="h-1"></div> */}
    </>
  );
}

export default EnquirySection;
