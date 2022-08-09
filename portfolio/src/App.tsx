
import Sobre from "./pages/sobre"

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Jobs from "./pages/Jobs"
import Expertise from "./pages/Expertise"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="Expertise" element={<Expertise />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
