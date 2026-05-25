import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import customSystem from "../theme.ts"
import App from "./App.tsx"
import "./global.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={customSystem} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)