import logo from "./logo.svg";
import Pages from "./components/pages/Pages";
import Helmet from 'react-helmet';
import { useTranslation } from "react-i18next";

function App() {
  
  return (
    <div className="App">
 <Helmet>
      <title>t("title")</title>
      <meta name="description" content="MA.EXEXPRESS is a company that specializes in shipping furniture and cold parcels." />
      <meta property="og:title" content="MA.EXEXPRESS - Furniture and Cold Parcel Shipping" />
      <meta property="og:description" content="MA.EXEXPRESS is a company that specializes in shipping furniture and cold parcels." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://www.maexpress.com/" />
    </Helmet>
      <Pages />
    </div>
  );
}

export default App;
