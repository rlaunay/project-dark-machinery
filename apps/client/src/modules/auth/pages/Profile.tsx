import { useSession } from "../context"

export default function Profile() {
  const { user } = useSession();
  
  if (!user) throw new Error('Not found')

  return (
    <>
      <h1>Profil</h1>
      <h2>{user.username}</h2>
    </>
  )
}