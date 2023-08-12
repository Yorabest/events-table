import { GlobalStyle } from 'globalStyles';
import {ThemeProvider} from 'styled-components';

import {colors} from '../themes';
import events from '../data.json';
import { Container } from "./Container/Container";
import { EventList } from "./EventList/EventList";

const theme = {
  colors: colors
}

export const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <Container>
        <EventList events={events}/>
      </Container>
      </ThemeProvider>
    </>
  );
};
