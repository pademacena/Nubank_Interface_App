import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Animated } from 'react-native';
import { PanGestureHandler, State  } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Container, Content, Card, CardHeader, CardContent, Title, Description , CardFooter, Anotation } from './styles';

export default function Main() {

  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      }else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      })
      

    }
  }

  return(
    <Container >  
      <Header />

      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged}>
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader>
              <Icon name="dollar" size={25} color="#666" />
              <Icon name="eye-slash" size={28} color="#666" />
            </CardHeader>

            <CardContent>
              <Title>Saldo Disponivel</Title>
              <Description>R$ 197.611.65</Description>
            </CardContent>

            <CardFooter>
              <Anotation>
                Transferencia de R$ 20,00 Algum Usuário recebida HOje às 06:00h
              </Anotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}

