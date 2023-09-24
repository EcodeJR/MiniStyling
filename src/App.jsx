import { useState, useEffect } from 'react'
{
  /**
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/}
{/*import TextReveal from "./components/textReveal"*/}
import MasoryEffect from "./components/MasoryEffect"
{/*import GoofyEffect from "./components/GoofyEffect"*/}
import Courasel from "./components/Courasel"
import MaqueeScrolling from "./components/MaqueeScrolling"
import FocusNavigation from "./components/FocusNavigation"
import Loading from './components/Loading'
import ViewSize from './components/ViewSize'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 18000);
}, []);

  return (
    
    
    <>
    {loading ? (<Loading />) :
      (
        <section className='w-full h-fit flex flex-col items-center justify-center overflow-hidden'>
          <FocusNavigation />
          <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-gray-700 my-10'>Little Tailwind Tips and Trick</h1>
          <ViewSize />
          {/*<TextReveal />*/}
          <MasoryEffect />
          {/*<GoofyEffect />*/}
          <Courasel />
          <MaqueeScrolling />
        </section>
      )
      }
    </>
  )
}

export default App
