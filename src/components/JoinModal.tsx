"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, ArrowRight, X } from "lucide-react";
type FormStatus = "idle" | "loading" | "success" | "error";
export default function JoinModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  if (pathname.includes('/admin')) return null;

  const isOpen = searchParams.get("modal") === "join";
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    issues: "",
    improvements: "",
    support_level: "",
    lawn_sign: "",
    volunteer: "",
    extra: "",
  });
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.dataset.scrollY = String(scrollY)
    } else {
      const scrollY = document.body.dataset.scrollY || '0'
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY))
      // Reset form if closed
      setTimeout(() => {
        setStatus('idle')
        setFormData({
          name: '', address: '', contact: '', issues: '', improvements: '', support_level: '', lawn_sign: '', volunteer: '', extra: ''
        })
      }, 500)
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isOpen]);
  const close = () => {
    router.push(pathname, { scroll: false });
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/campaign-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-navy/80 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <div
            className="absolute inset-0 overflow-y-auto"
            data-lenis-prevent
            onWheel={e => e.stopPropagation()}
            onTouchMove={e => e.stopPropagation()}
          >
          <div className="min-h-screen px-4 flex items-center justify-center py-12">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-4xl relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={close}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-cream hover:bg-gold hover:text-navy transition-colors text-navy/50"
              >
                <X size={24} />
              </button>
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-navy uppercase tracking-tight">
                    Join the Campaign
                  </h2>
                  <p className="text-navy/60 font-body mt-2">
                    Fill out the form below to show your support, request a lawn
                    sign, or volunteer.
                  </p>
                </div>
                {status === "success" ? (
                  <div className="text-center py-16">
                    <CheckCircle
                      size={80}
                      className="text-green-500 mx-auto mb-6"
                    />
                    <h3 className="font-display font-bold text-3xl text-navy uppercase mb-4">
                      Thank you!
                    </h3>
                    <p className="text-navy/70 font-body text-lg">
                      Your message has been received. The team will be in touch
                      soon.
                    </p>
                    <button
                      onClick={close}
                      className="mt-8 bg-navy text-white px-8 py-3 font-display uppercase tracking-widest text-sm font-bold hover:bg-gold transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : status === "error" ? (
                  <div className="text-center py-16">
                    <AlertCircle
                      size={80}
                      className="text-red-500 mx-auto mb-6"
                    />
                    <h3 className="font-display font-bold text-3xl text-navy uppercase mb-4">
                      Error
                    </h3>
                    <p className="text-navy/70 font-body text-lg mb-8">
                      We couldn't send your submission. Please try again.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="bg-navy text-white px-8 py-3 font-display uppercase tracking-widest text-sm font-bold hover:bg-gold transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-navy font-bold font-body text-sm mb-2">
                          Name:
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-cream p-4 text-navy font-body border-0 focus:ring-2 focus:ring-gold"
                          placeholder="Your Full Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact" className="block text-navy font-bold font-body text-sm mb-2">
                          Contact:
                        </label>
                        <input
                          id="contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                          className="w-full bg-cream p-4 text-navy font-body border-0 focus:ring-2 focus:ring-gold"
                          placeholder="Email or Phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-navy font-bold font-body text-sm mb-2">
                        Address:
                      </label>
                      <input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full bg-cream p-4 text-navy font-body border-0 focus:ring-2 focus:ring-gold"
                        placeholder="Your Address (for lawn signs)"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="support_level" className="block text-navy font-bold font-body text-sm mb-2">
                          Support Level:
                        </label>
                        <select
                          id="support_level"
                          name="support_level"
                          value={formData.support_level}
                          onChange={handleChange}
                          className="w-full bg-cream p-4 text-navy font-body border-0 focus:ring-2 focus:ring-gold appearance-none"
                        >
                          <option value="">Select Level</option>
                          <option value="Strong">Strong Supporter</option>
                          <option value="Leaning">Leaning Supporter</option>
                          <option value="Undecided">Undecided</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="lawn_sign" className="block text-navy font-bold font-body text-sm mb-2">
                          Lawn Sign:
                        </label>
                        <select
                          id="lawn_sign"
                          name="lawn_sign"
                          value={formData.lawn_sign}
                          onChange={handleChange}
                          className="w-full bg-cream p-4 text-navy font-body border-0 focus:ring-2 focus:ring-gold appearance-none"
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">Yes, please</option>
                          <option value="No">No, thanks</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="volunteer" className="block text-navy font-bold font-body text-sm mb-2">
                          Volunteer:
                        </label>
                        <select
                          id="volunteer"
                          name="volunteer"
                          value={formData.volunteer}
                          onChange={handleChange}
                          className="w-full bg-cream p-4 text-navy font-body border-0 focus:ring-2 focus:ring-gold appearance-none"
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="issues" className="block text-navy font-bold font-body text-sm mb-2">
                        Message or Issues:
                      </label>
                      <textarea
                        id="issues"
                        name="issues"
                        value={formData.issues}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-cream p-4 text-navy font-body border-0 focus:ring-2 focus:ring-gold resize-none"
                        placeholder="What matters most to you?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full md:w-auto bg-navy text-white px-10 py-5 font-display font-bold uppercase tracking-widest hover:bg-gold hover:text-navy transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? "Sending..." : "Join Now"}{" "}
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
