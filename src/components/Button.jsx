

const Button = ({label, iconURL, backgroundColor, textColor,borderColor, fullWidth}) => {
  return (
    <button  className={` flex justify-center items-center gap-2 px-7 py-4 border font-montserrat bg-coral-red rounded-full text-lg leading-none text-white
    ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}` 
    :"bg-coral-redtext-white border-coral-red"}
    rounded-full ${fullWidth && 'w-full'} 
    `}>
        {label}
        {iconURL && <img src={iconURL}
        alt=""
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button