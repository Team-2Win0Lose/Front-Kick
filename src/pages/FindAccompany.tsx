import styled from 'styled-components';
import AccompanyList from '../components/FindAccompany/AccompanyList';
import AccompanyHeader from '../components/FindAccompany/AccompanyHeader';

type props = {};

const FindAccompany = (props: props) => {
  return (
    <Form>
      <AccompanyHeader />
      <AccompanyList />
    </Form>
  );
};

export default FindAccompany;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
