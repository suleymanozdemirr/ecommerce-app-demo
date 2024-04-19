import Slider from "react-slick"
import Slide1 from "../assets/slider-1.png"
import Slide2 from "../assets/slider-2.png"

const SliderHome = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const sliderData = [
    {
      id: 1,
      img: Slide1,
      title: "Tüm Erkek Giyim Ürünlerinde %50'ye varan indirim",
      mainTitle: "Erkek Giyim",
    },
    {
      id: 2,
      img: Slide2,
      title: "Tüm Kadın Giysilerinde %30 İndirim",
      mainTitle: "Kadın Giyim",
    },
  ]
  return (
    <div className="p-4 pt-2">
      <Slider {...settings}>
        {sliderData.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute left-[30px] md:left-[70px] sm:w-[20%] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-white sm:bg-transparent p-10 sm:p-0 rounded-lg sm:rounded-none">
              <h2 className="text-black text-4xl font-bold lg:text-5xl">
                {item.title}
              </h2>
              <h3>{item.mainTitle}</h3>
            </div>
            <img
              className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
              src={item.img}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderHome
