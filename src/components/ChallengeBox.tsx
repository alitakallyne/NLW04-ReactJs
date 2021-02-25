import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const {activeChallenge, resetChallenge,completedChallengs} = useContext(ChallengesContext);

    const {resetCountdown} = useContext(CountdownContext);

    function handleChallegeSucceded(){
        completedChallengs();
        resetCountdown();
    }

    function handleChallegeFailed(){
        resetChallenge();
        resetCountdown();
    }
    return(
        <div className={styles.challengeBoxContainer} >

            { activeChallenge ? (
                <div className={styles.challengeActive} >
                    <header> Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={ `icons/${activeChallenge.type}.svg` }alt=""/>
                        <strong>Novo desafio</strong>
                        <p> {activeChallenge.description} </p>
                    </main>
                     
                     <footer>
                         <button  
                         type="button"
                         className={styles.challengeFailedButton}
                         onClick={handleChallegeFailed}
                         >
                            Falhei
                         </button>

                         <button
                          type="button"
                          className={styles.challengeSucceededButton}
                          onClick={handleChallegeSucceded}
                         >
                            Completei
                        </button>
                     </footer>
                </div>
            ):
             (
                <div className={styles.challengeBoxNotActive}>
                    <strong> Finalize um ciclo para receber desafios</strong>
                    <p>
                         <img src="icons/level-up.svg" alt="Level Up"/>

                         Avance de level completando desafios...
                    </p>
                </div>

             )}

            
        </div>
    )
}