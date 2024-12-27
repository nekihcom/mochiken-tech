import { FC, memo } from "react";

import { Button, Card, CardActions, CardContent, CardMedia, List, ListItem, Typography } from "@mui/material";

import { h1Style } from "@/styles/style";

const ProjectsTitleStyle = { ...h1Style, ...{mb:5, textAlign:'center'}};

const workList:number[] = [1, 2, 3];

const HomeWorks:FC = memo(() => {
  return (
    <>
      <Typography component={'h1'} sx={ProjectsTitleStyle}>Works</Typography>
      <List className='workList'>
        {workList.map((work, index) => (
          <ListItem key={index} className='workList__item'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">Lizard</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  )
});

HomeWorks.displayName = "HomeWorks";
export default HomeWorks;