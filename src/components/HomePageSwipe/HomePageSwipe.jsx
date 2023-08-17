import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./HomePageSwipe.css";
import { EffectCards, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

const HomePageSwipe = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide className="bg-black font-poppins">
          <Fade className="text-white" delay={1e3} cascade damping={1e-2}>
            <div className="mx-4">
              <strong>Passed (80%)</strong>
              <ul className="text-xs my-2">
                <li className="mb-2">
                  Successful Achievement:{" "}
                  <span className="font-normal">
                    The majority of individuals have met the requirements and
                    successfully completed the task, exam, or goal.
                  </span>
                </li>
                <li className="mb-2">
                  Demonstrated Competence:{" "}
                  <span className="font-normal">
                    Those falling within this category have shown a level of
                    understanding and proficiency necessary for a positive
                    outcome.
                  </span>
                </li>
                <li className="mb-2">
                  Accomplished Performance:{" "}
                  <span className="font-normal">
                    This group has performed at a level that meets the
                    established criteria for success, indicating their
                    capability and effort.
                  </span>
                </li>
              </ul>
            </div>
          </Fade>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="bg-black font-poppins">
          <Fade className="text-white" delay={1e3} cascade damping={1e-2}>
            <div className="mx-4">
              <strong>Failed (15%)</strong>
              <ul className="text-xs my-2">
                <li className="mb-2">
                  Unsuccessful Outcome:{" "}
                  <span className="font-normal">
                    These individuals did not meet the necessary standards or
                    requirements for passing, indicating areas that need
                    improvement.
                  </span>
                </li>
                <li className="mb-2">
                  Opportunity for Growth:{" "}
                  <span className="font-normal">
                    Failing provides a chance to identify weaknesses and work on
                    them, ultimately leading to improvement in the future.
                  </span>
                </li>
                <li className="mb-2">
                  Learning Experience:{" "}
                  <span className="font-normal">
                    Failure is a valuable lesson, offering insights and
                    motivating individuals to strive for better results in
                    subsequent attempts.
                  </span>
                </li>
              </ul>
            </div>
          </Fade>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="bg-black font-poppins">
          <Fade className="text-white" delay={1e3} cascade damping={1e-2}>
            <div className="mx-4">
              <strong>A+ (5%)</strong>
              <ul className="text-xs my-2">
                <li className="mb-2">
                  Outstanding Achievement:{" "}
                  <span className="font-normal">
                    {" "}
                    The top tier, indicating exceptional performance that goes
                    beyond the standard expectations, often reflecting a high
                    level of dedication and skill.
                  </span>
                </li>
                <li className="mb-2">
                  Exemplary Work:{" "}
                  <span className="font-normal">
                    This group has demonstrated exceptional understanding and
                    application of the subject matter, setting a benchmark for
                    others.
                  </span>
                </li>
                <li className="mb-2">
                  Recognized Excellence{" "}
                  <span className="font-normal">
                    Earning an A+ recognizes individuals for their dedication,
                    hard work, and mastery of the material, setting them apart
                    from the rest.
                  </span>
                </li>
              </ul>
            </div>
          </Fade>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomePageSwipe;
