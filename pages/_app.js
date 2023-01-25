import "../globals.css";
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (<SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>

  )
};
export default MyApp;
