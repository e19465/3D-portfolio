/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useState } from "react";
import "./styles.css";
import emailjs from "@emailjs/browser";
import Fox from "../models/Fox";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const templateParams = {
    user_subject: "New Job Inquiry",
    user_name: form.name,
    message: form.message,
    user_email: form.email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => {
          setCurrentAnimation("idle");
        }, 3000);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        setTimeout(hideAlert, 3000);
      })
      .catch((error) => {
        setCurrentAnimation("idle");
        setIsLoading(false);
        console.log(error);
        showAlert({
          show: true,
          text: "Something went wrong! Please try again",
          type: "danger",
        });
        setTimeout(hideAlert, 3000);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text custom-gradient-pages-text ">
          Get in Touch...
        </h1>
        <form
          className="w-full flex flex-col gap-7 mt-1 p-5 custom-form "
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="input custom-input-styles"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="email" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              placeholder="john123@gmail.com"
              className="input custom-input-styles"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="message" className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              placeholder="Let me know how I can help you..."
              className="input h-[150px] custom-input-styles"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="custom-btn-bg-pages"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
