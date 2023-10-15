import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  handleAccompanyComponent: (number: number) => void;
};
interface PageProps {
  page: number;
}
const ComponentSelectMenu = (props: Props) => {
  const [componentPage, setcomponentPage] = useState<number>(1);
  return (
    <Container>
      <Box1
        page={componentPage}
        onClick={() => {
          setcomponentPage(1), props.handleAccompanyComponent(1);
        }}
      >
        <Text>내가 모집한 동행</Text>
      </Box1>
      <Box2
        page={componentPage}
        onClick={() => {
          setcomponentPage(2), props.handleAccompanyComponent(2);
        }}
      >
        <Text>내가 신청한 동행</Text>
      </Box2>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  padding: 2px 3px;
`;
const Box1 = styled.div<PageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${(props) => (props.page === 1 ? '#fff' : '#d9d9d9')};
`;
const Box2 = styled.div<PageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${(props) => (props.page === 1 ? '#d9d9d9' : '#fff')};
`;
const Text = styled.p`
  color: black;
  font-weight: bold;
  font-size: 14px;
`;
export default ComponentSelectMenu;
