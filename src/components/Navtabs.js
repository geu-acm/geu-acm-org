import { Tabs } from '@mantine/core';
import { MediaQuery } from '@mantine/core';
import StyledTabs from './Styledbutton';
import GotoSection from '../helpers/GotoSection';
// import { Settings, MessageCircle, Coin } from 'tabler-icons-react';

export default function Navtabs() {
  return (
    <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
      <StyledTabs grow position='center' onTabChange={GotoSection}>
        <Tabs.Tab label="Home" />
        <Tabs.Tab label="About" />
        <Tabs.Tab label="Events" />
        <Tabs.Tab label="Team" />
        <Tabs.Tab label="Join" />
        <Tabs.Tab label="Contact" />
      </StyledTabs>
    </MediaQuery>
  );
}