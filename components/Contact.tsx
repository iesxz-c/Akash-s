"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"
const Contact = () => {
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const[isLoading,setIsLoading] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        })
            
    }
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
          await emailjs.send("service_17cjfv1","template_5upukgn",{
          from_name: formData.name,
          to_name: "Akash Krishnan",
          from_email: formData.email,
          to_email: "akashiyu18@email.com",
          message: formData.message
        },"dPLAumiFJOgRkvh_k")
        setIsLoading(false);
        alert("success");
        setFormData({
          name: "",
          email: "",
          message: ""
        })
        } catch (error) {
          setIsLoading(false);
          alert("error");
        }

        
        //service_17cjfv1
        //template_5upukgn
    }
    return (
        <section className="relative flex 
        items-center c-space section-spacing">
            <div className="flex flex-col
             items-center justify-center 
             max-w-md p-5 mx-auto border
              border-white/10 rounded-2xl
               bg-black-100">
                <div className="flex flex-col 
                items-start w-full
                 gap-5 mb-10">
                    <h2 
                    className="text-heading">
                        Let's Talk
                        </h2>
                        <p className="font-normal text-neutral-400">
                          Have a question or want to say hello? I'd love to hear from you.
                        </p>
                </div>
                <form className="w-full" 
                onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
               id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Candice"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
             id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="name@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message"
             className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Enter your message....."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
  <button type="submit" className="border text-sm 
    font-medium relative border-neutral-200
    dark:border-white/[0.2] text-black
    dark:text-pink-300 px-4 py-2 rounded-full">

    <span>{!isLoading ? "Send" : "Sending..."}</span>

    <span className="absolute inset-x-0 
      w-1/2 mx-auto -bottom-px bg-gradient-to-r 
      from-transparent via-blue-500 
      to-transparent h-px" />
  </button>
</div>

        </form>
            </div>
        </section>
    )
}

export default Contact