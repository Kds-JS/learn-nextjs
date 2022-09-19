
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { v4 as uuidv4} from 'uuid';
import { useEffect, useState } from 'react';

export default function Home(props) {

  const [state,setState] = useState(false);

  // console.log(props);

  useEffect(() => {
    newWord()
  }, [])

  const newWord = () => {
    fetch('/api/vocapi')
    .then(response => response.json())
    .then(data => setState(data))
  }

  console.log(state);

  let randomWord;
  if(state){
    const  array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
    console.log(randomWord);
  }


  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      
      <div >
        <h1 className={styles.titre}>Mot au hasard</h1>

        {/* <table className={styles.tableau}>
          <tbody>
            {props.array.map((el,index) => (
              <tr key={uuidv4()}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <button className='btn btn-primary d-block m-auto' onClick={newWord}>Get RANDOM WORDS</button>

        <h2 className='text-center'>{randomWord}</h2>
      </div>
      
    </>
  )
}

export async function getStaticProps(){

  const data = await import('/data/vocabulary.json')
  const array = data.vocabulary;

  // if (array.length === 0){
  //   return{
  //     notFound: true
  //   }
  // }

  if (array.length === 0){
    return{
      redirect: {
        destination: '/isr'
      }
    }
  }
  
  return {
    props: {
      array
    }
  }
}
