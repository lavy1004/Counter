/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native'

const ScrollView = Styled.ScrollView`
  background-color:${Colors.white};
`

const Body = Styled.View`
  background-color:${Colors.lighter};
`

const SectionContainer = Styled.View`
  margin-top: 32px;
  padding-horizontal:24px;
`
const SectionDescription = Styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};

`

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          >
         <Header />
         <Body>
           <SectionContainer>
             <SectionDescription>
              step one
             </SectionDescription>
             <SectionDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit expedita quas quam exercitationem porro eos culpa totam quo adipisci perferendis? Ea eveniet fugit ex delectus sapiente dolores autem et culpa?
             </SectionDescription>
           </SectionContainer>
           <SectionContainer>
             <SectionDescription>
                See your
              </SectionDescription>
              <SectionDescription>
                <ReloadInstructions/>
              </SectionDescription>
            </SectionContainer>
         </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
