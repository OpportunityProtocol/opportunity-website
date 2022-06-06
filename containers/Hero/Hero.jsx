import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
} from '@mui/material';
import useStyles from './HeroStyles';
import MarketDisplay from '../../components/MarketDisplay/MarketDisplay';
import Marquee from 'react-fast-marquee';
import AppBar from '../../components/AppBar/AppBar';
import { MARKETS } from './constant'
import StyledAvatar from '../../components/StyledAvatar/StyledAvatar';
import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient';

const Hero = () => {
  const classes = useStyles();
  const styles = useGradientAvatarStyles({
    size: 60,
    gap: 3,
    thickness: 3,
    gapColor: '#f4f7fa',
    color: 'linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)',
  });


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
    <div className={classes.root}>
      <AppBar />
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.left}>
          <Box width={900}>
            <Typography fontSize={50}>
              A network based freelancing protocol
            </Typography>
            <Typography fontSize={18} fontWeight={200}>
              We imagine a world where freelancers can instantly find work and have the ability to carry their services across any network
              based application.{" "}
              <Typography component="span" color={(theme) => theme.palette.secondary.main}>
                Welcome to the cooperation layer of the internet.
              </Typography>
            </Typography>
            <Button sx={{ mt: 2 }} variant="contained" color="secondary">
              Preview the beta
            </Button>
          </Box>

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute',  borderRadius: 210, width: 420, height: 420, animation: `spin 18s linear infinite` }}>
             
             <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', top: -50, left: 180, animation: `spinleft 18s linear infinite` }}>
             <div className={styles.root}>
                <Avatar src={users[7]?.picture.medium}  />
              </div>
              <Typography py={0.8} fontSize={12}>$54.53</Typography>
             </Box>

             <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', top: -50 + 68, left: 420 - 36 - 68, animation: `spinleft 18s linear infinite` }}>
             <div className={styles.root}>
                <Avatar src={users[0]?.picture.medium} />
              </div>
              <Typography py={0.8} fontSize={12}>$54.53</Typography>
             </Box>

             <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', top: (210 - 51.4), right: -36,  animation: `spinleft 18s linear infinite` }}>
             <div className={styles.root}>
                <Avatar src={users[1]?.picture.medium} />
              </div>
              <Typography py={0.8} fontSize={12}>$54.53</Typography>
             </Box>

             <Box sx={{  position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', top: 420 - 51.4 - 68, left: 420 - 36 - 68, animation: `spinleft 18s linear infinite` }}>
             <div className={styles.root}>
                <Avatar src={users[2]?.picture.medium} />
              </div>
              <Typography py={0.8} fontSize={12}>$54.53</Typography>
             </Box>

             <Box sx={{  position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', bottom: -51.4, left: 180,  animation: `spinleft 18s linear infinite` }}>
             <div className={styles.root}>
                <Avatar src={users[3]?.picture.medium} />
              </div>
              <Typography py={0.8} fontSize={12}>$54.53</Typography>
             </Box>

             <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', bottom: -51.4 + 68, left: -36 + 68,  animation: `spinleft 18s linear infinite` }}>
             <div className={styles.root}>
                <Avatar src={users[4]?.picture.medium} />
              </div>
              <Typography py={0.8} fontSize={12}>$54.53</Typography>
             </Box>

             <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', bottom: (210 - 51.4), left: -36,  animation: `spinleft 18s linear infinite` }}>
             <div className={styles.root}>
                <Avatar src={users[5]?.picture.medium} />
              </div>
              <Typography py={0.8} fontSize={12}>$54.53</Typography>
             </Box>

             <Box sx={{  position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', bottom: 300, left: -36 + 68,  animation: `spinleft 18s linear infinite` }}>
             <div className={styles.root}>
                <Avatar src={users[6]?.picture.medium} />
              </div>
              <Typography py={0.8} fontSize={12}>$54.53</Typography>
             </Box>

            </div>
          <img
            src="/logo.png"
            style={{ width: 300, height: 300, animation: `spin 18s linear infinite` }}
          />

          </div>

        </Box>
        <Box className={classes.marquee}>
          <Marquee gradient={false}>
            {MARKETS.map((market) => {
              return <MarketDisplay marketTitle={market.market} related={market.related} />;
            })}
          </Marquee>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
