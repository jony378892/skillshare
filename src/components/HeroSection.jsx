import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import studyImg from "../assets/Online learning-cuate.png";
import yogaImg from "../assets/Meditation-amico.png";
import cookingImg from "../assets/Cooking-cuate.png";

export default function HeroSection() {
  return (
    <section className="pb-10 pt-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={40}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {/* Slide 1 - Skill Exchange Overview */}
        <SwiperSlide>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Learn, Teach, and Grow — Together.
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                SkillSwap is an interactive community where people offer, learn,
                and exchange skills within their local area. Whether it’s
                coding, photography, guitar lessons, or yoga — connect with
                passionate learners and providers near you.
              </p>
            </div>
            <img
              src={studyImg}
              alt="Online Learning"
              className="w-full lg:w-5/12 max-w-sm mx-auto"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 - Yoga / Wellness */}
        <SwiperSlide>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Share Your Skills, Inspire Others.
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                Have a talent to share? From yoga sessions to art workshops,
                SkillSwap helps you reach local learners who want to grow. Teach
                what you love, build your reputation, and earn recognition
                through community ratings.
              </p>
            </div>
            <img
              src={yogaImg}
              alt="Yoga Class"
              className="w-full lg:w-5/12 max-w-sm mx-auto"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 - Community & Cooking */}
        <SwiperSlide>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Discover, Connect, and Exchange Locally.
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                Our platform bridges skill-seekers and providers in your
                neighborhood. Trade lessons, learn something new, or just
                connect with creative people around you. Growth starts with
                sharing — and we make that easy.
              </p>
            </div>
            <img
              src={cookingImg}
              alt="Cooking Together"
              className="w-full lg:w-4/12 max-w-sm mx-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
