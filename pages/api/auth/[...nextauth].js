import NextAuth from "next-auth"
import { session } from "next-auth/client"
import Providers from "next-auth/providers"


export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/auth/signin',  // Displays signin buttons
  },
  callbacks: {
    async session(session, token) {
      // Add property to session, like an access_token from a provider.
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
      return session
    }
  }
})