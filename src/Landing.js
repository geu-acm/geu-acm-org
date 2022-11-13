import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Tabs,
} from '@mantine/core';
import Navtabs from './components/Navtabs';
import Jumbotron from './components/Jumbotron';
import './App.css'
import About from './sections/About';
import Team from './sections/Team';
import StyledTabs from './components/Styledbutton';
import Events from './sections/Events';
import Contact from './sections/Contact';
import GotoSection from './helpers/GotoSection';

export default function Landing() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"

      navbar={
        <MediaQuery largerThan="md" styles={{ display: 'none' }} >
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <StyledTabs position='right' onClick={() => setOpened((o) => !o)} onTabChange={GotoSection}>
              <Tabs.Tab label="Home" style={{ minWidth: '100px' }} />
              <Tabs.Tab label="About" style={{ minWidth: '100px' }} />
              <Tabs.Tab label="Events" style={{ minWidth: '100px' }} />
              <Tabs.Tab label="Team" style={{ minWidth: '100px' }} />
              <Tabs.Tab label="Join" style={{ minWidth: '100px' }} />
              <Tabs.Tab label="Contact" style={{ minWidth: '100px' }} />
            </StyledTabs>
          </Navbar>
        </MediaQuery>
      }

      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <div style={{ width: '2vw' }}></div>

            {/* <Text>GEU ACM</Text> */}
            <a href='/'>
              <img src="https://geu.acm.org/images/ACM%20GEU%20logo%20gas.png" width="100px" />
            </a>

            <div style={{ width: '50vw' }}></div>

            <Navtabs />
            {/* <button>Hello</button> */}
          </div>
        </Header>
      }
    >
      <Jumbotron />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#499BEA" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,90.7C384,107,480,117,576,138.7C672,160,768,192,864,208C960,224,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <About />
      <Events />
      <Team />
      <Contact />
    </AppShell>
  );
}