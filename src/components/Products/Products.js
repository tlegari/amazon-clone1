import React from 'react';
import '../Products/Products.css';
import Product from './Product/Product';

const Products = () => {
  return (
    <>
     <div className='products-row'>
      <Product id='1'
       title='Xbox Core Wireless Gaming Controller – Deep Pink Series X|S, One, Windows PC, Android, and iOS'
       image='https://m.media-amazon.com/images/I/61hxzGfRpKL._AC_UL320_.jpg'
       rating={5}
       price={59.99}
      />
      <Product id='2'
       title='Gaming Headset for PC/PS4/PS5/Xbox One/Switch, Stereo Surround Sound Gaming Headphones with Noise Canceling Flexible Mic, Computer Headset with 3.5mm Jack(Pink)'
       image='https://m.media-amazon.com/images/I/41chXCbDUtL._AC_UF480,480_SR480,480_.jpg'
       rating={4}
        price={18.69}
      />
      <Product id='3'
       title='SAMA Gaming Keyboard 60 Percent, 61 Keys RGB Backlit Wired Keyboard, Waterproof Mini Compact Gaming Keyboard for PC/Mac Gamer, Travel, Easy to Carry on Business Trip - White Purple'
       image='https://m.media-amazon.com/images/I/71GRsGbu7bL._AC_UL320_.jpg'
       rating={3}
        price={9.99}
      />
    </div>
    <div className='products-row'>
     <Product id='4'
       title='SANSUI 24 Inch Gaming Monitor 180Hz, Computer Monitor with Speakers 1*DP 2*HDMI Ports, FHD 1080P 110% sRGB VESA Support Eye Cares (One HDMI Cable Included ES-G24F4S)'
       image='https://m.media-amazon.com/images/I/712huHel10L._AC_UY218_.jpg'
       rating={4}
        price={129.90}
      />
      <Product id='5'
       title='SM600 White Wireless Gaming Mouse,8000 DPI Tri-Modes BT5.1/Type-C Wired/2.4G Wireless Mouse with 2 Side Buttons, Programmable Macro Gamer Mouse with RGB Light for Laptop/PC/Mac'
       image='https://m.media-amazon.com/images/I/61nDTw3ZemL._AC_UY218_.jpg'
       rating={5}
        price={27.44}
      />
    </div>
    <div className='products-row'>
    <Product id='6'
       title='Gaming Chair with Pocket Spring, Fabric Office Chair Massage Computer Chair with Footrest, High Back Ergonomic Reclining Desk Chair Racing Game PC Chair Adjustable Armrest Headrest (Grey)'
       image='https://m.media-amazon.com/images/I/71I8VFCSIAL._AC_UL320_.jpg'
       rating={3}
        price={189.99}
      />
    </div>
    <div className='products-row'>
      <Product id='7'
       title='Gaming Microphone, USB PC Mic for Podcasts Videos, Streaming, Condenser Mic with Quick Mute, Tripod Stand, Pop Filter, RGB Indicator, Shock Mount, Rotate gain button, Compatible with PS4/5/PC'
       image='https://m.media-amazon.com/images/I/71QclY4ig4L._AC_UL320_.jpg'
       rating={4}
        price={26.25}
      />
      <Product id='8'
       title='CyberPowerPC Gamer Xtreme VR Gaming PC, Intel Core i5-13400F 2.5GHz, GeForce RTX 4060 8GB, 16GB DDR5, 1TB PCIe Gen4 SSD, WiFi Ready & Windows 11 Home (GXiVR8060A24)'
       image='https://m.media-amazon.com/images/I/71rPUJ72P5L._AC_UL320_.jpg'
       rating={4}
        price={899.99}
      />
      <Product id='9'
       title='Edifier G2000 32W PC Computer Speakers for Gaming Desktop PC Laptop Mac Computer Woofer Speakers Bluetooth USB 3.5mm AUX Inputs RGB Lights Multimedia Speakers Pink'
       image='https://m.media-amazon.com/images/I/51DxDks2C0L._AC_UL320_.jpg'
       rating={3}
        price={109.99}
      />
    </div>
    <div className='products-row'>
     <Product id='10'
       title='Kavaas Gamer Neon Sign, Game Controller Neon Sign for Gamer Room Decor - Gaming Neon Sign for Teen Boy Room Decor, LED Game Neon Sign Gaming Wall decor - Best Gamer Gifts for Boys, Kids'
       image='https://m.media-amazon.com/images/I/81JpvluTFwL._AC_UL320_.jpg'
       rating={4}
        price={29.99}
      />
      <Product id='11'
       title='Abstract Topographic Map White Grey Black Gaming Mouse Pad Long Mouse Pad Large Desk Mat 31.5 X 11.8 Inch Mousepad with Non-Slip Base Stitched Edge Keyboard Mat for Gaming Office'
       image='https://m.media-amazon.com/images/I/81RN5hRycYL._AC_UL320_.jpg'
       rating={3}
        price={9.99}
      />
    </div>
    </>
   
  )
}

export default Products;