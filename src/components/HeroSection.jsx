import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import studyImg from "../assets/Online learning-cuate.png";
import yogaImg from "../assets/Meditation-amico.png";
import cookingImg from "../assets/Cooking-cuate.png";

export default function HeroSection() {
  return (
    <section className="pb-10 pt-5">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        loop={true}
      >
        <SwiperSlide>
          <div className="flex flex-col-reverse sm:flex-row gap-5 items-center">
            <div className="xl:w-1/2 px-5 xl:px-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
                Bring Tutoring Right to Your Home.
              </h2>
              <p className=" text-gray-700 leading-relaxed">
                Learning has never been easier. With our platform, you can
                connect with expert tutors who specialize in subjects ranging
                from mathematics and science to arts and languages. Each tutor
                offers a personalized approach to fit your goals and schedule,
                ensuring that your learning experience is both effective and
                engaging.
              </p>
            </div>
            <img
              src={studyImg}
              alt="Online Learning"
              className="w-full sm:w-1/2 lg:w-5/12"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col-reverse sm:flex-row gap-5 items-center justify-center">
            <div className="xl:w-1/2 px-5 xl:px-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
                Find Your Balance with Local Yoga Classes.
              </h2>
              <p className=" text-gray-700 leading-relaxed">
                Reconnect your mind and body with yoga sessions tailored to your
                needs. Whether you're a beginner exploring meditation and
                breathing techniques, or an advanced practitioner aiming to
                refine your poses, our community of certified instructors is
                here to guide you. Join local sessions, make new friends.
              </p>
            </div>
            <img
              src={yogaImg}
              alt="Yoga Class"
              className="w-full sm:w-1/2 lg:w-5/12"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col-reverse sm:flex-row gap-5 items-center justify-center">
            <div className="xl:w-1/2 px-5 xl:px-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
                Discover the Joy of Cooking Together.
              </h2>
              <p className=" text-gray-700 leading-relaxed">
                Food brings people together — and now, you can learn from some
                of the best local chefs and passionate home cooks. Explore
                cuisines from around the world, master cooking techniques, and
                understand the art of blending flavors. Whether you’re learning
                to cook your first meal or refining your culinary craft.
              </p>
            </div>
            <img
              src={cookingImg}
              alt="Cooking Together"
              className="w-full sm:w-1/2 lg:w-4/12"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
