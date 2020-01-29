import React from 'react';

import { Container, Top, Logo, Title } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import logo from '../../assets/Nubank_Logo.png';

export default function Header() {
   
    return(
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Paulo</Title>
            </Top>
            <Icon name="chevron-down" size={10} color="#FFF" />
        </Container>
    )
}