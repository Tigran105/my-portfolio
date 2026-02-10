import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useLanguage } from "@/shared/contexts/LanguageContext.tsx";
import { fadeInRight } from "@/shared/utils/animations.ts";
import { AnimatedTitle } from "@/shared/components/ui/AnimatedTitle.tsx";
import { Button } from "@/shared/components/ui/Button.tsx";

type FormErrors = {
  name: boolean;
  email: boolean;
  message: boolean;
};
export const GetInTouch: React.FC = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<FormErrors>({
    name: false,
    email: false,
    message: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      name: !name,
      email: !email || !emailRegex.test(email),
      message: !message,
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      if (newErrors.name) toast.error(t("messages.name"));
      else if (newErrors.email) toast.error(t("messages.email"));
      else if (newErrors.message) toast.error(t("messages.message"));
      return;
    }

    const currentTime = new Date().toLocaleString();
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "time";
    hiddenInput.value = currentTime;
    formRef.current.appendChild(hiddenInput);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          formRef.current?.reset();
          hiddenInput.remove();
          setErrors({ name: false, email: false, message: false });
          toast.success(t("messages.success"));
        },
        (error) => {
          console.error(error);
          hiddenInput.remove();
          toast.error(t("messages.error"));
        },
      );
  };

  return (
    <section id="get-in-touch" className="py-20 bg-foreground/3">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          <div className={"space-y-1 text-center"}>
            <AnimatedTitle children={t("contact.title")} />
            <p className="text-foreground/70 text-center">
              {t("contact.description")} <br />
              {location.pathname !== "/contact" && (
                <Link to={"/contact"} className={"underline text-ring"}>
                  {t("contact.other")}
                </Link>
              )}
            </p>
          </div>

          <form ref={formRef} className="space-y-6">
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full bg-input px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition ${
                errors.name ? "border-error" : "border-border"
              }`}
              placeholder={t("contact.name")}
            />

            <input
              type="email"
              id="email"
              name="email"
              className={`w-full bg-input px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition ${
                errors.email ? "border-error" : "border-border"
              }`}
              placeholder="Email"
            />

            <textarea
              id="message"
              name="message"
              rows={5}
              className={`w-full bg-input px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition ${
                errors.message ? "border-error" : "border-border"
              }`}
              placeholder={t("contact.message")}
            />

            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={handleSubmit}
            >
              {t("contact.sendMessage")}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
