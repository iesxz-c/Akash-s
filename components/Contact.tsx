"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "./Alert";
import { Particles } from "./Particles";
const Contact = () => {
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const[isLoading,setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        })
            
    }

    const showAlertMessage = (type: string, message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

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
        setFormData({
          name: "",
          email: "",
          message: ""
        })
        showAlertMessage("success", "Message Sent Successfully");
        } catch (error) {
          setIsLoading(false);
          showAlertMessage( "danger","Failed to send message.Please try again.");
        }

        
        //service_17cjfv1
        //template_5upukgn
    }
    return (
        <div id="contact">
          <div className="pb-20">
          <h1 className="heading">
        Contact {" "}
        <span className="text-purple">!</span>
      </h1>
      </div>
        <section className="relative flex 
        items-center c-space section-spacing">
          <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
          {showAlert && <Alert type={alertType} text={alertMessage} />}
          
            <div className="relative z-20 flex flex-col
             items-center justify-center 
             max-w-md p-5 mx-auto border
              border-white/10 rounded-2xl
               bg-black-100">
                <div className="flex flex-col 
                items-start w-full
                 gap-5 mb-10">
                    <h2 
                    className="text-heading text-purple  font-serif">
                        Let's Talk
                        </h2>
                        <p className="font-mono text-sm text-neutral-400">
                          Have a question or want to say hello? I'd love to hear from you.
                        </p>
                </div>
                <form className="w-full" 
                onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="text-pink-600 font-serif feild-label">
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
            <label htmlFor="email" className=" text-pink-600  font-serif feild-label">
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
             className="font-serif text-pink-600  feild-label">
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
  <button type="submit" className="border text-[1.2rem] 
  font-serif
    font-medium relative border-neutral-200
    dark:border-white/[0.2] text-black
    dark:text-pink-300 px-8 py-3 rounded-full 
    min-w-[180px]
    ">

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
        </div>
    )
}

export default Contact