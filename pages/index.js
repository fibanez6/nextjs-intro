import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name='keywords' content='users'></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Dolor sit incididunt pariatur fugiat consectetur minim ipsum. Culpa reprehenderit veniam consequat dolore eiusmod velit sit ullamco sunt. Reprehenderit dolore laborum laboris in Lorem est cupidatat reprehenderit consequat ad dolore. Anim eiusmod incididunt veniam nisi dolore occaecat sunt excepteur reprehenderit anim aliqua consequat.</p>
        <p className={styles.text}>Dolor sit incididunt pariatur fugiat consectetur minim ipsum. Culpa reprehenderit veniam consequat dolore eiusmod velit sit ullamco sunt. Reprehenderit dolore laborum laboris in Lorem est cupidatat reprehenderit consequat ad dolore. Anim eiusmod incididunt veniam nisi dolore occaecat sunt excepteur reprehenderit anim aliqua consequat.</p>

        <Link href="/users" className={styles.btn}>See Users Listing</Link>
      </div>
    </>
  )
}
