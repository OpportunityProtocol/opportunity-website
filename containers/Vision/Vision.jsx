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
                src="/lenttalent2.png"
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
              py={2}
              fontSize={25}
              fontWeight="bold"
            >
              Instantly create contracts
            </Typography>
            <Typography  height={50} paragraph fontWeight={400} color='text.secondary' fontSize={16}>
              LensTalent provides a simple interface to quickly create, accept and work contracts. No need to provide unecessary personal information- just connect a web3 wallet and begin using the protocol.
            </Typography>
            <Button sx={{ mt: 2}} color='secondary' variant='contained'>
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
                src="/lenttalent2.png"
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
              py={2}
              fontSize={25}
              fontWeight="bold"
            >
              Create, sell and earn
            </Typography>
            <Typography height={50} fontWeight={400} color='text.secondary' paragraph fontSize={16}>
              Create services that can be advertised across any network based application on LensProtocol. Allow clients to invest in your service and earn passive income porportional to the quality of your service.
            </Typography>
            <Button sx={{ mt: 2}} color='secondary' variant='contained'>
              Learn more
            </Button>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Vision