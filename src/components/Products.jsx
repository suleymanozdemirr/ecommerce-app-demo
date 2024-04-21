import { useState } from 'react'
import { FaBolt } from 'react-icons/fa'
import Slider from 'react-slick'
import product1 from '../assets/products/1.jpg'
import product2 from '../assets/products/2.jpg'
import product3 from '../assets/products/3.jpg'
import product4 from '../assets/products/4.jpg'
import product5 from '../assets/products/slide-1.png'
import product6 from '../assets/products/slide-2.png'
import product7 from '../assets/products/slide-3.png'
import product8 from '../assets/products/slide-4.png'

const productItems = [
  {
    discount: 50,
    cover: product1,
    title: 'Çanta',
    price: 100.0,
    star: 4,
  },
  {
    discount: 40,
    cover: product2,
    title: 'Çanta',
    price: 120.0,
    star: 4,
  },
  {
    discount: 40,
    cover: product3,
    title: 'Çanta',
    price: 150.0,
    star: 4,
  },
  {
    discount: 30,
    cover: product4,
    title: 'Pembe Çanta',
    price: 150.0,
    star: 4,
  },
  {
    discount: 50,
    cover: product5,
    title: 'Akıllı Saat',
    price: 700.0,
    star: 4,
  },
  {
    discount: 40,
    cover: product6,
    title: 'Ayakkabı',
    price: 600.0,
    star: 4,
  },
  {
    discount: 50,
    cover: product7,
    title: 'Ceket',
    price: 400.0,
    star: 4,
  },
  {
    discount: 20,
    cover: product8,
    title: 'Paket',
    price: 100.0,
    star: 4,
  },
]

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  )
}

const Products = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <section className="bg-[#f6f9fc] py-[50px] px-0">
        <div className="max-w-[90%] m-auto">
          <div className="flex items-center">
            <FaBolt />
            <h1>Flash Delas</h1>
          </div>
          <Slider {...settings}>
            {productItems.map((item) => {
              ;<div className="transition-all duration-500 py-0 px-5 hover:bg-[#ffe1e6] cursor-pointer">
                <div className="bg-[#fff] p-5 relative rounded-lg shadow-sm m-3 mt-10">
                  <div className="w-[30px] h-[30px] mt-[10px] object-contain">
                    <span className="absolute top-0 left-0 bg-[#e94560] py-1 px-2 text-xs rounded-[50px] text-[#fff] m-3">
                      {item.discount}% Off
                    </span>
                    <img src={item.cover} alt="" />
                  </div>
                </div>
              </div>
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Products
