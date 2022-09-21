import type { GetServerSideProps, NextPage } from 'next';

type RedirectProps = {
  error?: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.error) {
    return {
      props: {
        error: 'La connexion a échoué veuillez rééssayer ultérierement.'
      } 
    }
  }

  if (context.query.code) {
    console.log(context.query.code);

    await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      body: JSON.stringify({ code: context.query.code }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return { props: {} }
}

const Redirect: NextPage<RedirectProps> = ({ error }) => {
  return (
    <>
      {error && <h2>{error}</h2>}
    </>
  )
}

export default Redirect
