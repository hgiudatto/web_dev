import Head from "next/head";
import Container from "../components/Container";
import fect from "isomorphic-fetch";
import Users from "../components/Users";

const Index = (props) => {
  console.log(props);
  return (
    <Container>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>
      <h1>Next</h1>
      <Users users={props.users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return { users: data.data };
};

export default Index;
