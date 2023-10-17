import React from 'react'
import { AppBar, Box,Typography, IconButton, Toolbar, styled } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
background:#2874f0;
height:55px
`

const Component = styled(Box)`
margin-left:12%;
line=height:0;
`

const Subheading = styled(Typography)`
font-size:10px;
font-style:italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft:4,
})

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    // [theme.breakpoints.down('sm')]: {
    //     display: 'block'
    // }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({
    margin:'0 5% 0 auto'
}))
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <Component to="/">
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box component={'span'} style={{display:'flex'}}>
                        <Subheading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </Subheading>
                        <PlusImage src={subURL}/>
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>

        </StyledHeader>
    )
};

export default Header