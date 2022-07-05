import {Route, Routes} from "react-router-dom";
import {useState} from 'react'
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import EditPage from "./components/pages/EditPage";
import WebPreviewPage from "./components/pages/WebPreviewPage";
import AllPages from "./components/pages/AllPages";
import ContactPage from "./components/pages/ContactPage";
import LoginModal from "./components/pages/LoginModal";
import Backdrop from "./components/pages/Backdrop";
import "./index.css";

function App() {

    const [enteredLogin, setEnteredLogin] = useState(false);

    function LoginHandler(){
        setEnteredLogin(true);
    }

    return (
      <div>
          {!enteredLogin && <LoginModal onFinish={LoginHandler}/>}
          {!enteredLogin && <Backdrop onFinish={null}/>}
          <Layout>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/edit" element={<EditPage />} />
                  <Route path="/web-preview" element={<WebPreviewPage />} />
                  <Route path="/allpages" element={<AllPages />} />
                  <Route path="/contact" element={<ContactPage />} />
              </Routes>
          </Layout>
      </div>
  );
}

export default App;
