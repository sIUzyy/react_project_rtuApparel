
import CapItem from '../assets/webp-img/collection-cap.webp'
import TumblerItem from '../assets/webp-img/collection-tumb.webp'
import PatchItem from '../assets/webp-img/catPatch-3.webp'
import TshirtItem from '../assets/webp-img/navv-men-women.webp'
import PantsItem from '../assets/webp-img/nav-men-women.webp'
import ArkiItem from '../assets/webp-img/arki-item.webp'
import AccountancyItem from '../assets/webp-img/accountancy-item.webp'
import HandkerchiefItem from '../assets/webp-img/handkerchief-item.webp'
//ITEMS IN MAIN
const products = [
    {
      id: 1,
      name: 'CAP',
      // imageSrc: 'https://media.discordapp.net/attachments/1068480442602364931/1075667745238159411/image.png' ,
      imageSrc: CapItem,
      imageAlt: "RTU CAP.",
      price: '₱100',
      color: 'Black',
    },
    {
        id: 1,
        name: 'TUMBLER',
        // imageSrc: 'https://media.discordapp.net/attachments/1068480442602364931/1078599999073566791/a85e7982-3fb3-44c2-808f-c1d579706de0.png?width=836&height=557',
        imageSrc: TumblerItem,
        imageAlt: "RTU APPAREL TUMBLER.",
        price: '₱100',
        color: 'White',
      },
      {
        id: 1,
        name: 'ACCOUNTANCY MUG',
        // imageSrc: 'https://media.discordapp.net/attachments/1068480442602364931/1075687572019367966/white-glossy-mug-white-11oz-handle-on-left-63ede1f187394.png?width=671&height=671',
        imageSrc: AccountancyItem,
        imageAlt: "RTU ACCOUNTANCY MUG.",
        price: '₱100',
        color: 'Blue and White',
      },
      {
        id: 1,
        name: 'HANDKERCHIEF',
        // imageSrc: 'https://media.discordapp.net/attachments/1068480442602364931/1075674942043074621/all-over-print-bandana-white-s-front-63edd64d9cd0b.png?width=671&height=671',
        imageSrc: HandkerchiefItem,
        imageAlt: "RTU HANDKERCHIEF.",
        price: '₱100',
        color: 'White',
      },
      {
        id: 1,
        name: 'ARCHITECTURE MUG',
        // imageSrc: 'https://media.discordapp.net/attachments/1068480442602364931/1075684014976925707/white-glossy-mug-white-11oz-handle-on-left-63eddeb27df6f.png?width=671&height=671',
        imageSrc: ArkiItem,
        imageAlt: "RTU ARCHITECTURE MUG.",
        price: '₱100',
        color: 'Blue and White',
      },
      {
        id: 1,
        name: 'P.E T-SHIRT',
        // imageSrc: 'https://media.discordapp.net/attachments/1068480442602364931/1078889972695838730/user-uniform.png',
        imageSrc: TshirtItem,
        imageAlt: "RTU P.E T-SHIRT.",
        price: '₱100',
        color: 'Assorted',
      },
      {
        id: 1,
        name: 'P.E PANTS',
        // imageSrc: 'https://media.discordapp.net/attachments/1068480442602364931/1078890910542217257/Untitled_design__10_-removebg-preview.png',
        imageSrc: PantsItem,
        imageAlt: "RTU P.E PANTS.",
        price: '₱100',
        color: 'Assorted',
      },
      {
        id: 1,
        name: 'RTU PATCH',
        // imageSrc: 'https://cdn.discordapp.com/attachments/1068480442602364931/1075671916276351006/image.png',
        imageSrc: PatchItem,
        imageAlt: "RTU PATCH.",
        price: '₱100',
        color: 'Assorted',
      },
    
    // More products...
  ]
  
  export default function Items() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h2>
          <p className="mt-1 text-base md:text-lg text-gray-500">Find your perfect fit for the classroom with RTU Apparel's wide selection of school uniforms items, available online now.</p>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                     
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      
                    </h3>
                   
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  