import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex gap-8 justify-center items-center">
  <div>
    <img src="../../../public/images/100x.svg" />
  </div>   
  <div className="flex flex-col text-neutral-50 px-7 items-start">
    <h1 className="text-3xl font-extrabold leading-normal font-inter h-14">Happening now</h1>
    <p className="font-inter text-base font-medium leading-normal">Join today</p>
    <button className="w-80 justify-center rounded-4xl py-2 px-6 bg-neutral-50 text-neutral-1000 backdrop:blur-3xl shadow-3xl font-bold text-center hover:bg-neutral-200 my-10 self-stretch flex">Create account</button>
    <div className="flex items-center self-center">
      <div className="border-b w-32 border-neutral-700" />
      <div className="px-2 text-neutral-50">or</div>
      <div className="border-b w-32 border-neutral-700" />
    </div>
    <p className="text-15 font-inter font-normal leading-normal mt-10 h-6">Already have an account?</p>
    <button className="w-80 flex justify-center self-stretch rounded-4xl py-2 px-6 bg-neutral-1000 text-twitter-blue border border-button-stroke backdrop:blur-3xl shadow-3xl font-bold text-center mt-8">Sign in</button>
  </div>
</main>
  )
}
export default App
