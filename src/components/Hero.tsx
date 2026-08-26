"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  ArrowDown,
  Facebook,
  Instagram,
  Heart,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function Hero() {
  const t = useTranslations('Hero');
  const navT = useTranslations('Navbar');

  const slides = [
    {
      titleTop: t('title1_top'),
      titleOutline: t('title1_bottom'),
      desc: t('desc1'),
      bgImage: "/bg-rally.avif",
      bgClass: "bg-top",
      portraitImage: "/portrait.avif",
    },
    /* {
      titleTop: t('title2_top'),
      titleOutline: t('title2_bottom'),
      desc: t('desc2'),
      bgImage: "/bg-neighborhood.avif",
      bgClass: "bg-bottom",
      portraitImage: "/portrait2.avif",
    }, */
  ];

  return (
    <section className="relative h-auto md:h-[calc(100svh-40px)] w-full bg-navy overflow-hidden group/hero">
      <Swiper
        speed={1500}
        parallax={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          type: "fraction",
          formatFractionCurrent: (number: number) => number.toString(),
          formatFractionTotal: (number: number) => number.toString(),
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Navigation, Pagination, Autoplay]}
        className="h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="relative overflow-hidden w-full group flex flex-col md:block"
          >
            {/* Parallax Background */}
            <div
              className={`absolute inset-0 bg-cover ${slide.bgClass || "bg-bottom"}`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-24 w-full flex items-start md:items-center pt-24 md:pt-0 md:h-full relative z-20 pb-8 md:pb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full md:max-w-3xl relative z-30 mt-4 md:mt-0"
              >
                {/* Eyebrow + Title */}
                <div
                  data-swiper-parallax="-300"
                  className="max-md:!transform-none mb-4 md:mb-6"
                >
                  <span className="block text-gold font-display font-bold uppercase tracking-[0.2em] text-[0.65rem] sm:text-xs mb-3 md:mb-4">
                    {t('eyebrow')}
                  </span>
                  <h2 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.15] text-white font-bold capitalize whitespace-nowrap">
                    {slide.titleTop}{" "}
                    <span className="text-white whitespace-nowrap">
                      {slide.titleOutline}
                    </span>
                  </h2>
                </div>
                {/* Description */}
                <div
                  data-swiper-parallax="-400"
                  className="max-md:!transform-none mb-6 md:mb-10"
                >
                  <p className="text-white/90 md:text-white/80 text-sm sm:text-base md:text-xl font-body leading-relaxed max-w-lg md:max-w-xl">
                    {slide.desc}
                  </p>
                </div>
                {/* Buttons */}
                <div
                  data-swiper-parallax="-500"
                  className="max-md:!transform-none flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 md:gap-4"
                >
                  <MagneticButton>
                    <Link
                      href="?modal=join"
                      scroll={false}
                      className="flex justify-center items-center gap-2 bg-white text-navy px-5 md:px-6 py-3 md:py-3.5 font-display font-bold text-xs md:text-sm tracking-widest hover:bg-gold transition-colors duration-300"
                    >
                      <Heart size={16} fill="currentColor" /> {t('join_btn')}
                    </Link>
                  </MagneticButton>
                  <MagneticButton>
                    <Link
                      href="/running"
                      className="flex justify-center items-center gap-2 border border-white/30 text-white px-5 md:px-6 py-3 md:py-3.5 font-display font-medium text-xs md:text-sm tracking-widest hover:bg-white/10 transition-colors duration-300"
                    >
                      <User size={16} /> {t('learn_btn')}
                    </Link>
                  </MagneticButton>
                  <MagneticButton>
                    <Link
                      href="/donate"
                      className="flex justify-center items-center gap-2 bg-gold text-navy px-5 md:px-6 py-3 md:py-3.5 font-display font-bold text-xs md:text-sm tracking-widest hover:bg-white transition-colors duration-300"
                    >
                      {navT('donate')}
                    </Link>
                  </MagneticButton>
                </div>
              </motion.div>
            </div>

            {/* Portrait — in-flow on mobile, absolute on desktop */}
            <div
              className="relative md:absolute md:inset-y-0 md:right-0 md:bottom-16 w-full md:w-auto mt-8 md:mt-0 h-72 sm:h-80 md:h-full z-10 pointer-events-none flex justify-center items-end"
              data-swiper-parallax="20%"
            >
              <motion.img
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                src={slide.portraitImage}
                alt="Muyiwa Ojo"
                className="portrait-img w-full h-full md:w-auto md:h-full max-w-none max-h-full object-cover object-top md:object-contain md:object-right-bottom"
              />
            </div>

            {/* Bottom padding spacer on mobile to clear the bottom bar */}
            <div className="h-16 md:hidden" />

          </SwiperSlide>
        ))}

        {/* Left Social Links */}
        <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-6 items-center">
          <a
            href="https://www.facebook.com/muyiwaojoward22"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-white/50 hover:text-white transition-colors"
          >
            <Facebook size={16} />
          </a>
          <a
            href="https://www.instagram.com/iam_ojo"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-white/50 hover:text-white transition-colors"
          >
            <Instagram size={16} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-14 lg:h-16 border-t border-white/10 bg-navy/60 backdrop-blur-md flex justify-between items-stretch">
          <div className="flex-1 flex items-center justify-center">
            <a
              href="#priorities"
              aria-label="Scroll down to priorities"
              className="flex items-center justify-center w-8 h-10 lg:h-12 border border-white/30 hover:border-white transition-colors group"
            >
              <ArrowDown size={14} className="text-white animate-bounce" />
            </a>
          </div>
        </div>
      </Swiper>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .swiper-pagination-custom {
              position: static;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
            }
            .swiper-pagination-current { color: white; font-weight: bold; }
            .swiper-pagination-total { color: rgba(255,255,255,0.5); font-weight: normal; }

            /* Desktop only: fade from left + bottom */
            @media (min-width: 768px) {
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
            }
          `,
        }}
      />
    </section>
  );
}
