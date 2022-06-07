import { useState, useEffect } from 'react';
import { Box, Stack, Container, Button, Grid, Typography } from '@mui/material';
import CenteredGridItem from '../../components/CenteredGridItem/CenteredGridItem';
import ValuedHuman from '../../components/ValuedHuman/ValuedHuman';

const Vision = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const a = await fetch('https://randomuser.me/api/?results=9');
    const b = await a.json();
    console.log(b.results);
    setUsers(b.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (

    <Box sx={{ height: '100vh', bgcolor: '#eee' }}>
      <Container maxWidth="xl" sx={{}}>
        <Stack
          sx={{ height: '100vh' }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
        >
          <div style={{ width: '45%' }}>
          <Box
              sx={{
                bgcolor: '#B8E0D0',
                display: 'flex',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                height: 600,
              }}
            >
              <img
                src="/createcontract.png"
                style={{
                  position: 'absolute',
                  bottom: -5,
                  right: '12%',
                  width: '100%',
                  height: '90%',
                }}
              />
            </Box>
            <Typography
              height={30}
              pt={2}
              pb={1}
              fontSize={25}
              fontWeight="bold"
            
            >
              For clients
            </Typography>
            <Typography  height={50} mb ={3}  paragraph fontWeight={400} color='text.secondary' fontSize={16}>
                <ul>
                  <li>Find and hire reputable talant</li>
                  <li>Support talant for good work</li>
                  <li>Get paid when they get paid</li>
                </ul>
              </Typography>
            <Button sx={{ mt: 3}} color='secondary' variant='contained'>
              Learn more
            </Button>
          </div>

          <div style={{ width: '45%' }}>
            <Box
              sx={{
                bgcolor: '#212121',
                display: 'flex',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                height: 600,
              }}
            >
              <img
                src="/createservice.png"
                style={{
                  position: 'absolute',
                  bottom: -5,
                  left: '12%',
                  width: '100%',
                  height: '90%',
                }}
              />
            </Box>
            <Typography
              height={30}
              pt={2}
              pb={1}
              fontSize={25}
              fontWeight="bold"
              mb={0}
            >
              For freelancers
            </Typography>
            <Typography height={50}  mb ={3}  fontWeight={400} color='text.secondary' paragraph fontSize={16}>
              <ul>
                  <li>Create a profile on lens talent</li>
                  <li>Create services that follow you through any network</li>
                  <li>Complete work, build and leverage your network to earn passive income </li>
              </ul>
            </Typography>
            <Button sx={{ mt: 3}} color='secondary' variant='contained'>
              Learn more
            </Button>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Vision