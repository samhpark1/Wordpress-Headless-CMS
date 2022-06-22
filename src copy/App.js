import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import EditPage from "./components/pages/EditPage";
import WebPreviewPage from "./components/pages/WebPreviewPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/web-preview" element={<WebPreviewPage />} />
          <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
