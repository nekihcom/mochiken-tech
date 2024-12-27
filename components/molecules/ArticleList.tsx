import { FC, memo } from 'react';

import { Box, Card, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material';


const articleList:number[] = [1, 2, 3];

const ArticleList:FC = memo(() => {
  return (
    <>
      <List className='articleList'>
      {articleList.map((article, index) => (
        <ListItem key={index} className='articleList__item'>
          <Card className='articleList__card' component={'a'} href='https://www.yahoo.co.jp' target='_blank'>
            <CardMedia
              className='articleList__card--media'
              sx={{ height: 200 }}
              image='https://placehold.jp/800x600.png'
              title='green iguana'
            />
            <CardContent className='articleList__card--text'>
              <Typography gutterBottom component='h2'>ARTICLE TITLE</Typography>
              <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography component='p'>
                  Qiita
                </Typography>
                <Typography component='time'>
                  2024-12-23
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </ListItem>
      ))}
      </List>
    </>
  )
});

ArticleList.displayName = 'ArticleList';
export default ArticleList;