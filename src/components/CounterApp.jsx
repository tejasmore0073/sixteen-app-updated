import Decrement from './Decrement'
import DisplayValue from './DisplayValue'
import Increment from './Increment'

const CounterApp = () => {
  return (
    <div className='flex justify-center items-center gap-20 h-[70vh]'>
        <Decrement />
        <DisplayValue />
        <Increment />
    </div>
  )
}

export default CounterApp