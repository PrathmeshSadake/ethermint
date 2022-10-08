import { ThemeProvider } from "next-themes";

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
    </ThemeProvider>
  );
}

export default MyApp;
