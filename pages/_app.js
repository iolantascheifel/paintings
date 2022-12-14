import App from "next/app";
import "../styles.scss";
import { AnimatePresence } from "framer-motion";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    // console.log(this.props);

    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;
