import Head from 'next/head';
import Link from 'next/link';
//style
import styles from '../../styles/Ninjas.module.css';

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | List </title>
        <meta name="keywords" content="about"/>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ ninja.name }</h3>
            </a>
          </Link>
        ))} 
      </div>
    </>
  )
}

export const getStaticProps = async () => {

  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // if (!data) {
  //   return {
  //     notFound: true
  //   }
  // }

  return {
    props: { ninjas: data }
  }
}

export default Ninjas;
