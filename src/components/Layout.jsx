import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
