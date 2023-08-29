import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
    //대표 이미지
    img:string;
    //제목
    title:string;
    //매치정보(날짜, 경기장, 홈 이름, 어웨이 이름)
    date:string;
    stadium:string;
    homename:string;
    awayname:string;
    //모임정보(장소, 세부장소, 동행기간, 태그, 최소 인원, 최대 인원)
    meetingPlace:string;
    detailMeetingPlace:string;
    term:string;
    tag:string[];
    minNum:number;
    maxNum:number;
    //내용
    content:string;
};

const initialState: InitialState = {
    //대표 이미지
    img:'',
    //제목
    title:'',
    //매치정보(날짜, 경기장, 홈 이름, 어웨이 이름)
    date:'',
    stadium:'',
    homename:'',
    awayname:'',
    //모임정보(장소, 세부장소, 동행기간, 태그, 최소 인원, 최대 인원)
    meetingPlace:'',
    detailMeetingPlace:'',
    term:'',
    tag:[],
    minNum:0,
    maxNum:0,
    //내용
    content:'',
};


const SummarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
      setMatch: (state: InitialState, action) => {
        state.date = action.payload.date;
        state.stadium = action.payload.stadium;
        state.homename = action.payload.homename;
        state.awayname = action.payload.awayname;
      },
      setPlace: (state: InitialState, action) => {
        state.meetingPlace = action.payload.meetingPlace;
        state.detailMeetingPlace = action.payload.detailMeetingPlace;
      },
      setDetail1: (state: InitialState, action) => {
        state.minNum = action.payload.minNum;
        state.maxNum = action.payload.maxNum;
        state.term = action.payload.term;
      },
      setDetail2: (state: InitialState, action) => {
        state.img = action.payload.img;
        state.title = action.payload.title;
        state.content = action.payload.content;
      },
    },
  });

export default SummarySlice.reducer;
export const { setMatch, setPlace, setDetail1, setDetail2 } = SummarySlice.actions;