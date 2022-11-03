import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Users.module.css";

// This function gets called on each incoming request.
// This only runs on server-side and never runs on the browser
// export const getServerSideProps = async (context) => {
//   const req = context.req; // i.e for authentication
//   const res = context.res;

//   const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await resp.json();

//   // fetch data from an API
//   return {
//     // will be passed to the page component as props
//     props: { users: data }
//   }
// }

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in.
// This only runs on server-side and never runs on the browser
export const getStaticProps = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();

  return {
    // It will be passed to the page component as props
    props: { users: data },

    // It will attempt to re-generate the page after the deploment:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
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