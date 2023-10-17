import React, { useState } from 'react';
import { Box, InputBase, List, ListItem,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import{getProducts as listProducts} from '../../'


const SearchContainer = styled(Box)`
border-radius:2px;
margin-left:10px;
width:38%;
background-color:#fff;
display:flex;
`

const SearchInputWrapper = styled(Box)`
margin-left:auto;
padding:5px;
display:flex;
color:blue;
`

const ListWrapper = styled(List)`
position:absolute;
color:#000;
background:#FFFFFF;
margin-top:36px
`
const InputSearchBase = styled(InputBase)`
font-size:unset;
width:100%;
padding-left:20px;
`
const Search = () => {
    const [text, setText] = useState();
    const [open, setOpen] = useState(true);

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for products, brands and more'
                inputProps={{ 'aria-label': 'search' }}
                
                onChange={(e)=>{getText(e.target.value)}}
            />
            <SearchInputWrapper>
                <SearchIcon/>
            </SearchInputWrapper>
            {
            }
        </SearchContainer>
    )
};

export default Search