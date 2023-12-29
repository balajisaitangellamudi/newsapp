import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nav_Bar";
import News from "./Components/News";

const App = () => {
  const PageSize = 9;
  const apikey = "283a33a4d8b5455a805e3e4c818d73b6";

  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  PageSize={PageSize}
                  country="in"
                  category="general"
                  apikey={apikey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  PageSize={PageSize}
                  country="in"
                  category="business"
                  apikey={apikey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  PageSize={PageSize}
                  country="in"
                  category="entertainment"
                  apikey={apikey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  PageSize={PageSize}
                  country="in"
                  category="health"
                  apikey={apikey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  PageSize={PageSize}
                  country="in"
                  category="science"
                  apikey={apikey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  PageSize={PageSize}
                  country="in"
                  category="sports"
                  apikey={apikey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  PageSize={PageSize}
                  country="in"
                  category="technology"
                  apikey={apikey}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
