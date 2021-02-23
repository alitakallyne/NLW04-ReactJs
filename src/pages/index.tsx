
import { CompletedChallengs } from "../components/CompletedChallenges";
import { Countdown } from "../components/Coubtdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title> Inicio | move.it </title>
      </Head>

     <ExperienceBar />

    <section>
      <div>
          <Profile />
          <CompletedChallengs />
          <Countdown />
      </div>

      <div>

      </div>
    </section>

    </div>
  )
}
