import {logo} from "../assets";

const Hero = () => {
  return (
    <div>
      <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
      <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
      
      <button>
      Github profile
      </button>
      
      </nav>
    
      </header>
    </div>
  )
}

export default Hero
