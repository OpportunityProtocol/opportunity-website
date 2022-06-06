import Avatar from '@mui/material/Avatar';
import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient';

const StyledAvatar = ({ img }) => {
    const styles = useGradientAvatarStyles({
      size: 60,
      gap: 3,
      thickness: 3,
      gapColor: '#f4f7fa',
      color: 'linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)',
    });
  
    return (
      <div className={styles.root}>
      <Avatar src={img} />
    </div>
    )
}

export default StyledAvatar