import React from 'react';

// Connect
import Connect from '../../utils/connect';

// Styles
import { HomeContainer } from './HomeStyles';

const Home = () => <HomeContainer>Hello World</HomeContainer>;

const home = Connect(Home);
export default home;
