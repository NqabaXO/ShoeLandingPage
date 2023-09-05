import { shoe8 } from "../assets/images"
import Button
 from "../components/Button"
const SuperQuality = () => {
  return (
    <div id="about-us" 
    className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br/>
          We Provide You with
          <span className="text-coral-red"> Super Quality</span> Shoes
      </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched 
          uqlity, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8}
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </div>
  )
}

export default SuperQuality