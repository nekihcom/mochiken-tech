import { FC, memo } from 'react';

import { Box, Divider, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

import PrimaryContainer from '@/components/atoms/PrimaryContainer';
import Copyright from '@/components/molecules/Copyright';
import SnsLinkList from '@/components/molecules/SnsLinkList';

const Footer:FC = memo(() => {
  return (
    <>
      <Box component='footer' sx={{background:teal[700]}}>
        <PrimaryContainer>
          <Box className='footer__inner' sx={{py:5}}>
            <Box className='footer__upper' sx={{
              display: {sm:'flex'},
              justifyContent: {sm:'space-between'},
              py: {xs:7, sm:10},
              px: 0,
            }}>
              <Box sx={{
                mb:5, 
                order:{sm:2}
              }}>
                <Typography sx={{ fontSize:"24px", fontWeight:"700", letterSpacing:1.5, textTransform:'uppercase', mb:2, color:'#fff'}}>SNS</Typography>
                <SnsLinkList />
              </Box>
              <Box>
                <Typography sx={{ fontSize:"24px", fontWeight:"700", letterSpacing:1.5, textTransform:'uppercase', mb:2, color:'#fff'}}>Masaya Kemmochi</Typography>
                <Typography sx={{fontSize:14, color:'#fff'}}>フロントエンドからバックエンドまで幅広く対応可能なWEBエンジニアです。<br />CMSやBIの構築案件を得意としています。</Typography>
              </Box>
            </Box>
            <Divider variant='middle'/>
            <Box className='footer__lower' sx={{
              py:{xs:4, sm:5}, 
              px:0
            }}>
              <Box sx={{textAlign:'center'}}>
                <Copyright />
              </Box>
            </Box>
          </Box>
        </PrimaryContainer>
      </Box> 
    </>
  )
});

Footer.displayName = 'Footer';
export default Footer;