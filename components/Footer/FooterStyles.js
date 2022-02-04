import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => {
    return {
        footer: {
            width: '100vw',
            padding: '5% 15%',
            width: '100%',
            backgroundColor: '#fbfbfd',
            border: '1px solid #eee',
            display: 'flex',
            flexDirection: 'column',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
        }
    }
})

export default useStyles