import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => {
    return {
        box: {
            width: '100vw',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0% 25%',
        },
        bottomContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }
})

export default useStyles