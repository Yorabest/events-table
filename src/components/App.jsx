import { GlobalStyle } from 'globalStyles';
import {ThemeProvider} from 'styled-components';
// import { useState } from 'react';

import {colors} from '../themes';
// import events from '../data.json';
// import stickers from '../stickers.json';
// import { ColorPicker } from './ColorPicer/ColorPicker';
// import { StickersList } from './Stickers/StickersList';
// import { Container } from "./Container/Container";
// import { EventList } from "./EventList/EventList";
import contactsInfo from '../contactsInfo.json'
import { Phonebook } from './Phonebook/Phonebook';

const theme = {
  colors: colors
}

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export const App = () => {

  // const [currentSticker, setCurrentSticker] = useState(null);

  // const handleCurrentSticker = (sticker) => {
  //    setCurrentSticker(sticker)
  //  }

  return (
    <>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <ColorPicker options={colorPickerOptions} />
        {currentSticker && <h1>{currentSticker}</h1>}
        <StickersList stickers={stickers} onStickerClick={handleCurrentSticker}/> */}
      <Phonebook contactsInfo={contactsInfo}/>
      </ThemeProvider>
    </>
  );
};
