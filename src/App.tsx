import { Box } from '@chakra-ui/react'
import Hero from './components/hero'
import Navbar from './components/navbar'

function App() {
  return (
    <Box mt={10}>
      <Navbar />
      <Box display="flex" alignItems="center" justifyContent="center" mt={10} width={"100%"} height={"100%"}>
        <Hero />
      </Box>
    </Box>
  )
}

export default App