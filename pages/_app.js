import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>
        <Component {...pageProps} />
        <Footer />
      </Header>
    </>
  );
}

export default MyApp;
