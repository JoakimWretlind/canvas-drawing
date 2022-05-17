import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100%;
`;

export const TextContainer = styled.div`
    height: min-content;
    min-height: 4rem;
    width: 100%;
    padding: 1rem 3rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    background-color: #333;
`;

export const H1 = styled.h1`
    font-family: 'lato', sans-serif;
    margin-right: 1rem;
    color: #f1f1f1;
    text-transform: capitalize;
    letter-spacing: .1rem;
`;

export const P = styled.p`
    font-family: 'lato', sans-serif;
    color: #f1f1f1;
    letter-spacing: .1rem;
    font-size: 1.2rem;
`;