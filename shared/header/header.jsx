import { Container } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    const Header = styled.header `
        heigth: 100px;
        background: red;
        position: sticky;
        top: 0;
        height: 60px;
        width: 100vw;

    `;
    return (
        <Header>
            <Container>
                <Link href="/"><img src="" alt="Финатлон" /></Link>
            </Container>
        </Header>
    );
};
