import Image from './components/Image'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-1/3 text-center'>
        <Image />
      </div>
      <div className='w-2/3 flex flex-col justify-center items-center'>
        <SignUp />
      </div>
    </div>
  )
}

export default App
