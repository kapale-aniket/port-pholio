import { useState } from 'react';
import Header from './component/Heder';
import Banner from './component/Banner';
import About from './component/About'
import Skills from './component/Skills';
import Footer from './component/Footer';



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header />
<Banner />
<About/>
<Skills/>
<Footer />
    </>
  );
}

export default App;
