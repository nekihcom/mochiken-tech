import { Oswald, BIZ_UDPGothic } from "next/font/google";

const oswald = Oswald({
  weight: "700",
  subsets: ["latin"]
});
export const oswaldFontFamily:string = oswald.style.fontFamily;

const biz_udpgothic = BIZ_UDPGothic({
  weight: "400",
  subsets: ["latin"]
});
export const bizFontFamily:string = biz_udpgothic.style.fontFamily;

const biz_udpgothic_bold = BIZ_UDPGothic({
  weight:"700",
  subsets: ["latin"]
});
export const bizBoldClassName:string = biz_udpgothic_bold.className;