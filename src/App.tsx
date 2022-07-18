import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";
import { HeaderLayout } from "./components/templates/HeaderLayout";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderLayout />
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
