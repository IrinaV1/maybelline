import React,{useState} from 'react'
import '../../styles/global.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Card from './Card'
import Links from '../Links/Links'
import './card.css'

function Menu() {
  const Products = [
    {
      "id": "001",
      "name": "Тушь для ресниц Maybelline Lash Sensational",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/eye-makeup/mascara/lash-sensational-firework-washable-mascara/maybelline-lash-sensational-firework-mascara-washable-very-black-41554086287-p.jpg?rev=bec03548e7de4f5794867f2e039a5a22&cx=0&cy=0&cw=315&ch=472&hash=58675969CFB8241593E8CEF8F4C860CC",
      "price": "10.99"
    },
    {
      "id": "002",
      "name": "Тональный крем Maybelline Fit Me Matte + Poreless",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/face-makeup/foundation/fit-me-matte-poreless-foundation/warm-sun/maybelline-fit-me-matte-poreless-334-warm-sun-041554539639-av11.jpg?rev=2d8ce64adbf648c5bda965bd01b9ee3b&cx=0.25&cy=0.31&cw=315&ch=472&hash=C36F081CB28C26459D826118FAE6E3A2",
      "price": "8.49"
    },
    {
      "id": "003",
      "name": "Помада для губ Maybelline SuperStay Matte Ink",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/lips-makeup/lip-color/super-stay-matte-ink-liquid-lipstick/maybelline-lip-color-super-stay-matte-ink-romantic-041554496949-o.jpg?rev=8d766c1c89644d4c9267f98d1f006a07&cx=0&cy=0&cw=760&ch=1130&hash=E1D71165C8CF23A7BAB323D38592FD85",
      "price": "11.99"
    },
    {
      "id": "004",
      "name": "Консилер Maybelline Instant Age Rewind",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/face-makeup/foundation/instant-age-rewind-eraser-treatment-makeup/maybelline-iar-eraser-foundation-130-041554220070-c.jpg?rev=90978be5cc61485daac9687d8b7145f0&cx=0&cy=0&cw=315&ch=472&hash=20673566C2BEBBD5B7312DEEA1AECA67",
      "price": "7.99"
    },
    {
      "id": "005",
      "name": "Пудра Maybelline Fit Me Matte + Poreless",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/face-makeup/powder/fit-me-matte-poreless-powder/old-textures/old-pack-shots/maybelline-fitme-matte-poreless-powder-220-natural-beige-041554433814-primary_760x1130.jpg?rev=5bb33f2a838441fa8a62741f3be578ae&cx=0&cy=0&cw=315&ch=472&hash=87EED6A71C75BCB67227480E6F08AB28",
      "price": "6.99"
    },
    {
      "id": "006",
      "name": "Румяна Maybelline Fit Me Blush",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/face-makeup/blush-bronzer/fit-me-blush/maybelline-fitme-blush-40-peach-041554503142-c.jpg?rev=0809dc3bb6a44f67b4b744ab7b7c4776&cx=0&cy=0&cw=315&ch=472&hash=D93311D087C997784EC6EFC6D7D38E82",
      "price": "5.49"
    },
    {
      "id": "007",
      "name": "Бронзатор Maybelline City Bronzer",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/face-makeup/blush-bronzer/city-bronzer-powder-makeup-bronzer-contour-powder/maybelline-face-city-bronzer-contour-powder-100-041554562958-c.jpg?rev=6b9c23cfb8684fceb378d72b1f06ffd2&cx=0&cy=0&cw=315&ch=472&hash=C90B64E2EAA3C7D4C99A3ED7D2384D45",
      "price": "9.99"
    },
    {
      "id": "008",
      "name": "Подводка для глаз Maybelline Hyper Easy",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/eye-makeup/eyeliner/eyestudio-hyper-easy-liquid-eyeliner-eye-makeup/maybelline-hyper-easy-liquid-liner-black-041554578607-o.jpg?rev=9f4ec269810d46088d1e4de9c91bdfab&cx=0&cy=0&cw=315&ch=472&hash=A98FBFDC3F12C01998A1F03360D84E53",
      "price": "7.29"
    },
    {
      "id": "009",
      "name": "Карандаш для глаз Maybelline Master Drama",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/eye-makeup/eyeliner/lasting-drama-matte-eyeliner-makeup/maybelline-eyeliner-lasting-drama-carbon-matte-liner-jet-black-041554552560-o.jpg?rev=e3ba2105955b412a87be95d860b14691&cx=0&cy=0&cw=315&ch=472&hash=03675DD4E3BD83769FF59FFA8AFB0324",
      "price": "4.99"
    },
    {
      "id": "010",
      "name": "Палетка теней для век Maybelline The Nudes",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/eye-makeup/eye-shadow/the-nudes-palette/maybelline-eye-shadow-the-nudes-palette-041554419184-c.jpg?rev=-1&cx=0&cy=0&cw=760&ch=1130&hash=FD38861C7E05D15F28E50F9837419AF3",
      "price": "12.99"
    },
    {
      "id": "011",
      "name": "Помада для губ Maybelline Color Sensational",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/lips-makeup/lip-stick/color-sensational-the-mattes-matte-finish-lipstick-makeup/maybelline-lipstick-color-sensational-mattes-695-divine-wine-041554429961-o.jpg?rev=7f82255150d741059017067e370d282d&cx=0&cy=0&cw=760&ch=1130&hash=A4C68251248B2BF0AE2989E5803B2928",
      "price": "8.99"
    },
    {
      "id": "012",
      "name": "Бальзам для губ Maybelline Baby Lips",
      "image": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/lips-makeup/lip-balm/baby-lips-lip-makeup-crystal-moisturizing-lip-balm/maybelline-baby-lips-lip-balm-crystals-pink-quartz-041554424591-o.jpg?rev=cc842ce68f9543a9b5d561afdc7389e3&cx=0.25&cy=0.31&cw=760&ch=1138&hash=179396D649F79A8DBF8ABDA45DA74EE9",
      "price": "8.99"
    }]

    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

  return (
       <div className="wrapper">

 <Header />

              <main className="main">
                <div className="content_container">
                  <div className="links_header">
<Links activeLink={1}/>
<div className="cart-container">
  <button className='toggle-cart' onClick={toggleCart}>
<img className='links_image' src="images/icons8-48.png" alt="images" />
<span className="cart-badge"></span>
</button>
<aside className={isOpen ? 'cart-panel open' : 'cart-panel'}>
       
        <ul>
            <li>Товар 1</li>
            <li>Товар 2</li>
            <li>Товар 3</li>
        </ul>
    </aside>
</div>
</div>

<div className="card_row">
{Products.map(product =>(
<Card  
  key={product.id}
  name={product.name}
  images={product.image}
  price={product.price}
/>
))}
</div>
<div className="menu__main">
<h1>Stay on top of new products, promotions, events and more.</h1>
</div>
</div>
              </main>

<Footer />
      
              </div>
  )
}

export default Menu
