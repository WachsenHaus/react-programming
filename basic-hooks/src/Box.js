import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
height:50px;
backgorund-color: #aaaaaaa;
`;

const BoxBig


export default function Box({size}){
    if(size ==='big'){
        return <BoxBig>큰 박스</BoxBig>;
    }else{
        return <BoxSmall>작은 박스</BoxSmall>;
    }
}