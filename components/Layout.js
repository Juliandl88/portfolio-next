import Navbar from "./Navbar";
import Head from "next/head"

const Layout = ({ children }) => (
  <div>
  <Head>
  <title>My portfolio</title>
  </Head>
    <Navbar />
    <main className="container py-4">
      {children}
    </main>
    
  </div>
);

export default Layout;
 