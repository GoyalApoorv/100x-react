import Logo from '../../assets/100x-logo.svg'
import Button from '../../components/Button.jsx'


// Header
function Header() {
  return (
    <header className="fixed flex w-full items-center justify-center px-3 py-4">
      <img src={Logo} />
    </header>
  )
}

// Main content
function MainContent() {
  return (
    <main className="flex h-screen w-full items-center">
          <section className="flex w-full flex-col gap-10 px-7">
            <section className="flex flex-col gap-3">
              <h1 className="text-1.9rem font-bold leading-normal text-neutral-50">
                Happening now
              </h1>
              <p className="text-base font-medium leading-normal text-neutral-50">
                Join today.
              </p>
            </section>
            <a href="../login/create-account-step-1.html">
              <button className="shadow-button w-full rounded-full bg-neutral-50 px-6 py-2 text-base font-bold leading-normal text-neutral-1000 backdrop-blur-xl hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-25">
                Create account
              </button>
            </a>
            <div className="flex items-center">
              <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
              <span className="font-regular text-base leading-normal text-neutral-50">or</span>
              <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
            </div>
            <section className="flex flex-col gap-5">
              <p className="text-base font-medium leading-normal text-neutral-50">
                Already have an account?
              </p>
              <a href="../home-feed/index.html">
                <button className="flex w-full items-center justify-center gap-2.5 rounded-5xl border border-solid border-button-stroke px-6 py-2 shadow-3xl backdrop-blur-23.66">
                  <span className="text-center text-base font-bold not-italic leading-normal text-twitter-default">Sign in</span>
                </button>
              </a>
            </section>
          </section>
        </main>
  )
} 

function App() {
  return (
    <>
      <div className="bg-neutral-1000">
        <Header />
        <MainContent />
        <Button />
      </div>
    </>
  )
}

export default Create-account-step1;
