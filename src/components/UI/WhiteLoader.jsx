import Image from 'next/image'
import loader from "../../assets/loader.gif"
const WhiteLoader = () => {
  return (
    <div className='flex justify-center items-center'>
    <Image src={loader} alt="loader" />
    </div>

  )
}

export default WhiteLoader