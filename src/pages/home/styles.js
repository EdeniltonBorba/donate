import styled from 'styled-components';
import img from '../../assets/image/image1.jpg';

export const Container = styled.div`
background-image: url(${img});
background-size: cover;
background-position: center center;
border: 0;
height: 90vh;
margin: 0;
display: flex;
padding: 0;
overflow: hidden;
position: relative;
max-height: 1000px;
align-items: center;
`;
