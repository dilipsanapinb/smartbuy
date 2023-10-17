import styled from '@emotion/styled';
import { Box,Typography } from '@mui/material'
import React from 'react'
import {navData} from '../../constant/data'
const Component = styled(Box)`
display:flex;
justify-content:space-between;
margin: 55px 130px 0 130px !important;
overflow:overlay;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family: inherit;
`
const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`


const NavBar = () => {
    return (
        <Component>
            {
                navData.map(temp => (<Container>
                    <img src={temp.url} style={{ width: 64 }} alt='navBar' />
                    <Text>{temp.text }</Text>
                </Container>))
            }
        </Component>
    )
};

export default NavBar