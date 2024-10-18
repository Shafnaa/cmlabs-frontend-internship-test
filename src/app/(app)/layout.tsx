import Footer from "./components/footer";
import NavBreadcrumb from "./components/nav-breadcrumb";
import Navbar from "./components/navbar";

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />

      <main className="container mx-auto py-4 space-y-4">
        <NavBreadcrumb />
        {children}
      </main>

      <Footer />
    </>
  );
};

export default AppLayout;
