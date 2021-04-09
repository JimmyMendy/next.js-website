import Link from 'next/link';
import { useEffect } from 'react'
import { useRouter } from 'next/router';
//Style
import styles from '../styles/404.module.css'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className={styles.notfound}>
      <h1>Oooops...</h1>
      <h2>That page cannont be found.</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  )
}

export default NotFound
