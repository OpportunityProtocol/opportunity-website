
import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router';
import StyledAvatar from '../StyledAvatar/StyledAvatar';

const ValuedHuman = ({ img, name } ) => {
    const router = useRouter()
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
          <StyledAvatar img={img} />
        </div>
        <Box textAlign="center">
          <Typography fontSize={18} fontWeight="medium" variant="body2" color="#616161" width="auto" noWrap>
            {name}
          </Typography>
          <Typography variant="caption" fontWeight='bold' color="text.primary" width="auto" noWrap>
            ${Math.floor(Math.random() * 101).toFixed(2)} Value
          </Typography>
        </Box>
      </Box>
    );
  };
  
export default ValuedHuman