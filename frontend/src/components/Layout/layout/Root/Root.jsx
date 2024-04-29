import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Root({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Root;
