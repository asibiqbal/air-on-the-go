
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'


const getCountries = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
function App() {

  return (
    <>
    <Suspense fallback={<h4>Loading Countries</h4>}>
      <Countries getCountries={getCountries}></Countries>
    </Suspense>
    </>
  )
}

export default App
