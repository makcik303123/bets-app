export type BetSlip = {
  amount: number;
  betWin: null | number;
  event: string;
  firstTeam: string;
  gameFinished: false;
  gameStarted: false;
  id: string;
  matchId: number;
  multiplayer: number;
  secondTeam: string;
  teamWinner: string;
};

export type ActiveBets = {
  amount: number;
  event: string;
  firstTeam: string;
  id: string;
  matchId: number;
  multiplayer: number;
  secondTeam: string;
  teamWinner: string;
};

export type historyBetsList = {
  active: ActiveBets[];
  completed: ActiveBets[];
};

export type User = {
  BetSlipList: BetSlip[];
  activeValue: number;
  balance: number;
  createTime: number;
  email: string;
  historyBetsList: historyBetsList;
  password: string;
  status: boolean;
};
