// Swiper
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Container } from "react-bootstrap";
import "./topRated.css";
import { useEffect, useState } from "react";
import { AiFillHeart, AiTwotoneStar } from "react-icons/ai";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../loading/Loading";
import Error from "../../error/Error";
import { IMG_URL } from "../../URL";
import { Link } from "react-router-dom";
import { fetchTopRated } from "../../store/slices/topRatedSlice";
import Love from "./../../movieCard/Love";

const TopRated = () => {
  // Swiper
  const [swiper, setSwiper] = useState(null);

  //   Data
  const state = useSelector((state) => state.topRated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRated());
  }, []);

  const handelImgClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-rated py-5 px-1">
      <Container>
        <h3 className="text-white mb-5 mt-2">Top Rated</h3>
        {state.loading && <Loading />}
        {state.error && !state.loading ? (
          <Error msg={state.error} height={50} />
        ) : (
          <>
            <Swiper
              breakpoints={{
                "@0.50": { slidesPerView: 1 },
                "@1.00": { slidesPerView: 2 },
                "@1.50": { slidesPerView: 3 },
                "@2.00": { slidesPerView: 4 },
              }}
              spaceBetween={30}
              direction="horizontal"
              loop={true}
              speed={800}
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              onSwiper={(swiper) => setSwiper(swiper)}
            >
              {state.data &&
                state.data.slice(12, 22).map((movie, index) => (
                  <SwiperSlide
                    key={index}
                    className="rounded bg-blue position-relative"
                  >
                    <img
                      src={IMG_URL + movie.poster_path}
                      alt={movie.original_title}
                      className="w-100 h-100 rounded"
                    />

                    <div className="info flex-center flex-column ">
                      <Love movie={movie} />

                      <Link to={`/MovielixReactApp/movies/${movie.id}`}>
                        <h5
                          onClick={handelImgClick}
                          className="text-white mt-4 mb-3"
                        >
                          {movie.original_title.length > 25
                            ? movie.original_title.slice(0, 25) + "...."
                            : movie.original_title}
                        </h5>
                      </Link>

                      <div className="stars">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="btns flex-center gap-3 mt-5">
              <BsArrowLeftSquareFill
                className="fs-2 text-red"
                onClick={() => swiper.slidePrev()}
              />
              <BsArrowRightSquareFill
                className="fs-2 text-red"
                onClick={() => swiper.slideNext()}
              />
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default TopRated;
