import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Users.module.css";

// Never runs in the browser, only in build time
export const getStaticProps = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();

  return {
    props: { users: data }
  }
}

const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>User List | Users</title>
        <meta name='keywords' content='users'></meta>
      </Head>
      <div>
        <h1>All Users</h1>
        {users.map(user => (
          <Link key={user.id} className={styles.single} href={`users/${user.id}`}>
          <h3>{user.name}</h3>
          </Link>
        ))}
    </div>
    </>
  );
}

export default Users;