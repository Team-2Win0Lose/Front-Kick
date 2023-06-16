import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TeamCardCarousel = () => {
    const settings = {
        dots: false,
        autoplay: true,
        Infinite: true,
        slidesToshow: 4,
        slidesToscroll: 1,
        swipeToslide: true,
        autoplaySpeed:3000,
        speed: 500
    }
  
    return (
        <div className="carousel">
            
            <Slider {...settings}>
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

export default TeamCardCarousel;

const Box = styled.div`
  width: 200%;
  height: 30vh;

  margin-top: 50px;
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
`;
