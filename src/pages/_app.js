import "../styles/index.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Messanger from "../components/Messanger";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>HIT</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/logo192.png" rel="icon" type="image/png" />
        <link href="/icons/logo512.png" rel="icon" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <main className="text-gray-700">
        <Navbar />
        <div className="pt-[4.9rem]">
          <Component {...pageProps} />
        </div>
        <Footer />
        <Messanger />
      </main>
    </>
  );
};

export default App;
