import { ReactNode } from "react";

type Dictionary<TKey extends string | number | symbol, TValue extends string | number | symbol> = {
  [key in TKey]: TValue;
};

export default Dictionary;
// https://qiita.com/yoshi-maru/items/f0245ea25b5848305de4

export type SnsLink = {
  title: string;
  link: string;
  icon: ReactNode;
};