import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { DocsPage } from "./components/DocsPage";
import { SupportPage } from "./components/SupportPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "docs":
        return <DocsPage />;
      case "support":
        return <SupportPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}