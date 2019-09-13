import React from 'react';

const TranslationList = (props) => {
  const { translationText } = props;
  const translationList = translationText.map(translation => {
    return(
      <div className="translations">
        <li>{translation}</li>
      </div>
    )
  })
}

export default TranslationList;