import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Main } from "./components/Main";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <div>
      <Layout>
        <Main />
      </Layout>
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
}

export default App;
