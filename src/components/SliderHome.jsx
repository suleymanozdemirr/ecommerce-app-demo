import Slider from 'react-slick'
import Slide1 from '../assets/slider-1.png'
import Slide2 from '../assets/slider-2.png'
import { FaShoppingBag } from 'react-icons/fa'

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
      title: 'Tüm Erkek Giyim Ürünlerinde %50 indirim',
      mainTitle:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etoptio esse ratione voluptatibus vero laudantium facilis deleniti.',
    },
    {
      id: 2,
      img: Slide2,
      title: 'Tüm Kadın Giysilerinde %30 İndirim',
      mainTitle:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etoptio esse ratione voluptatibus vero laudantium facilis deleniti.',
    },
  ]
  return (
    <div className="p-18 pt-2">
      <Slider {...settings}>
        {sliderData.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute md:left-[70px] max-w-[40%] sm:w-[40%] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-white sm:bg-transparent p-10 sm:p-0 rounded-lg sm:rounded-none">
              <h2 className="text-black text-4xl font-bold lg:text-5xl">
                {item.title}
              </h2>
              <p className="text-base">{item.mainTitle}</p>
              <button className="flex items-center gap-2 bg-primary text-white text-lg hover:scale-105 duration-200 py-3 px-5 rounded-full">
                <FaShoppingBag />
                Show Now
              </button>
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
