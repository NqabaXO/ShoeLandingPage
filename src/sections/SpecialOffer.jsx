import Button from "../components/Button"
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <div className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br/>
          We Provide You with
          <span className="text-coral-red"> Super Quality </span> Shoes
      </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched 
          uqlity, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" textColor="text-black" borderColor="border-slate-gray" />
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer