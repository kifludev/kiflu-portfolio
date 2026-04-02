import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      );


console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);


      setStatus({ loading: false, success: true, error: false });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Name..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="example@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Your Message..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success && (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status.error && (
              <p className="text-red-400 text-center">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
