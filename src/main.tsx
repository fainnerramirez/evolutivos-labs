import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@chakra-ui/react/preset"
import React from "react"
import ReactDOM from "react-dom/client"
import OrbitingCirclesDemo from "./components/orbit.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system} >
      <OrbitingCirclesDemo />
    </ChakraProvider>
  </React.StrictMode>,
)