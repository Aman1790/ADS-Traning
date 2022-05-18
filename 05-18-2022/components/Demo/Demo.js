import React from 'react';

import MyParagraph from './MyParagraph';

const Demo = (props) => {
  console.log('Output');
  return <MyParagraph>{props.show ? 'This is new Paragraph' : ''}</MyParagraph>;
};

export default React.memo(Demo);