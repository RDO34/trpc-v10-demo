import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TrpcQueryProvider } from "./providers";
import { Foo, Home } from "./pages";
import { Navbar } from "./components";
import { GobalStyles } from "./styles";

export const App = () => (
  <TrpcQueryProvider>
    <GobalStyles />

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foo" element={<Foo />} />
      </Routes>
    </BrowserRouter>
  </TrpcQueryProvider>
);
