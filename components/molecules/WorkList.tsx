'use client';
import { FC, memo, useEffect } from 'react';

import { Box, Card, CardActions, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material';

import PrimaryButton from '@/components/atoms/PrimaryButton';
import { useGetWorks } from '@/hooks/useGetHomeSections';
import { teal } from '@mui/material/colors';


const WorkList:FC = memo(() => {
  const { getWorks, works } = useGetWorks();

  useEffect(() => {
      getWorks();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  console.log(works);

  return (
    <>
      <List className='workList'>
        {works.map((work, index) => (
          <ListItem key={index} className='workList__item'>
            <Card className='workList__card'>
              <CardMedia
                className='workList__card--media'
                sx={{ height: 270, width:'100%' }}
                image={ work?.field_thumbnail }
                title={ work?.title }
              />
              <Box className='workList__card--contents'>
                <CardContent className='workList__card--text'>
                  <Typography gutterBottom component='h2'>{ work?.title }</Typography>
                  <Typography component='p'>{ work?.field_discription }</Typography>
                </CardContent>
                <CardActions className='workList__card--actions'>
                  <PrimaryButton size='large'>詳しく見てみる</PrimaryButton>
                  {/* <Box component={'a'} href={ work?.field_link } target={'_blank'} sx={{color:'#fff', backgroundColor:teal[700], width:{xs:'100%', md:'auto'}}}>詳しくみてみる</Box> */}
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