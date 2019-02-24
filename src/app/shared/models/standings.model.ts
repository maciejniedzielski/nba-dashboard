export interface StandingTeam {
  teamId: string;
  win: string;
  loss: string;
  winPct: string;
  winPctV2: string;
  lossPct: string;
  lossPctV2: string;
  gamesBehind: string;
  divGamesBehind: string;
  clinchedPlayoffsCode: string;
  clinchedPlayoffsCodeV2: string;
  confRank: string;
  confWin: string;
  confLoss: string;
  divWin: string;
  divLoss: string;
  homeWin: string;
  homeLoss: string;
  awayWin: string;
  awayLoss: string;
  lastTenWin: string;
  lastTenLoss: string;
  streak: string;
  divRank: string;
  isWinStreak: boolean;
  tieBreakerPts: string;
  sortKey: { [key: string]: number };
}