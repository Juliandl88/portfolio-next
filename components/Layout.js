import Navbar from "./Navbar";
import Head from "next/head"

const Layout = ({ children }) => (
  <div>
  <Head>
    
  </Head>
    <Navbar />
    <main className="container py-4">
      {children}
    </main>
    
  </div>
);

export default Layout;
 