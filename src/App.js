import { Route, Routes } from 'react-router-dom';
import ImageGenerator from './component/ImageGenerator';


function App() {
  return (
    <>
   
    <div className="">

      <Routes>
        <Route path="/" element={<ImageGenerator/>} />
      </Routes>
    </div>

   
    </>
  );
}

export default App;
