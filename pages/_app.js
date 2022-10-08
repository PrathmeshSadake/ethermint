import { ThemeProvider } from "next-themes";
import Script from "next/script";

import { Footer, Navbar } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='dark:bg-nft-dark bg-white'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Script
        src='https://kit.fontawesome.com/754cd99e93.js'
        crossorigin='anonymous'
      />
    </ThemeProvider>
  );
}

export default MyApp;
