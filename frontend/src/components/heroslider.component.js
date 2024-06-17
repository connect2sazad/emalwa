import React from "react";
import { Link } from "react-router-dom";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

class HeroSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    title: "For All Your Furniture Needs",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.",
                    btn1_name: "Contact Us",
                    btn1_link: "#",
                    btn2_name: "About Us",
                    btn2_link: "#",
                },
                // {
                //     title: "For All My Furniture Needs 2",
                //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.",
                //     btn1_name: "Contact Us",
                //     btn1_link: "#",
                //     btn2_name: "About Us",
                //     btn2_link: "#",
                // },
                // {
                //     title: "For All Their Furniture Needs 3",
                //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.",
                //     btn1_name: "Contact Us",
                //     btn1_link: "#",
                //     btn2_name: "About Us",
                //     btn2_link: "#",
                // }
            ]
        };
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {

        return (
            <section className="slider_section long_section">
                <div id="customCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <Swiper
                            className="mySwiper"
                            loop={true}
                            pagination={{ dynamicBullets: true }}
                            modules={[Pagination, Navigation, EffectFade]}
                            effect={"fade"}
                        >
                            {/* <SwiperSlide><Slide no={1} heading={this.state.slides[0].title}/></SwiperSlide>
                            <SwiperSlide><Slide no={2} heading={this.state.slides[0].title}/></SwiperSlide>
                            <SwiperSlide><Slide no={3} heading={this.state.slides[0].title}/></SwiperSlide> */}
                            {
                                this.state.slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <Slide {...slide} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </section >
        );
    }
}

export default HeroSlider;

const Slide = ({ title, description, btn1_name, btn1_link, btn2_name, btn2_link }) => (
    <div className="carousel-item active">
        <div className="container ">
            <div className="row">
                <div className="col-md-5">
                    <div className="detail-box">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className="btn-box">
                            <Link to={btn1_link} className="btn1">
                                {btn1_name}
                            </Link>
                            <Link to={btn2_link} className="btn2">
                                {btn2_name}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="img-box">
                        <img src={process.env.PUBLIC_URL + 'assets/images/slider-img.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);