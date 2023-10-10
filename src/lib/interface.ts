import { itemsProps } from '@/components/CreateRoom/Step/SelectCard/PlaceInfoCarousel';
import { PinkType } from '@/components/HashTag/FilterBox';

export interface GetTeamType {
  teamName: string;
  teamImg: string;
  teamGrade: number;
  teamStadium: string;
  location: string;
  teamCardOwner: string;
  totalMatching: string;
  currentMatching: number;
  follower: number;
}
export interface GetTeamList {
  data: GetTeamType[];
}

export interface hostType {
  hostName: string;
  hostAge: string;
  hostGender: string;
}
export interface accompanyType {
  closedDate: string;
  startDate: string;
  endDate: string;
  nowStatus: string;
  title: string;
  meetingPlace: string;
  nowHeadCount: number;
  totalHeadCount: number;
  tags: string[];
}
export interface AccompanyMadeByMe {
  date: string;
  closeDate: string;
  title: string;
  nowStatus: string;
  closedDate: string;
  meetingPlace: string;
  tag: any;
  nowHeadCount: string;
  maxNum: string;
  host: string;
  id: number;
  hostData: hostType;
  accompanyData: accompanyType;
}
export interface AccompanyMadeByMeList {
  data: AccompanyMadeByMe[];
}

export interface AccompanyPost {
  id: number;
  host: string;
  img: string;
  //제목
  title: string;
  //매치정보(날짜, 경기장, 홈 이름, 어웨이 이름)
  date: string;
  stadium: string;
  homename: string;
  awayname: string;
  //모임정보(장소, 세부장소, 동행기간, 태그, 최소 인원, 최대 인원)
  meetingPlace: string;
  meetingPlaceAddress: string;
  detailMeetingPlace: string;
  term: string;
  tag: PinkType[];
  minNum: number;
  maxNum: number;
  //내용
  content: string;
  house: itemsProps[];
  food: itemsProps[];
  attraction: itemsProps[];
  nowStatus: string;
}

export interface AccommandPost {
  data: AccompanyPost;
}

export interface Profile {
  profile: {
    name: string;
    email: string;
    nickname: string;
    profileImg: string;
    cheering_team_id: number;
  };
  cheering_team: {
    follower: number;
    logo_img_url: string;
    original_team_name: string;
    recruit_end: number;
    recruit_ing: number;
    team_color_main: string;
    team_color_sub: string;
  };
}
