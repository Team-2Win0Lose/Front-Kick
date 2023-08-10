export interface GetTeamType {
  teamName: string;
  teamImg: string;
  teamGrade: string;
  teamStadium: string;
  location: string;
  teamCardOwner: string;
  totalMatching: string;
}
export interface GetTeamList {
  data: GetTeamType[];
}
