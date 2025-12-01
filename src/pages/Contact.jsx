import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";

const Contact = () => {
  const formRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors("");
    setSuccess("");

    if (!name || !email || !phone || !message) {
      setErrors("All fields are required.");
      return;
    }

    emailjs
      .sendForm(
        "contact_service",
        "template_nith5lj",
        formRef.current,
        "KXCKqPyuXbgnCk3ij"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setTimeout(() => setSuccess(""), 3000);
        },
        () => {
          setErrors("Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
      <section
        data-scroll-section
        id="contact"
        className="cover-section relative bg-white"
      >
        <div
          data-scroll
          data-scroll-sticky
          className="cover-slide-fast min-h-screen z-50 flex flex-col px-8 lg:px-15"
        >
          <div className="pt-15">
            <h2 className="lg:text-sm md:text-sm text-[11px] tracking-[0.2em] text-gray-500 uppercase">
              Contact us
            </h2>
          </div>

          <div className="contact-container flex flex-col lg:flex-row xl:flex-row items-start gap-15 flex-1 pb-20">
            <div className="contact-container-div flex flex-col gap-6 flex-1 min-w-[50%]">
              <h1
                className="lg:text-[5rem] md:text-[4rem] text-[2.8rem] text-[#2b1d12] leading-tight uppercase"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: "-2px",
                }}
              >
                Let's begin a {""}
                <span
                  style={{
                    fontFamily: "'My Soul', cursive",
                    fontWeight: "lighter",
                  }}
                >
                  c
                </span>
                onversation
              </h1>

              <p className="text-gray-600 text-base leading-relaxed md:w-[60%]">
                Tell us more about your space, your ideas, and your aspirations.
                We'll guide you through the next steps with care and intention.
              </p>

              <button className="my-4 w-fit border-b border-[#2b1d12] text-[#2b1d12] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
                LEARN MORE →
              </button>
            </div>

            <div className="formContainer w-full lg:w-[50%] xl:w-[50%]">
              <form ref={formRef} noValidate onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                  {errors && <p className="text-red-500 text-sm">{errors}</p>}
                  {success && (
                    <p className="text-green-600 text-sm">{success}</p>
                  )}

                  <div className="border-b-2 border-black pb-2">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      required
                      className="w-full outline-none"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row  gap-4">
                    <div className="border-b-2 border-black w-full pb-2">
                      <PhoneInput
                        placeholder="Enter phone number"
                        name="phone"
                        value={phone}
                        onChange={setPhone}
                        defaultCountry="NG"
                        international
                        countryCallingCodeEditable={false}
                        className="phoneInputCustom w-full"
                      />
                    </div>

                    <div className="border-b-2 border-black w-full pb-2">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full outline-none"
                      />
                    </div>
                  </div>

                  <div className="border-2 border-black pb-2">
                    <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      className="p-3 w-full min-h-[120px] resize-y outline-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="self-start border-b-2 border-black"
                  >
                    SEND REQUEST →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
