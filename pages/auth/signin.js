import { providers, signIn, useSession } from 'next-auth/client'

export default function SignIn({ providers }) {
    const [ session, loading ] = useSession()

  return (
    <>
        {session && <div>Logged in as {session.user.name} </div>}

      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
    </>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}