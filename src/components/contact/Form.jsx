import React, { useRef, useState } from "react";
import SentFormButton from "../../hooks/sentFormButton/sentFormButton";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_portfolio",
        "template_portfolio",
        e.currentTarget,
        "ytIgPKdJvOlJzFte5"
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          buttonRef.current?.playAnimation();
          setLoading(false);
          toast.success("Message sent successfully!");
          e.target.reset(); // optional: reset form
        },
        (error) => {
          console.error("❌ Error:", error.text);
          toast.error("Error sending message!");
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <div className="mx-2">
        <form className="flex flex-col gap-15 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className={commonClass}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className={commonClass}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            className={commonClass}
            required
          />
          <textarea
            rows="6"
            placeholder="Message*"
            name="message"
            className={commonClass}
            required
          ></textarea>
          <div className="flex justify-center">
            <SentFormButton
              ref={buttonRef}
              label={loading ? "Sending..." : "Send"}
              successLabel="Sent!"
            />
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

export default Form;
