import { getMyAccompany2 } from '@/lib/api';
import { AccompanyMadeByMeList, AccompanyMadeByMe } from '@/lib/interface';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AccompanyBox from './AccompanyBox';
import { useNavigate } from 'react-router-dom';
type Props = {};

const ApplyForMe = (props: Props) => {
  const navigate = useNavigate();
  const [accompanyList, setaccompanyList] = useState<AccompanyMadeByMeList>();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMyAccompany2(123);
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
        {/* {accompanyList?.data.map((post: AccompanyMadeByMe) => (
          <div
            key={post.id}
            onClick={() => navigate(`/myaccompany/manage/${post.id}`)}
          >
            <AccompanyBox boxdata={post} />
          </div>
        ))} */}
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100%;
`;
const Container = styled.div`
  margin: 0 auto;
`;
export default ApplyForMe;
