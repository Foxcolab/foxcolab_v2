import nextAuth, {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/prisma";
import bcrypt from "bcrypt";



export const authOptions:NextAuthOptions = {
    session:{
        strategy:"jwt"
    },
    providers:[
        Credentials({
            name:"Credentials",
            credentials:{
                email:{label:"Email", type:"text"},
                password:{label:"Password", type:"password"},
            },
            async authorize(credentials:any){
                const user = await db.user.findUnique({
                    where:{
                        email:credentials.email
                    }
                });
                if(user){
                    const isValid = await bcrypt.compare(credentials.password,user.password as string);
                    return {id:user.id, email:user.email}
                }else {
                    return null;
                }

             
            }
        })
    ], 
   
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
          }
          return token;
        },
        async session({ session, token }) {
            
          if (token) {
            session.user.id = token.id;
          }
          return session;
        },
      },
}



const handler = nextAuth(authOptions);
export {handler as GET, handler as POST};
