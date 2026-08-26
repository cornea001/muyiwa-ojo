"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/parallax";

export default function HeroOG() {
  const t = useTranslations('Hero');

  const slides = [
    {
      titleTop: t('title1_top'),
      titleOutline: t('title1_bottom'),
      desc: t('desc1'),
      bgImage: "/bg-rally.avif",
      bgClass: "bg-top",
      portraitImage: "/portrait.avif",
    },
  ];

  return (
    <section className="relative h-[calc(100svh-40px)] w-full bg-navy overflow-hidden">
      <Swiper
        speed={1500}
        parallax={true}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Parallax, Autoplay]}
        className="h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="relative overflow-hidden w-full group"
          >
            {/* Parallax Background */}
            <div
              className={`absolute inset-0 bg-cover ${slide.bgClass || "bg-bottom"}`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
            </div>

            {/* Portrait */}
            <div
              className="absolute bottom-0 right-0 z-10 pointer-events-none"
              style={{ width: "630px", height: "100%" }}
              data-swiper-parallax="20%"
            >
              <motion.img
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                src={slide.portraitImage}
                alt="Muyiwa Ojo"
                className="portrait-img w-full h-full object-cover object-[center_20%]"
              />
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-12 h-full flex items-center relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-3xl relative z-30"
              >
                {/* Eyebrow + Title */}
                <div data-swiper-parallax="-300" className="mb-8">
                  <span className="block text-gold font-display font-bold uppercase tracking-[0.2em] text-base mb-5">
                    {t('eyebrow')}
                  </span>
                  <h2 className="font-display text-[clamp(3.5rem,9vw,6rem)] leading-[1.1] text-white font-bold capitalize whitespace-nowrap">
                    {slide.titleTop}{" "}
                    <span className="text-white whitespace-nowrap">
                      {slide.titleOutline}
                    </span>
                  </h2>
                </div>

                {/* Description */}
                <div data-swiper-parallax="-400">
                  <p className="text-white/80 text-2xl font-body leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .portrait-img {
              -webkit-mask-image:
                linear-gradient(to right, transparent 0%, black 35%),
                linear-gradient(to top, transparent 0%, black 15%);
              -webkit-mask-composite: destination-in;
              mask-image:
                linear-gradient(to right, transparent 0%, black 35%),
                linear-gradient(to top, transparent 0%, black 15%);
              mask-composite: intersect;
            }
          `,
        }}
      />
    </section>
  );
}
