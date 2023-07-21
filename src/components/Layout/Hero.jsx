import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      style={{ "--image-url": `url(${heroImage})` }}
      className="h-[250px] md:h-[400px] bg-[image:var(--image-url)] bg-cover bg-center"
    >
      <div className="w-full h-full bg-[rgba(0,0,0,0.25)] backdrop-blur-[2px] flex items-center justify-center">
        <div className="w-full md:w-[80%] xl:w-[70%]">
          <h1 className="text-white text-3xl md:text-5xl text-center font-[600] drop-shadow tracking-tight md:leading-[3.5rem]">
            Taste the Flavors of India -<br /> Where Tradition Meets Spice!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
