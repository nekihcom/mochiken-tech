import Image from "next/image";
import { Grid2, ListItem, Typography } from "@mui/material";

import PrimaryButton from "@/components/atoms/PrimaryButton";
import { bizFontFamily } from "@/data/fonts";


type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  path: string;
}
const WorkCard = (props:Props) => {
  const { id, image, title, description, path } = props;
  return (
    <ListItem key={id} sx={{width:{md:900}, py: 8, px: 4}}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* 左カラム (画像) */}
        <Grid2 size={{xs:12, md:6}}>
          <Image src={image} alt={title} width={800} height={600} />
        </Grid2>

        {/* 右カラム (テキスト + ボタン) */}
        <Grid2 size={{xs:12, md:6}}>
          <Typography variant="h4" component="h2" sx={{ fontFamily:bizFontFamily, fontWeight: "bold" }}>{title}</Typography>
          <Typography variant="body1" sx={{ fontFamily:bizFontFamily, mt: 2 }}>{description}</Typography>
          <PrimaryButton href={path} label={'詳細を見る'} isTarget="_blank" />
        </Grid2>
      </Grid2>
    </ListItem>
  );
};

export default WorkCard;