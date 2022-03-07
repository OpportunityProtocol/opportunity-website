import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => {
    return {
        footer: {
            padding: '5% 12%',
            backgroundColor: '#212121',
            color: '#fff',
            border: '1px solid #eee',
            display: 'flex',
            flexDirection: 'column'
        },
        contentContainer: {
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between', 
            flex: 1 
        },
        link: {
            cursor: 'pointer',
            '&:hover': {
                color: 'rgb(147, 227, 178)'
            }
        }
    }
})

export default useStyles