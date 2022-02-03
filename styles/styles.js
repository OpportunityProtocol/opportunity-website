import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        introductionSection: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',

        },

        introductionSectionGrid: {
            flex: 1,
            width: '100vw',
        },

        introductionTextContainer: {
            height: 300,
        },

        introductionChatButton: {
            borderRadius: '0px !important',
            border: '1px solid #eee',
            padding: 20,
            backgroundColor: '#fff'
        },

        appbar: {
            width: '100vw',
            height: '70px'
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
            padding: '0% 10%',
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
            opacity: 0.5
        },

        backgroundImage: {
            width: '100%',
            height: '100%',
            opacity: 0.3
        },

        section: {
            padding: '5% 15%',
            width: '100%',
            background: '#fff',
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