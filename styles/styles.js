import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        introductionSection: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FBFBFD',
            position: 'relative',
        },

        introductionSectionGrid: {
            flex: 1,
        },

        introductionTextContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },

        introductionChatButton: {
            borderRadius: '0px !important',
            border: '1px solid #eee',
            padding: 20,
            backgroundColor: '#fff'
        },

        appbar: {
            width: '100vw',
            height: '70px',
        },

        fullGrid: {
            width: '100%',
            flex: 1,
        },

        toolbar: {
            backgroundColor: '#FBFBFD'
        },

        appbarPaper: {
            backgroundColor: '#FBFBFD',
            padding: '0% 2%',
            display: 'flex',
             alignItems: 'center'
        },

        backgroundImageContainer: {
            
            position: 'absolute',
            width: '100%',
            height: 'calc(100vh - 70px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
        },

        backgroundImage: {
            position: 'absolute',
            width: '100%',
            height: 'calc(100% - 70px)',
            opacity: 0.1
        },

        section: {
            padding: '5% 20%',
            width: '100%',
            background: '#FBFBFD'
        },

        textButton: {
            color: 'rgba(33, 33, 33, 0.85)'
        },

        learnMoreButton: {
            width: '100%',
            flex: 1,
            border: '1px solid #eee',
            color: '#66C56B',
        },

        centeredSection: {
            padding: '5% 12%',
            width: '100%',
            background: '#FBFBFD',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },

        shadowyDiv: {
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    }
})

export default useStyles