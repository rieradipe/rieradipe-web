import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
