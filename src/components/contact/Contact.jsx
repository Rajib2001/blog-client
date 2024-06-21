
import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
     background: url(https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/55% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on my Linkedin 
                    <Link href="https://www.linkedin.com/in/rajib-kumar-chauhan-1b1749203/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                or on my Instagram
                    <Link href="https://www.instagram.com/rabiya24_14/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>

                    or send me an Email 
                    <Link href="mailto:rajibchauhan2001@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;