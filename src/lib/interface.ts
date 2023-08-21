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
  id: number;
  hostData: hostType;
  accompanyData: accompanyType;
}
export interface AccompanyMadeByMeList {
  data: AccompanyMadeByMe[];
}
