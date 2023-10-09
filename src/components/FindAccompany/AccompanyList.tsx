import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Accompany from './Accompany';
import AccompanyBox from '../MyAccompany/AccompanyBox';
import { AccompanyMadeByMe, AccompanyMadeByMeList } from '@/lib/interface';
import { getAllAccompany, getMyAccompany2 } from '@/lib/api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { getCookie } from '@/util/cookieFn';
const token = getCookie('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
type Props = {};

const AccompanyList = (props: Props) => {
  const navigate = useNavigate();
  const id = useSelector((state: RootState) => state.auth.id);
  const [accompanyList, setaccompanyList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/recruitments/?id=${id}`, {
          method: 'get',
          headers: headers,
        });
        const data = await res.json();
        setaccompanyList(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);
  console.log(accompanyList);

  return (
    <ListContainer>
      {/* {accompanyList?.data.map((post: AccompanyMadeByMe) => (
        <div
          key={post.id}
          onClick={() => navigate(`/findaccompany/detail/${post.id}`)}
        >
          <AccompanyBox boxdata={post} />
        </div>
      ))} */}
    </ListContainer>
  );
};
const ListContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`;
export default AccompanyList;
