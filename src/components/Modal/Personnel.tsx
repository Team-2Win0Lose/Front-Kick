import styled from 'styled-components';
type Props = {};

const Personnel = (props: Props) => {
  return (
    <Container>
      <Box>
        <InputDIV>
          <Person></Person>
          <INPUT />
        </InputDIV>
      </Box>
    </Container>
  );
};
const Container = styled.div``;
const Box = styled.div``;
const Person = styled.div``;
const InputDIV = styled.div``;
const INPUT = styled.div``;
export default Personnel;
