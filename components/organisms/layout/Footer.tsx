'use client';
import { FC, memo } from 'react';
import { Box, Divider } from '@mui/material';

import PrimaryContainer from '@/components/atoms/PrimaryContainer';
import Copyright from '@/components/molecules/Copyright';
import SnsLinkList from '@/components/molecules/SnsLinkList';
import Heading3 from '@/components/atoms/Heading3';
import Text from '@/components/atoms/Text';
import { teal } from '@mui/material/colors';

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
              {/* 各種リンク */}
              <Box sx={{
                mb:5, 
                order:{sm:2}
              }}>
                <Heading3 sx={{textTransform:'uppercase', mb:2, color:'#fff'}}>SNS</Heading3>
                <SnsLinkList />
              </Box>
              {/* フッタープロフィール */}
              <Box>
                <Heading3 sx={{textTransform:'uppercase', mb:2, color:'#fff'}}>Masaya Kemmochi</Heading3>
                <Text sx={{fontSize:14, color:'#fff'}}>フロントエンドからバックエンドまで幅広く対応可能なWEBエンジニアです。<br />CMSやBIの構築案件を得意としています。</Text>
              </Box>
            </Box>
            <Divider variant='middle'/>
            <Box className='footer__lower' sx={{
              py:{xs:4, sm:5}, 
              px:0
            }}>
              {/* コピーライト */}
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