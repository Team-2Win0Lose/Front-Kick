import React, { useState, useEffect } from "react";

import styled from "styled-components";
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'


const FavoriteButton = ({ like, onClick }) => {
    return (
        <Star src={like?AiFillStar:AiOutlineStar} onClick={onClick} />
    );
};

export default FavoriteButton;

const Star = styled.img`
    
`;