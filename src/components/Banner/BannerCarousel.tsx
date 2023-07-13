import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerCarousel = () => {
    const settings = {
        dots: true,
        autoplay: true,
        Infinite: true,
        slidesToshow: 1,
        slidesToscroll: 1,
        swipeToslide: true,
        autoplaySpeed:3000,
        speed: 500
    }
  
    return (
        <div className="carousel">
            <Slider {...settings}>
                <Box>
                    <IMG src='/assets/banner3.png' alt='logo'/>
                </Box>
                <Box>
                    <IMG src='/assets/banner2.svg' alt='logo2'/>
                </Box>
                <Box>
                    <IMG src='/assets/banner.svg' alt='logo'/>
                </Box>

            </Slider>
        </div>
    );
}

export default BannerCarousel;

const Box = styled.div`
  width: 100%;
  height: 365px;
`;

const IMG = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50px;
  justify-content:center;
  align-items:center;
  
`;