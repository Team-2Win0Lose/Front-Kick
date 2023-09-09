import styled from 'styled-components';
import MatchInfo from './Accompany/MatchInfo';
import ContentInfo from './Accompany/ContentInfo';
import DetailInfo from './Accompany/DetailInfo';
type Props = {
  postId: number;
};

const Accompany = (props: Props) => {
  return (
    <Container>
      <MatchInfo />
      <ContentInfo />
      <DetailInfo postId={props.postId} />
    </Container>
  );
};

const Container = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-radius: 12px;
`;
export default Accompany;
