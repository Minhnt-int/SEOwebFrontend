import { url } from "inspector";

export interface Product {
    url: String;
    pic: String;
    hovPic: String;
    productUrl: String;
    productType: String;
    productName: String;
    productPrice: number;

}

export const STOCKS: Product[] = [

    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-canh-phang/",
        pic: "/assets/img/product-page/KB-01-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=647&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_01",
        productPrice: 3100000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-cong-nghiep-mau-01/",
        pic: "/assets/img/product-page/KB-01-2-01-300x300.jpg",
        hovPic: "",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=615&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_01 2",
        productPrice: 5400000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-kb_01-sa/",
        pic: "/assets/img/product-page/KB-01-SA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/436300384_320492404405599_8170504358963088823_n-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=644&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_01 SA",
        productPrice: 3250000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-kb_01-ss/",
        pic: "/assets/img/product-page/KB-01-SS-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=645&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_01 SS",
        productPrice: 3250000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-mau-01/",
        pic: "/assets/img/product-page/KB-01-2-CD-01-300x300.jpg",
        hovPic: "",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=619&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_02 CD",
        productPrice: 5600000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-kb_02-cn/",
        pic: "/assets/img/product-page/KB-02-CN-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=643&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_02 CN",
        productPrice: 3450000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-kb_02_pa/",
        pic: "/assets/img/product-page/KB-02-PA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=642&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_02 PA",
        productPrice: 3350000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-kb_02-pn-2/",
        pic: "/assets/img/product-page/KB-02-1-PN-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=646&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_02 PN",
        productPrice: 3800000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-kb_02-pn/",
        pic: "/assets/img/product-page/KB-02-PN-01-300x300.jpg",
        hovPic: "",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=714&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_02 PN",
        productPrice: 5800000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-mau-06/",
        pic: "/assets/img/product-page/KB-02-SA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=641&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_02 SA",
        productPrice: 3250000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-mau-05/",
        pic: "/assets/img/product-page/KB-03-K-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=640&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_03 K",
        productPrice: 3800000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-mau-04/",
        pic: "/assets/img/product-page/KB-03-PN-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=639&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_03 PN",
        productPrice: 3750000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-kb_04-2pa/",
        pic: "/assets/img/product-page/KB-04-2PA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=713&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_04 2PA",
        productPrice: 5500000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-mau-03/",
        pic: "/assets/img/product-page/KB-04-PA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=638&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_04 PA",
        productPrice: 3350000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-composite-mau-02/",
        pic: "/assets/img/product-page/KB-05-KPN-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=637&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_05 KPN",
        productPrice: 4000000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-chong-chay-mau-06/",
        pic: "/assets/img/product-page/KB-05-SA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=636&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_05 SA",
        productPrice: 3250000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-chong-chay-mau-05/",
        pic: "/assets/img/product-page/KB-06-CD-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=635&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_06 CD",
        productPrice: 3350000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-chong-chay-mau-04/",
        pic: "/assets/img/product-page/KB-06-KD-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=634&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_06 KD",
        productPrice: 3650000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-chong-chay-mau-03/",
        pic: "/assets/img/product-page/KB-06-SA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=633&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_06 SA",
        productPrice: 3350000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-chong-chay-mau-2/",
        pic: "/assets/img/product-page/KB-06-SOK-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=632&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_06 SOK",
        productPrice: 3500000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-cong-nghiep-mau-06/",
        pic: "/assets/img/product-page/KB-08-SA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=631&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_08 SA",
        productPrice: 3250000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-cong-nghiep-mau-05/",
        pic: "/assets/img/product-page/KB-09-SA-01-300x300.jpg",
        hovPic: "",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=630&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_09 SA",
        productPrice: 3250000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-cong-nghiep-mau-04/",
        pic: "/assets/img/product-page/KB-10-SA-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=629&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_10 SA",
        productPrice: 3250000
    },
    {
        url: "https://kinhbacfurniture.com/san-pham/cua-cong-nghiep-mau-03/",
        pic: "/assets/img/product-page/KB-W-02-01-300x300.jpg",
        hovPic: "/assets/img/product-page/1-01-300x300.jpg",
        productUrl: "https://kinhbacfurniture.com/cua-hang/?add_to_wishlist=628&amp;_wpnonce=d1483e73b5",
        productType: "Cửa gỗ nhựa Composite",
        productName: "Cửa Composite KB_W 02",
        productPrice: 3650000
    }
]