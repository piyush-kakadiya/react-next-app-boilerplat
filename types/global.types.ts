export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export interface CollectibleItemProps {
  title: string;
  subTitle: string;
};

export interface TransactionItemProps {
  title: string;
  subTitle: string;
  timeLine: string;
  isIncoming?: boolean;
};

export interface HeaderProps {
  isBack?: boolean;
};

export interface Transaction {
  id: number,
  title: string,
  subTitle: string,
  time: string,
  send?: boolean,
  receiced?: boolean,
};

export interface Collection {
  id: number,
  title: string,
  subTitle: string,
};