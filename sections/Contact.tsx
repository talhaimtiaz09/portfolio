"use client";

import SectionLayout from "@/layouts/SectionLayout";
import { motion } from "framer-motion";

// Reusable Input
const MinimalInput = ({ id, label, type = "text", placeholder }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <label
      htmlFor={id}
      className="block text-sm font-medium text-neutral-600 mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="
        w-full p-5 text-sm rounded-xl border border-neutral-300 bg-white
        focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400
        shadow-sm hover:shadow-md transition-all duration-300
      "
    />
  </motion.div>
);

// Reusable Textarea
const MinimalTextarea = ({ id, label, placeholder }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
  >
    <label
      htmlFor={id}
      className="block text-sm font-medium text-neutral-600 mb-2"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      rows={5}
      placeholder={placeholder}
      className="
        w-full p-5 text-sm rounded-xl border border-neutral-300 bg-white
        focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400
        shadow-sm hover:shadow-md transition-all duration-300 resize-none
      "
    />
  </motion.div>
);

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <SectionLayout
      sectionTitle="CONTACT"
      sectionSubtitle="Let's Connect"
      sectionIndex={7}
      sectionColor="bg-neutral-50"
      stickyHeading
    >
      <div className=" mx-auto flex items-start gap-x-4 items-center px-6 md:px-12 py-4">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mt-8 text-2xl text-neutral-600 leading-relaxed mb-8 max-w-xl">
            Whether it’s a startup, SaaS, or high-traffic product — I help turn
            ideas into{" "}
            <span className="text-lime-500 font-semibold">
              reliable, production-ready systems
            </span>
            .
          </p>

          <div className=" text-lg text-neutral-600">
            <p>✔ Built for performance, not demos</p>
            <p>✔ Real engineering. No shortcuts.</p>
            <p>✔ Clear communication & predictable delivery</p>
          </div>

          <p className="mt-10 text-lg text-neutral-500 italic">
            “No spam. No sales pressure. Just a real conversation.”
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative bg-white rounded-3xl p-10 md:p-14 w-full
            border border-neutral-200 transition-shadow duration-500
          "
        >
          <motion.form onSubmit={handleSubmit} className="space-y-4">
            <MinimalInput id="name" label="Your Name" placeholder="John Harry" />
            <MinimalInput
              id="email"
              label="Your Email"
              type="email"
              placeholder="john.harry@example.com"
            />
            <MinimalInput
              id="budget"
              label="Estimated Budget (Optional)"
              placeholder="$3,000 – $10,000"
            />
            <MinimalTextarea
              id="message"
              label="Project Details"
              placeholder="Tell me about your idea, timeline, and goals..."
            />

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(132, 204, 22, 0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              type="submit"
              className="
                w-full py-5 mt-4 rounded-xl
                bg-slate-900 text-white font-semibold uppercase tracking-wider
                transition-all duration-300
              "
            >
              Start the Conversation
            </motion.button>
          </motion.form>

          <p className="text-xs text-neutral-500 text-center mt-6">
            Usually replies within 24 hours • Your data stays private
          </p>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
