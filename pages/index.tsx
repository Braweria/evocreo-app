import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { ElementStore } from 'util/ElementStore';

import styles from '../styles/Home.module.css';
import { ChooseElement } from '@/ChooseElement';
import { DisplayResults } from '@/DisplayResults';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EvoCreo App</title>
        <meta
          name="description"
          content="The EvoCreo App will help Evokers understand what advantages and disadvantages elements and classes have."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.mainHeading}>Creo App</h1>
        <ElementStore>
          <ChooseElement />
          <DisplayResults />
        </ElementStore>
      </main>

      {/* <footer className={styles.footer}>Created by Braweria</footer> */}
    </div>
  );
};

export default Home;
