import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, TabsContainer, TabItems,  TabText 
} from './styles';

export default function Tabs({ translateY }) {  
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: 'clamp',
            })
        }}>
            <TabsContainer >
                <TabItems>
                    <Icon name="user-plus" size={20} color="#FFF" />
                    <TabText>Indicar Amigos</TabText>
                </TabItems>
                <TabItems>
                    <Icon name="comment" size={20} color="#FFF" />
                    <TabText>Cobrar</TabText>
                </TabItems>
                <TabItems>
                    <Icon name="arrow-down" size={20} color="#FFF" />
                    <TabText>Depositar</TabText>
                </TabItems>
                <TabItems>
                    <Icon name="arrow-up" size={20} color="#FFF" />
                    <TabText>Transferir</TabText>
                </TabItems>
                <TabItems>
                    <Icon name="lock" size={20} color="#FFF" />
                    <TabText>Bloquear Cartão</TabText>
                </TabItems>
            </TabsContainer>
        </Container>
    );
}