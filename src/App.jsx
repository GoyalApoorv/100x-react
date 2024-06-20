<<<<<<< HEAD
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccountStep1 from "./pages/login/CreateAccountStep1";
import CreateAccountStep2 from "./pages/login/CreateAccountStep2";
import CreateAccountStep3 from "./pages/login/CreateAccountStep3";
import CreateAccountStep4 from "./pages/login/CreateAccountStep4";
import { Base } from "./pages/login/templates";
import { URLs } from "./constants";
import HomeFeed from "./pages/home-feed/Home";
import Profile from "./pages/user-profile/UserProfile";
import EditProfile from "./pages/user-profile/EditProfile";
import ComposeTweet from "./pages/compose-tweet/ComposeTweet";
import { TweetProvider } from "./contexts/index";
import { UserProvider } from "./contexts/UserContext";

const router = createBrowserRouter([
  {
    path: URLs.home,
    element: <Home />,
  },
  {
    path: URLs.signUp,
    element: <Base />,
    children: [
      { path: URLs.signUpStep1, element: <CreateAccountStep1 /> },
      { path: URLs.signUpStep2, element: <CreateAccountStep2 /> },
      { path: URLs.signUpStep3, element: <CreateAccountStep3 /> },
      { path: URLs.signUpStep4, element: <CreateAccountStep4 /> },
    ],
  },
  {
    path: URLs.signUpStep1,
    element: (
      <Base step="1">
        <CreateAccountStep1 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep2,
    element: (
      <Base step="2">
        <CreateAccountStep2 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep3,
    element: (
      <Base step="3">
        <CreateAccountStep3 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep4,
    element: (
      <Base step="4">
        <CreateAccountStep4 />
      </Base>
    ),
  },
  {
    path: URLs.feed,
    element: <HomeFeed />,
  },
  {
    path: URLs.profile,
    element: <Profile />,
  },
  {
    path: URLs.edit,
    element: <EditProfile />,
  },
  {
    path: URLs.compose,
    element: <ComposeTweet />,
  },
]);

export default function App() {
  return (
    <UserProvider>
      <TweetProvider>
        <div className="bg-neutral-1000 ">
          <RouterProvider router={router} />
        </div>
      </TweetProvider>
    </UserProvider>
  );
}
=======
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
>>>>>>> 50eb6ff7d92292f767d8dd9b3a89dac1ce90b2b4
