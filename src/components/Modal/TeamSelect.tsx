import styled from 'styled-components';

type Props = {};

const TeamSelect = (props: Props) => {
  return (
    <Wrap>
      <Container>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
        <Box>
          <Logo src='public/assets/구단로고.png' />
          <Name>구단 이름</Name>
        </Box>
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  height: 547px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
`;
const Container = styled.div`
  width: 312px;
  padding: 120px 9px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`;
const Box = styled.div`
  width: 140px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
const Name = styled.p`
  font-size: 10px;
  font-weight: bold;
`;
export default TeamSelect;
