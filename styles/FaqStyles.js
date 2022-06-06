import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => {
    return {
        box: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0% 25%',
            backgroundColor: '#fbfbfd',
        },
        bottomContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }
})

export default useStyles