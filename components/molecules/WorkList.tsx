import { FC, memo } from 'react';

import { Box, Button, Card, CardActions, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material';
import PrimaryButton from '../atoms/PrimaryButton';


const workList:number[] = [1, 2, 3];

const WorkList:FC = memo(() => {
  return (
    <>
      <List className='workList'>
        {workList.map((work, index) => (
          <ListItem key={index} className='workList__item'>
            <Card className='workList__card'>
              <CardMedia
                className='workList__card--media'
                sx={{ height: 270 }}
                image='https://placehold.jp/800x600.png'
                title='green iguana'
              />
              <Box className='workList__card--contents'>
                <CardContent className='workList__card--text'>
                  <Typography gutterBottom component='h2'>Lizard</Typography>
                  <Typography component='p'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions className='workList__card--actions'>
                  <PrimaryButton size='large'>詳しく見てみる</PrimaryButton>
                </CardActions>
              </Box>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  )
});

WorkList.displayName = 'WorkList';
export default WorkList;