import { useState, useEffect } from 'react';
import { Box, Grid, Card, Typography, Container } from '@mui/material';
import CenteredGridItem from '../../components/CenteredGridItem/CenteredGridItem';
import ValuedHuman from '../../components/ValuedHuman/ValuedHuman';

const ConnectedHumans = () => {
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
    <Box sx={{ height: '100vh', bgcolor: '#fbfbfd', overflowX: 'hidden' }}>
    <Container maxWidth='xl' sx={{  positon: 'relative' }}>
      <Box py={5}>
        <Typography py={2} fontWeight={400} fontSize={25} color='rgba(33, 33, 33, .85)'>Work and earn with LensTalent</Typography>

        <Typography fontWeight='bold' fontSize={22} width={600}>Invest in tokens representing services and earn a passive income as they do well.</Typography>
        <Typography fontWeight='bold' fontSize={18} width={800} color={theme => theme.palette.secondary.main}> Hire freelancers based on their skill value.</Typography>
      </Box>

      <Grid
        container
        direction='row'
        flexDirection='row'
        alignItems='center'
        flexWrap='nowrap'
        sx={{ width: '100%', height: '100%', padding: 0, margin: 0 }}
      >
        <Grid xs={6} container item direction='column' alignItems='center'>

        {users.slice(0,3).map((user) => {
          return (
            <CenteredGridItem item>
              <Card
                sx={{
                    mb: 4,
                  width: 500,
                  height: 180,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 2px 4px -1px #eee, 0px 4px 5px 0px #eee, 0px 1px 10px 0px #eee'
                }}
              >
                <ValuedHuman
                  img={user.picture.thumbnail}
                  name={String(user.name.first + ' ' + user.name.last)}
                />
              </Card>
            </CenteredGridItem>
          );
        })}
        </Grid>

<Grid item xs={6}>
        <div >
            <Box
              sx={{
                bgcolor: '#212121',
                display: 'flex',
                borderRadius: 3,
                overflowX: 'hidden',
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
              height={70}
              py={2}
              fontSize={25}
              fontWeight="bold"
              color="rgba(33, 33, 33, .85)"
            >
              A new and simple way to work and earn for clients and freelancers
            </Typography>
            <Typography height={40} fontWeight={200} paragraph fontSize={16}>
              Instantly accept or create contracts regardless of geographical location or social
              class.
            </Typography>
          </div>
          </Grid>

      </Grid>
    </Container>

   
    </Box>
  );
};

export default ConnectedHumans;
