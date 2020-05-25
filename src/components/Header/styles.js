import styled from 'styled-components';
import img from '../../assets/image/facebook1.png';

export const HeaderStyle = styled.header`
display: flex;
background-color: #a4b0be;
position: relative;
width: 100%;
z-index: 1100;
box-sizing: border - box;
flex-shrink: 0;
flex-direction: column;
height: 60px;
color: #FFFFFF;
    box-shadow: none;
    padding-top: 25px;
    background-color: transparent !important;
`;

export const IconStyle = styled.div`
 background-size: cover;
 background-position: top;
 background-image: url(${img});
 width: 40px;
 height: 40px;
`;