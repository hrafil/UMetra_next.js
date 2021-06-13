import React from 'react';
import SearchField from '../components/Layout/searchbox.js';
import styles from '../styles/About.module.css';

const SearchPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>vyhledávání</h2>
      <div className={styles.search_field}>
        <SearchField />;
      </div>
    </div>
  );
};

export default SearchPage;
