import { bizFontFamily } from "@/data/fonts";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid2, Link, Typography } from "@mui/material";

type Props = {
  image: string;
  path: string;
  title: string;
  source: string;
  date: string;
};

const ArticleCard = (props:Props) => {
  const { image, path, title, source, date} = props;
  return (
    <Grid2
      size={{xs:12, sm:6, md:4}}
      sx={{display:'flex', justifyContent:'center'}}
    >
      <Card sx={{maxWidth:373}}>
        <CardActionArea>
          <Link href={path} className="!no-underline !text-black">
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                height:'80px',
              }}>
                <Typography component={'h3'} sx={{fontFamily:bizFontFamily, fontWeight:700}}>{title}</Typography>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                  <Typography component={'p'} sx={{fontFamily:bizFontFamily}}>{source}</Typography>
                  <Typography component={'p'} sx={{fontFamily:bizFontFamily}}>{date}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid2>
  );
}
export default ArticleCard;