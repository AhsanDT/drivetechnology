import Image from 'next/image'
import loader from "../../assets/loader2.gif"
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full'>
    <Image src={loader} alt="loader" />
    </div>

  )
}

export default Loader