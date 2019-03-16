export interface Team {
  altCityName: string;
  city: string;
  confName:string;
  divName: string;
  fullName: string;
  isAllStar: boolean
  isNBAFranchise: boolean
  nickname: string;
  teamId: string;
  tricode: string;
  urlName: string;
}

export interface TeamConfig {
  teamId: string,
  tricode: string,
  ttsName: string,
  primaryColor: string,
  secondaryColor: string,
  app: {
      android: string,
      androidDeepLink: string,
      ios: string,
      iosDeepLink: string,
      tickets: string
  },
  web: {
      homepage: string,
      tickets: string
  }
}