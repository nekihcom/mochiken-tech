import { FC, memo } from 'react';

import { Box, Divider, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

import PrimaryContainer from '@/components/atoms/PrimaryContainer';
import Copyright from '@/components/molecules/Copyright';
import SnsLinkList from '@/components/molecules/SnsLinkList';
import { h3Style, pStyle } from '@/styles/style';

const footerH3Style = { ...h3Style, ...{textTransform:'uppercase', mb:2, color:'#fff'} };
const footerTextStyle = {...pStyle, ...{color:'#fff'} };

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
                <Typography component={'h3'} sx={footerH3Style}>SNS</Typography>
                <SnsLinkList />
              </Box>
              <Box>
                <Typography component={'h3'} sx={footerH3Style}>Masaya Kemmochi</Typography>
                <Typography component={'p'} sx={footerTextStyle}>フロントエンドからバックエンドまで幅広く対応可能なWEBエンジニアです。<br />CMSやBIの構築案件を得意としています。</Typography>
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