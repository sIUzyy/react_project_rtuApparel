//PRIVATE API

//UNIFORM CATEGORY
// import PEShirt from '../assets/navv-men-women.png'
import PEShirt from '../assets/webp-img/navv-men-women.webp'

//PANTS CATERGORY
// import PEPants from '../assets/nav-men-women.png'
import PEPants from '../assets/webp-img/nav-men-women.webp'

//JERSEY CATERGORY
// import BlueThunder from '../assets/user-jersey.png'
import BlueThunder from '../assets/webp-img/user-jersey.webp'

//IDLACE CATERGORY
// import IDLace from '../assets/user-lace.png'
import IDLace from '../assets/webp-img/user-lace.webp'

//PATCH CATERGORY
// import Patch from '../assets/user-patch.png'
import Patch from '../assets/webp-img/user-patch.webp'

//ACCESSORIES CATERGORY
// import ToteBag from '../assets/collection-tote.png'
import ToteBag from '../assets/webp-img/collection-tote.webp'

// import Cap from '../assets/collection-cap.png'
import Cap from '../assets/webp-img/collection-cap.webp'

// import Handkerchief from '../assets/collection-handk.png'
import Handkerchief from '../assets/webp-img/collection-handk.webp'

// import Mug from '../assets/collection-eng.png'
import Mug from '../assets/webp-img/collection-eng.webp'

// import Tumbler from '../assets/collection-tumb.png'
import Tumbler from '../assets/webp-img/collection-tumb.webp'


export const RTUPRODUCTS = [
    //UNIFORM CATEGORY - SHIRT
    {
        id: 1,
        productName: "PE SHIRT",
        price: 100.00,
        productImage: PEShirt , 
        productVariation: ['TShirt', 'Package'],
        productSize: ['S','M', 'L', 'XL'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/PEShirt"
        
    },

    //PANTS CATEGORY - PANTS
    {
        id: 2,
        productName: "PE PANTS",
        price: 100.00,
        productImage: PEPants, 
        productVariation: ['Pants', 'Package'],
        productSize: ['S','M', 'L', 'XL'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/pants/PEPants"
        
    },

    //JERSEY CATEGORY - BLUE THUNDER
    {
        id: 3,
        productName: "RTU BLUE THUNDER",
        price: 100.00,
        productImage: BlueThunder, 
        productVariation: ['BLUE THUNDER', ''],
        productSize: ['S','M', 'L', 'XL'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/jersey/JerseyCart"
    },

    //ID LACE CATEGORY - RTU ID LACE
    {
        id: 4,
        productName: "ID LACE",
        price: 100.00,
        productImage: IDLace, 
        productVariation: ['RTU ID LACE', ''],
        productSize: ['----'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/IDlace/IDLace"
    },

    //PATCH CATEGORY - RTU PATCH
    {
        id: 5,
        productName: "RTU PATCH",
        price: 100.00,
        productImage: Patch, 
        productVariation: ['Black & Blue',
                           'Blue & White',
                           'White & Black',
                           'White & Blue',
        ],
        productSize: ['----'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/patch"
    },

    //ACCESSORY CATEGORY - TOTE BAG
    {
        id: 6,
        productName: "RTU TOTE BAG",
        price: 100.00,
        productImage: ToteBag,
        productVariation: ['Whisker Tote',
                           'Lunar Carryall',
                           'Summit Satchel',
                           'Oceanic Tote',
        ],
        productSize: ['----'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/totebag"
    },

    //ACCESSORY CATEGORY - CAP
    {
        id: 7,
        productName: "RTU CAP",
        price: 100.00,
        productImage: Cap,
        productVariation: ['White',
                           'Black', 
                           'Blue',
        ],
        productSize: ['----'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.", 
        path: "/RTUApparel/Cap"
    },

    //ACCESSORY CATEGORY - HANDKERCHIEF
    {
        id: 8,
        productName: "RTU HANDKERCHIEF",
        price: 100.00,
        productImage: Handkerchief, 
        productVariation: ['Blue','White'],
        productSize: ['----'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/Handkerchief"
    },

    //ACCESSORY CATEGORY - MUG
    {
        id: 9,
        productName: "RTU MUG",
        price: 100.00,
        productImage: Mug, 
        productVariation: ['CEAT', 'CBET'],
        productSize: ['20 ounce' , '30 ounce'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/Mug"
    },

    //ACCESSORY CATEGORY - TUMBLER
    {
        id: 10,
        productName: "RTU TUMBLER",
        price: 100.00,
        productImage: Tumbler, 
        productVariation: ['----'],
        productSize: ['20 ounce' , '30 ounce'],
        productManufacture: "Mandaluyong City, Metro Manila, Philippines.",
        path: "/RTUApparel/Tumbler"
    },

]