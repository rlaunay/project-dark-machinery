import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {  }
  }
}

const Admin: NextPage = () => {
  return (
    <>
      <h1>Admin</h1>
    </>
  )
}

export default Admin
