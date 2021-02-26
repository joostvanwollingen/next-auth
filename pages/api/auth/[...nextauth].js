import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    pages: {
        signIn: '/auth/signin'
    },
    // Configure one or more authentication providers
    providers: [
        Providers.Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        }),
        Providers.Reddit({
            clientId: process.env.REDDIT_CLIENT_ID,
            clientSecret: process.env.REDDIT_CLIENT_SECRET
        })
        // ...add more providers here
    ],
});
