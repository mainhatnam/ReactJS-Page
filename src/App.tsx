import { BrowserRouter, Routes, Route } from "react-router";
import { client,cms } from "@/router";
import MasterLayout from "@/master_layout/master_layout";
import CmsMasterLayout from "./master_layout/cms/master_layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()
function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
