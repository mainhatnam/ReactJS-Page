import { BrowserRouter, Routes, Route } from "react-router";
import { publicRoutes } from "@/router";
import MasterLayout from "@/master_layout/master_layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((item, key) => {
          return (
            <Route
              key={key}
              path={item.path}
              element={
                <MasterLayout>
                  <item.component />
                </MasterLayout>
              }/>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
