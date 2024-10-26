import Image from './components/Image'
import SignUpForm from './components/SignUpForm'

function App() {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:w-1/3 text-center'>
        <Image />
      </div>
      <div className='lg:w-2/3 lg:my-0 my-5 mx-5 text-center flex flex-col justify-center items-center'>
        <SignUpForm />
      </div>
    </div>
  )
}

export default App
