import { useState } from "react";
import Profile from "../assets/Profile.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  X
} from "lucide-react";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        
       {/* LEFT: CONTACT DETAILS + AVATAR */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col items-center justify-center p-8 space-y-6 rounded-xl 
             bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
             border border-white/20 shadow-xl"
>
  {/* AVATAR */}
 <div className="flex flex-col items-center">
      <motion.img
        src={Profile}
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-xl mb-6"
      />

      <h3 className="text-2xl font-semibold mb-2 text-center"><u>My Details</u></h3>

      <div className="space-y-4 text-lg text-center">

        {/* GitHub Icon Link */}
        <a
          href="https://github.com/ODIRAA-git"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3  hover:text-blue-400 transition"
        >
          <Github size={26} />
        </a>

        {/* LinkedIn Icon Link */}
        <a
          href="https://www.linkedin.com/in/madu-o-717713216"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 hover:text-blue-400 transition"
        >
          <Linkedin size={26} />
        </a>

    <p className="flex items-center gap-3 justify-center">
      <MapPin size={22}/> Duisburg, Germany
    </p>

    <p className="flex items-center gap-3 justify-center">
      <Phone size={22}/> +4917655064303
    </p>

    <a href="mailto:your@email.com" className="flex items-center gap-3 justify-center hover:text-blue-400 transition">
      <Mail size={22}/> odiraa_perpetua@yahoo.com
    </a>
    </div>

  </div>
</motion.div>

        {/* RIGHT: CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          action="https://formsubmit.co/odiraa_perpetua@yahoo.com"
          method="POST"
          onSubmit={() => setModalOpen(true)}
          className="flex flex-col space-y-4 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl"
        >
          {/* FormSubmit hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_honey" className="hidden" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/" />
          <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio!" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-white text-gray-900 border border-gray-300 focus:border-blue-400 transition placeholder:text-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-white text-gray-900 border border-gray-300 focus:border-blue-400 transition placeholder:text-gray-500"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-white text-gray-900 border border-gray-300 focus:border-blue-400 transition placeholder:text-gray-500"
          ></textarea>

         <motion.button
  type="submit"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="w-full text-black p-3 rounded font-semibold shadow-lg bg-[#FFEE91] hover:bg-[#FFF9D9]"
>
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl rounded-xl p-8 max-w-sm text-center text-white"
            >
              <CheckCircle size={60} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-lg mb-6">Thank you for reaching out. I will get back to you soon.</p>

              <button
                onClick={() => setModalOpen(false)}
                className="flex items-center mx-auto gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <X size={20}/> Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
