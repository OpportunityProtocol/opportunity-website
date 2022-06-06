import { makeStyles } from "@mui/styles"
import { darken } from '@mui/material'

const useStyles = makeStyles((theme) => {
    return {
        footer: {
            padding: '0% 12%',
            backgroundColor: darken('#062e03', 0.82),
            color: '#fff',
       //     border: '1px solid #eee',
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