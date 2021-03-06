import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from './Carousel';

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundImage: 'url(./banner.jpg)',
        backgroundSize: 'cover',
    },
    bannerContent: {
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around',
    },
    tagline: {
        display: 'flex',
        height: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    carousel: {
        height: '80%',
        display: 'flex',
        alignItems: 'center',
    },
}));

function Banner() {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant='h2'
                        style={{
                            fontWeight: 'black',
                            marginBottom: 15,
                            fontFamily: 'BasementBlack',
                        }}
                    >
                        Coin Forge
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        style={{
                            color: 'darkgrey',
                            textTransform: 'capitalize',
                            fontFamily: 'Montserrat',
                            fontSize: '2rem',
                        }}
                    >
                        Get all the Info regarding your favorite Cryptocurrency
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    );
}

export default Banner;
