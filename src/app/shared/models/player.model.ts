export interface Player {
  firstName: string;
  lastName: string;
  jersey: number;
  pos: string;
  posExpanded: string;
  heightFeet: number;
  heightInches: number;
  weightPounds: number;
  personId: number;
  teamData: {
    urlName: string;
    city: string;
    nickname: string;
    tricode: string;
  },
  isAllStar: boolean;
  orderChar: string;
  playerUrl: string;
  displayName: string;
}