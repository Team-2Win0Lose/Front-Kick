import { getMyAccompany } from '@/lib/api';
import { AccompanyMadeByMeList, AccompanyMadeByMe } from '@/lib/interface';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AccompanyBox from './AccompanyBox';
type Props = {};

const MadeByMe = (props: Props) => {
  const [accompanyList, setaccompanyList] = useState<AccompanyMadeByMeList>();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMyAccompany(123);
        setaccompanyList(response);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);
  console.log(accompanyList);

  return (
    <Wrap>
      <Container>
        {accompanyList?.data.map((post: AccompanyMadeByMe, idx) => (
          <AccompanyBox key={idx} boxdata={post} />
        ))}
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div``;
const Container = styled.div``;
export default MadeByMe;
