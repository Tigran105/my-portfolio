import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "../../components/ui/Button";
import { fadeInLeft } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import { Link } from "react-router-dom";

export const GetInTouch: React.FC = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

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
          alert("Message sent successfully 🚀");
          formRef.current?.reset();
          hiddenInput.remove();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong 😢");
          hiddenInput.remove();
        },
      );
  };

  return (
    <section id="get-in-touch" className="py-20 bg-foreground/3">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gradient text-center">
              {t("contact.title")}
            </h2>
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
            <div>
              {/*<label*/}
              {/*  htmlFor="name"*/}
              {/*  className="block text-sm font-medium text-foreground mb-2"*/}
              {/*>*/}
              {/*  {t("contact.name")}*/}
              {/*</label>*/}
              <input
                type="text"
                id="name"
                name={"name"}
                className="w-full px-4 py-3 border border-border bg-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition"
                placeholder={t("contact.name")}
              />
            </div>

            <div>
              {/*<label*/}
              {/*  htmlFor="email"*/}
              {/*  className="block text-sm font-medium text-foreground mb-2"*/}
              {/*>*/}
              {/*  {t("contact.email")}*/}
              {/*</label>*/}
              <input
                type="email"
                id="email"
                name={"email"}
                className="w-full px-4 py-3 border border-border bg-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              {/*<label*/}
              {/*  htmlFor="message"*/}
              {/*  className="block text-sm font-medium text-foreground mb-2"*/}
              {/*>*/}
              {/*  {t("contact.message")}*/}
              {/*</label>*/}
              <textarea
                id="message"
                name={"message"}
                rows={5}
                className="w-full px-4 py-3 border border-border bg-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition"
                placeholder={t("contact.message")}
              ></textarea>
            </div>

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
