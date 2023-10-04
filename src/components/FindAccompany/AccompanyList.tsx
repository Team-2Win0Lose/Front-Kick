import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Accompany from './Accompany';
import AccompanyBox from '../MyAccompany/AccompanyBox';
import { AccompanyMadeByMe, AccompanyMadeByMeList } from '@/lib/interface';
import { getMyAccompany2 } from '@/lib/api';
import { useNavigate } from 'react-router-dom';
type Props = {};

const AccompanyList = (props: Props) => {
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
    <ListContainer>
      {accompanyList?.data.map((post: AccompanyMadeByMe) => (
        <div
          key={post.id}
          onClick={() => navigate(`/findaccompany/detail/${post.id}`)}
        >
          <AccompanyBox boxdata={post} />
        </div>
      ))}
    </ListContainer>
  );
};
const ListContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 10px;
`;
export default AccompanyList;
