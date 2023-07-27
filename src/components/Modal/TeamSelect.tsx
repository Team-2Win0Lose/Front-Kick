import styled from 'styled-components';

type Props = {};

const TeamSelect = (props: Props) => {
  return (
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
  );
};
const Container = styled.div`
  width: 312px;
  padding: 13px 9px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`;
const Box = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
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
