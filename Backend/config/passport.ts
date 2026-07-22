import passport from "passport"
import { Strategy } from "passport-google-oauth20"
import User from "../models/user.model"

passport.use(
    new Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: "/api/auth/google/callback"
    },
        async (accesToken, refreshToken, profile, done) => {

            const email = profile.emails?.[0]?.value
            let user = await User.findOne({ email })

            if (!user) {
                user = await User.create({
                    displayName: profile.displayName,
                    username: profile.emails?.[0]?.value.split("@")[0],
                    email,
                    avatar: profile.photos?.[0]?.value,
                    password: "",
                })
            }

            done(null, user)
        }
    )
)

export default passport