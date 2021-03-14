export type Color =
  | "transparent"
  | "current"
  | "black"
  | "white"
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export type Category = {
  readonly id: number;
  readonly category: string;
};

export type CategoryObject = {
  readonly id: string;
  readonly value: string;
  readonly category: string;
};

export type RandomObject = {
  readonly id: string;
  readonly categories: readonly string[];
  readonly created_at: string;
  readonly icon_url: string;
  readonly url: string;
  readonly value: string;
};
