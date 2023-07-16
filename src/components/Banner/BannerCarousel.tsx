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
                    <CenteredContent>
                    <IMG src='/assets/banner5.png' alt='logo'/>
                    </CenteredContent>
                </Box>
                <Box>
                    <CenteredContent>
                    <IMG src='/assets/banner4.png' alt='logo'/>
                    </CenteredContent>
                </Box>
                <Box>
                    <CenteredContent>
                    <IMG src='/assets/banner5.png' alt='logo'/>
                    </CenteredContent>
                </Box>

            </Slider>
        </div>
    );
}

export default BannerCarousel;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredContent = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 20px;
`;