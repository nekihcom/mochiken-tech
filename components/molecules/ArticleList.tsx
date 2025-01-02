import { FC, memo } from 'react';

import { Box, Card, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material';

import { Article } from '@/type/api';


const articles:Array<Article> = [
  {
    title:'Drupalとは？　機能や特徴、メリット/デメリットをご紹介！',
    field_link:'https://www.mochiken.blog/archives/1/',
    field_thumbnail:'http://mkemmochi.hacca.jp/api-mochiken-blog/web/sites/default/files/2025-01/Drupalとは？.png',
    field_source:'Blog',
    field_postdate:'2025-01-02'
  },
  {
    title:'firebaseでホスティングしたNext.jsをGithubActionsでCI/CDする',
    field_link:'https://qiita.com/nekihcom/items/af2d66619fb5d0bd06b9',
    field_thumbnail:'http://mkemmochi.hacca.jp/api-mochiken-blog/web/sites/default/files/2025-01/Group 4.png',
    field_source:'Qiita',
    field_postdate:'2024-11-14'
  },
  {
    title:'【Javascript】JSフレームワーク等を学ぶなら覚えておきたいコト',
    field_link:'https://qiita.com/nekihcom/items/8a0f71252bc906154783',
    field_thumbnail:'http://mkemmochi.hacca.jp/api-mochiken-blog/web/sites/default/files/2025-01/B071z7xB.jpeg',
    field_source:'Qiita',
    field_postdate:'2024-03-07'
  }
];

const ArticleList:FC = memo(() => {
  return (
    <>
      <List className='articleList'>
      {articles.map((article:Article, index:number) => (
        <ListItem key={index} className='articleList__item'>
          <Card className='articleList__card' component={'a'} href={ article?.field_link } target='_blank'>
            <CardMedia
              className='articleList__card--media'
              sx={{ height: 200, textAlign:'center' }}
              image={ article?.field_thumbnail }
              title={ article?.title }
            />
            <CardContent className='articleList__card--text'>
              <Typography gutterBottom component='h2'>{ article?.title }</Typography>
              <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography component='p'>{ article?.field_source }</Typography>
                <Typography component='time'>{ article?.field_postdate }</Typography>
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