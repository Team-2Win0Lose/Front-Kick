import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import TeamDateSelect from './MatchDate/TeamDateSelect';
import PlaceSearch from './MeetingPlace/PlaceSearch';
import Detailinfo_1 from './Detailinfo/Detailinfo_1';
import Detailinfo_2 from './Detailinfo/Detailinfo_2';
import Summary from './Summary/Summary';
import SelectCard from './SelectCard/SelectCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { getCookie } from '@/util/cookieFn';
const token = getCookie('token');
const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json;charset=utf-8',
};
type Props = {};
import { removeAll } from '@/feature/SelectedItemsSlice';
import { removeSummary } from '@/feature/SummarySlice';
const StepHeader = () => {
  const [check, setcheck] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titles = [
    '경기 일정 선택',
    '모임장소',
    '일정 카드 선택',
    '상세 내용',
    '상세 내용',
    '내 동행 일정',
  ];
  // const host = useSelector((state: RootState) => state.auth.name);
  // const {
  //   img,
  //   title,
  //   date,
  //   stadium,
  //   homename,
  //   awayname,
  //   meetingPlace,
  //   meetingPlaceAddress,
  //   detailMeetingPlace,
  //   term,
  //   tag,
  //   minNum,
  //   maxNum,
  //   content,
  // } = useSelector((state: RootState) => state.summary);
  // const { house, food, attraction } = useSelector(
  //   (state: RootState) => state.selecteditem,
  // );

  const [titleIndex, setTitleIndex] = useState(0);
  const id = useSelector((state: RootState) => state.auth.id);

  const handleBackClick = () => {
    if (titleIndex > 0) {
      setTitleIndex((prevIndex) => prevIndex - 1);
    }
  };
  const requestBody = {
    host_id: useSelector((state: RootState) => state.auth.id),
    meeting_place: useSelector(
      (state: RootState) => state.summary.meetingPlace,
    ),
    meeting_place_address: useSelector(
      (state: RootState) => state.summary.meetingPlaceAddress,
    ),
    detail_meeting_place: useSelector(
      (state: RootState) => state.summary.detailMeetingPlace,
    ),
    term: useSelector((state: RootState) => state.summary.term),
    min_num: useSelector((state: RootState) => state.summary.minNum),
    max_num: useSelector((state: RootState) => state.summary.maxNum),
    now_status: 1,
    now_head_count: 3,
  };
  const postAccompany = useCallback(async () => {
    try {
      const res = await fetch(
        `https://kick-back.azurewebsites.net/api/recruitments/?id=${id}`,
        {
          method: 'post',
          headers: headers,
          body: JSON.stringify(requestBody),
        },
      );
      const data = await res.json();
      console.log(data);
    } catch (Error) {
      console.error(Error);
    }
  }, []);
  useEffect(() => {
    postAccompany();
  }, [check, postAccompany]);
  const handleNextClick = async () => {
    if (titleIndex < titles.length - 1) {
      setTitleIndex((prevIndex) => prevIndex + 1);
    } else if (titleIndex === titles.length - 1) {
      setcheck(true);
      // if (res !== undefined) {
      //   dispatch(removeAll());
      //   dispatch(removeSummary());
      // }

      // navigate('/myaccompany');
    }
  };

  const nextButtonText = titleIndex === 5 ? '완료' : '다음';

  let CurrentStepComponent = null;

  switch (titleIndex) {
    case 0:
      CurrentStepComponent = TeamDateSelect;
      break;
    case 1:
      CurrentStepComponent = PlaceSearch;
      break;
    case 2:
      CurrentStepComponent = SelectCard;
      break;
    case 3:
      CurrentStepComponent = Detailinfo_1;
      break;
    case 4:
      CurrentStepComponent = Detailinfo_2;
      break;
    case 5:
      CurrentStepComponent = Summary;
      break;
    default:
      CurrentStepComponent = TeamDateSelect;
  }

  return (
    <Wrap>
      <DIV>
        <BackIcon onClick={handleBackClick} />
        <RoomTitle>{titles[titleIndex]}</RoomTitle>
        <CloseIcon onClick={() => navigate('/')} />
      </DIV>
      <Form>
        <CurrentStepComponent></CurrentStepComponent>
      </Form>
      <NextButtonContainer>
        <RegisterBtn onClick={handleNextClick}>{nextButtonText}</RegisterBtn>
      </NextButtonContainer>
    </Wrap>
  );
};

export default StepHeader;

const RoomTitle = styled.h1`
  display: flex;
  color: #000;
  font-size: 30px;
  font-weight: bold;
`;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Wrap = styled.div`
  font-weight: bold;
  background-color: #ffffff;
`;

const BackIcon = styled(IoIosArrowBack)`
  width: 30px;
  height: 30px;
  color: #000000;
`;

const CloseIcon = styled(AiOutlineClose)`
  width: 40px;
  height: 40px;
  color: #000000;
  justify-content: right;
  align-items: right;
`;

const Form = styled.div`
  display: flex;
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RegisterBtn = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #ffffff;
`;
