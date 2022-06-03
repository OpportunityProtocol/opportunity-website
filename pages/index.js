import React from 'react';
import {
  ThemeProvider,
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Stack,
} from '@mui/material';
import { themeOptions } from '../material_theme';
import Footer from '../components/Footer/Footer';
import ModularityAcknowledgement from '../components/ModularityAcknowledgement/ModularityAcknowledgement';
import Hero from '../components/Hero/Hero';
import Head from '../components/Head/Head';
import InformationalOne from '../components/InformationalOne/InformationalOne';
import Avatar from '@mui/material/Avatar';
import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient';
import { styled } from '@mui/system';

export default function Home() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div>
        <Head />
        <Hero />
        <Vision />
        <InformationalOne />
        <ModularityAcknowledgement />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

const CenteredGridItem = styled(Grid)({
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px !important',
  margin: '0px !important',
});

const renderHuman = (img, name) => {
  const styles = useGradientAvatarStyles({
    size: 80,
    gap: 3,
    thickness: 3,
    gapColor: '#f4f7fa',
    color: 'linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)',
  });

  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    component={Button}
    onClick={() => router.push('/profile')}
  >
    <div
      style={{
        margin: '5px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    
    >
           <div className={styles.root}>
        <Avatar src={img} />
      </div>
    </div>
    <Box textAlign="center">
      <Typography fontWeight='medium' variant="body2" color="#616161" width="auto" noWrap>
        Jessica Beltran
      </Typography>
      <Typography variant="caption" color='text.primary' width="auto" noWrap>
        ${Math.floor(Math.random() * 101).toFixed(2)} Value
      </Typography>
    </Box>
  </Box>
  )
}

const Vision = () => {
  return (
    <Box sx={{ height: '100vh', bgcolor: '#fbfbfd' }}>
    <Container maxWidth='xl' sx={{  }}>
      <Stack sx={{height: '100vh', }} direction='row' justifyContent='space-between' alignItems='center' spacing={5}>
      <div style={{ width: '45%' }}>
      <Box sx={{ /*border: '2px solid #B8E0D0 !important',*/ backgroundColor: '#B8E0D0', borderRadius: 3,display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  height: 600}}>
        <Grid container spacing={2} alignItems='center' flexWrap='wrap' justifyContent='center' sx={{ width: '100%', height: '100%', padding: 0, margin: 0}}>
          <CenteredGridItem item xs={4}>
              {renderHuman('/freelance9.jpeg', '')}
           
          </CenteredGridItem >

          <CenteredGridItem  item xs={4}>
          {renderHuman('/freelance1.jpeg', '')}
          </CenteredGridItem >
          <CenteredGridItem  item xs={4}>
          {renderHuman('/freelance2.jpeg', '')}
          </CenteredGridItem >

          <CenteredGridItem  item xs={4}>
          {renderHuman('/freelance3.jpeg', '')}
          </CenteredGridItem >
          <CenteredGridItem  item xs={4}>
          {renderHuman('/freelance11.jpeg', '')}
          </CenteredGridItem >

          <CenteredGridItem  item xs={4}>
          {renderHuman('/freelance12.jpeg', '')}
          </CenteredGridItem >

          <CenteredGridItem  item xs={4}>
          {renderHuman('/freelance6.jpeg', '')}
          </CenteredGridItem >

          <CenteredGridItem  item xs={4}>
          {renderHuman('/freelance7.jpeg', '')}
          </CenteredGridItem >

          <CenteredGridItem  item xs={4}>
          {renderHuman('/freelance15.jpeg', '')}
          </CenteredGridItem >
        </Grid>
      </Box>
      <Typography height={70}  py={2} fontSize={25} fontWeight='bold'  color="rgba(33, 33, 33, .85)">
        Establish a work relationship with the best, invest and earn.
      </Typography>
      <Typography height={40} paragraph fontWeight={300} fontSize={16}>
        Invest in a token representing a freelancer's service and earn a passive income as they do well. Hire freelancers based on their skill value.
      </Typography>
      </div>

      <div style={{ width: '45%' }}>
      <Box sx={{ bgcolor: '#212121', display: 'flex', borderRadius: 3, overflowX: 'hidden', position: 'relative', width: '100%',  height: 600}}>
      <img src='/lenttalent2.png' style={{  position: 'absolute', bottom: -5, left: '12%', width: '100%', height: '90%' }} />
      </Box>
      <Typography height={70}  py={2} fontSize={25} fontWeight='bold'  color="rgba(33, 33, 33, .85)">
      A new and simple way to work and earn for clients and freelancers
      </Typography>
      <Typography height={40} fontWeight={200} paragraph fontSize={16}>
        Instantly accept or create contracts regardless of geographical location or social class.
      </Typography>
      </div>
      </Stack>
      </Container>
      </Box>
  )
}
