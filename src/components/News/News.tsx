import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewsForm from './NewsForm';
import { dummyNews } from '../../../public/dummy/dummyNews';
type Props = {};

const News = (props: Props) => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: 'linear',
  };
  return (
    <Wrap>
      <ComponentTitle>K리그 뉴스</ComponentTitle>
      <CustomSlider {...settings}>
        {dummyNews?.map((news, index) => (
          <NewsForm
            key={index}
            newsTitle={news.newsTitle}
            newsContent={news.newsContent}
            newsImg={news.newsImg}
          />
        ))}
      </CustomSlider>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
  gap: 10px;
`;
const ComponentTitle = styled.h1`
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    box-sizing: border-box;
    padding: 0 4px;
  }
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
`;
export default News;
