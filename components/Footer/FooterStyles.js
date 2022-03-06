import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => {
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
        }
    }
})

export default useStyles