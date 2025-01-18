import Image from "next/image";
import { Box, Container, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import TerminalIcon from '@mui/icons-material/Terminal';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ComputerIcon from '@mui/icons-material/Computer';

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import SnsLinkCard from "@/components/atoms/SnsLinkCard";
import SkillCard from "@/components/molecules/SkillCard";
import { backendSkillsList, certificates, devopsSkillsList, frontendSkillsList, SnsLinks, workExperience } from "@/data/site";


const Profile = () => {
  return (
    <>
      <HomeSectionContainer title={'about me'}>
        <Grid2 container spacing={2} sx={{maxWidth:1000, justifyContent:'space-between'}}>
          {/* プロフィール画像 */}
          <Grid2 size={{xs:12, md:3}} sx={{mb:2, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Image className='profile-img' src={"/me2.PNG"} alt={"Mochiken Avatar"} width={200} height={200} />
          </Grid2>

          {/* 名前や職業など */}
          <Grid2 size={{xs:12, md:6}}  sx={{width:{xs:'80%', md:'auto'}, mx:{xs:'auto', md:'0'}}}>
            <Box mb={2} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Typography component={'h3'} sx={{fontWeight:700, fontSize:28, color:teal[700]}}>Mochiken</Typography>
              <Typography component={'h4'} sx={{fontSize:20, color:"black"}}>(@nekihcom)</Typography>
            </Box>
            <Box mb={2} >
              <Typography component={'p'} sx={{fontWeight:700, fontSize:12}}>職種</Typography>
              <Typography component={'p'}>システムエンジニア / <br className="lg:hidden"/>Webエンジニア</Typography>
            </Box>
            <Box mb={2} >
              <Typography component={'p'} sx={{fontWeight:700, fontSize:12}}>所属</Typography>
              <Typography component={'p'}>日系SIer</Typography>
            </Box>
            <Box mb={2} >
              <Typography component={'p'} sx={{fontWeight:700, fontSize:12}}>好きな技術</Typography>
              <Typography component={'p'}>Python / Drupal </Typography>
            </Box>
            <Box mb={2} >
              <Typography component={'p'} sx={{fontWeight:700, fontSize:12}}>趣味</Typography>
              <Typography component={'p'}>野球 / バドミントン / 個人開発</Typography>
            </Box>
          </Grid2>

          {/* SNSリンク */}
          <Grid2 size={{xs:12, md:4}} 
            sx={{
              display:{sm:'grid'}, 
              gridTemplateColumns:{
                sm:'repeat(2, minmax(0, 1fr))', 
                md:'repeat(1,minmax(0,1fr))'
              }
          }}>
            {SnsLinks.map((sns) => (
              <Grid2 key={sns.service} size={{xs:12}} sx={{mb:{xs:1, md:0}, mr:{sm:1, md:0}}}>
                <SnsLinkCard service={sns.service} color={sns.color} username={sns.username} icon={sns.icon} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>

        {/* スキル */}
        <Container sx={{my:10}}>
          <Typography component={'h3'} sx={{fontSize:28, textAlign:'center'}}>Skill</Typography>
          <Grid2 container sx={{
            my:3, p:2, border:`1px solid ${grey[300]}`, borderRadius:3,
            boxShadow: '0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8'
            }}>
            <SkillCard title={"Front-end"} list={frontendSkillsList} icon={<DesignServicesIcon sx={{width:45, height:45}}/>} />
            <SkillCard title={"Back-end"} list={backendSkillsList} icon={<TerminalIcon sx={{width:45, height:45}} />} isMiddle={true} />
            <SkillCard title={"DevOps"} list={devopsSkillsList} icon={<ComputerIcon sx={{width:45, height:45}}/>} />
          </Grid2>
        </Container>

        {/* 経歴 */}
        <Container sx={{my:10}}>
          <Typography component={'h3'} sx={{fontSize:28, textAlign:'center'}}>Work Experience</Typography>
          <TableContainer sx={{my:3, maxWidth:600, mr:'auto', ml:'auto'}}>
            <Table size="small">
              <TableBody>
                { workExperience && workExperience.map((experience, index) => (
                  <TableRow key={index}>
                    <TableCell component={'th'} align={'left'} sx={{fontWeight:700}}>{ experience.term }</TableCell>
                    <TableCell align={'left'}>{ experience.description }</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

        {/* 資格 */}
        <Container sx={{my:10}}>
          <Typography component={'h3'} sx={{fontSize:28, textAlign:'center'}}>Certificate</Typography>
          <TableContainer sx={{my:3, maxWidth:600, mr:'auto', ml:'auto'}}>
            <Table size="small">
              <TableBody>
                { certificates && certificates.map((certificate, index) => (
                  <TableRow key={index}>
                    <TableCell component={'th'} align={'left'} sx={{fontWeight:700}}>{ certificate.date }</TableCell>
                    <TableCell align={'left'}>{ certificate.certificateName }</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </HomeSectionContainer>
    </>
  );
}

export default Profile;