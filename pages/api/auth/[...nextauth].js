import NextAuth from 'next-auth';
import GoogleProvider from `next-auth/providers/google`
import EmailProvider from `next-auth/providers/email`
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
]
