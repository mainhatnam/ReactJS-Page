import { BrowserRouter, Routes, Route } from "react-router";
import { client,cms } from "@/router";
import MasterLayout from "@/master_layout/master_layout";
import CmsMasterLayout from "./master_layout/cms/master_layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {client.map((item, key) => {
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

        {cms.map((item, key) => {
          return (
            <Route
              key={key}
              path={item.path}
              element={
                <CmsMasterLayout>
                  <item.component />
                </CmsMasterLayout>
              }/>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
