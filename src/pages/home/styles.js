import styled from 'styled-components';
import img from '../../assets/image/image1.jpg';

export const Container = styled.div`
background-image: url(${img});
background-size: cover;
background-position: center center;
border: 0;
height: 85vh;
margin: 0;
display: grid;
padding: 0;
overflow: hidden;
position: relative;
max-height: 1000px;
grid-template-rows:20vh 80vh;
`;
