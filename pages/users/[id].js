// This will generate an user details page for each user in the fetched array
// It will only run during build in production, it will not be called during runtime. You can validate code written inside getStaticPaths is removed from the client-side bundle
// Generates `/users/1`, `/users/2` and so on.
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths, // [{}, {}, {params: {id: 1}}]
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
// It will runs this function #users times by getStaticPaths
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { user: data }
  }
}

const Detail = ({ user }) => {
  return ( 
    <div>
      <h1>{ user.name }</h1>
      <p>{ user.email }</p>
      <p>{ user.website }</p>
      <p>{ user.address.city }</p>
    </div>
   );
}
 
export default Detail;