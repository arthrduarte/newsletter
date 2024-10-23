import Image from './components/Image'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-1/2 text-center'>
        <Image />
      </div>
      <div className='w-1/2 text-center'>
        <SignUp />
      </div>
    </div>
  )
}

export default App
