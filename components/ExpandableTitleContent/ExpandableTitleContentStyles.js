import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => {
    return {
        card: {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            margin: '10px 0px',
        },
        actionArea: {
            padding: 10
        }
    }
})

export default useStyles