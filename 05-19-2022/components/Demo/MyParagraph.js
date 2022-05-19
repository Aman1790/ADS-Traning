import React from 'react';

const MyParagraph = (props) => {
  console.log('Paragraph');
  return <p>{props.children}</p>;
};

export default MyParagraph;