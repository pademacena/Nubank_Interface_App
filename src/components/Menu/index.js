import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import QRCode from 'react-native-qrcode-svg';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY}) {
    return(
        <Container style={{
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],
            }),
          }}>
            <Code>
                <QRCode 
                    value="http://pauloaugustodmp.com"
                    size={80}
                    backgroundColor="#FFF"
                    color="#8b10AE" 
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="info-circle" size={20} color="#FFF" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="user" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configuração do Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="mobile" size={20} color="#FFF" />
                    <NavText>Configuração do App</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair da Conta</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}