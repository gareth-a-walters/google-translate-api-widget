import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import styles from './Translate.module.css';
import languageOptions from '../data/languages.json';

const Translate = () => {
  const [language, setLanguage] = useState(languageOptions[15]);
  const [text, setText] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className="ui form">
          <div className={`${styles.inputContainer} field`}>
            <label>Enter Text (Max 100 characters)</label>
            <textarea
              cols="30"
              rows="10"
              maxLength="100"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <Dropdown
          options={languageOptions}
          label="Select a language"
          selected={language}
          onSelectedChange={setLanguage}
        />
      </div>
      <div className={styles.cardContainer}>
        <h5 className="ui header">Output</h5>
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Translate;
