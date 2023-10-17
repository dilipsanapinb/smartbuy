import React,{Fragment} from 'react'
import NavBar from './NavBar';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Banner from './Banner';

const Component = styled(Box)`
    padding:20px 20px;
    background: #F2F2F2;
`
const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </Fragment>
    )
};

export default Home