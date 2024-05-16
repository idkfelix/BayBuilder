export const pieceMenu = [
  {
    name: "Shelf",
    noGroup: true,
    nodes: [
      {
        name: "Half Shelf",
        icon: "/icons/half-shelf.svg",
        model: "/models/half-shelf.glb",
        height: 2,
        width: 0.5
      },
      {
        name: "Full Shelf",
        icon: "/icons/full-shelf.svg",
        model: "/models/full-shelf.glb",
        height: 2,
        width: 1
      },
    ]
  },
  {
    name: "Front Facing",
    icon: "/icons/front.svg",
    model: "/models/front.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: 16,
        width: 0.5
      },
      {
        name: "Hoodie",
        height: 18,
        width: 0.5
      },
      {
        name: "Pant",
        height: 22,
        width: 0.5
      },
      {
        name: "Short",
        height: 12,
        width: 0.5
      },
    ]
  },
  {
    name: "Waterfall",
    icon: "/icons/waterfall.svg",
    model: "/models/waterfall.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: 20,
        width: 0.5
      },
      {
        name: "Hoodie",
        height: 22,
        width: 0.5
      },
      {
        name: "Pant",
        height: 26,
        width: 0.5
      },
      {
        name: "Short",
        height: 16,
        width: 0.5
      },
    ]
  },
  {
    name: "Half Bar Shelf",
    icon: "/icons/half-bar-shelf.svg",
    model: "/models/half-bar-shelf.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: 18,
        width: 0.5
      },
      {
        name: "Hoodie",
        height: 20,
        width: 0.5
      },
      {
        name: "Pant",
        height: 24,
        width: 0.5
      },
      {
        name: "Short",
        height: 14,
        width: 0.5
      },
    ]
  },
  {
    name: "Full Bar Shelf",
    icon: "/icons/full-bar-shelf.svg",
    model: "/models/full-bar-shelf.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: 18,
        width: 1
      },
      {
        name: "Hoodie",
        height: 20,
        width: 1
      },
      {
        name: "Pant",
        height: 24,
        width: 1
      },
      {
        name: "Short",
        height: 14,
        width: 1
      },
    ]
  },
  {
    name: "Half Bar",
    icon: "/icons/half-bar.svg",
    model: "/models/half-bar.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: 17,
        width: 0.5
      },
      {
        name: "Hoodie",
        height: 19,
        width: 0.5
      },
      {
        name: "Pant",
        height: 23,
        width: 0.5
      },
      {
        name: "Short",
        height: 13,
        width: 0.5
      },
    ]
  },
  {
    name: "Full Bar",
    icon: "/icons/full-bar.svg",
    model: "/models/full-bar.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: 17,
        width: 1
      },
      {
        name: "Hoodie",
        height: 19,
        width: 1
      },
      {
        name: "Pant",
        height: 23,
        width: 1
      },
      {
        name: "Short",
        height: 13,
        width: 1
      },
    ]
  },
  {
    name: "Accessories",
    noGroup: true,
    nodes: [
      { 
        name: 'Cage Grid',
        grid: true,
        model: '/models/cage.glb',
        height: 20, 
        width: 0.5,
        noBtn: true
      },
      { 
        name: 'Hat',
        height: 3, 
        width: 0.15
      },
      { 
        name: 'Deck',
        height: 14, 
        width: 0.2
      },
      { 
        name: 'Backpack',
        height: 10, 
        width: 0.3
      },
      { 
        name: 'Plant',
        height: 6, 
        width: 0.2,
        img: "/plant.jpg"
      },
      { 
        name: 'Socks',
        height: 6, 
        width: 0.08,
        img: 'https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/s/t/stussyblack.jpg'
      },
    ]
  }
]

export const initial = [{"name":"Full Shelf","icon":"/icons/full-shelf.svg","model":"/models/full-shelf.glb","height":2,"width":1,"colour":"hsl(346, 40%, 70%)","coord":{"x":0,"y":80}},{"name":"Cage Grid","grid":true,"model":"/models/cage.glb","height":20,"width":0.5,"noBtn":true,"colour":"hsl(296, 40%, 70%)","coord":{"x":60,"y":100}},{"name":"Hoodie","height":20,"width":0.5,"icon":"/icons/half-bar-shelf.svg","model":"/models/half-bar-shelf.glb","colour":"hsl(13, 40%, 70%)","coord":{"x":-60,"y":340},"img":"https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/p/e/pearls-og-po-hood-navy-sky-blue.jpg"},{"name":"Half Shelf","icon":"/icons/half-shelf.svg","model":"/models/half-shelf.glb","height":2,"width":0.5,"colour":"hsl(107, 40%, 70%)","coord":{"x":60,"y":340}},{"name":"Plant","height":6,"width":0.2,"img":"/plant.jpg","colour":"hsl(124, 40%, 70%)","coord":{"x":-70,"y":20}},{"name":"Plant","height":6,"width":0.2,"img":"/plant.jpg","colour":"hsl(314, 40%, 70%)","coord":{"x":0,"y":20}},{"name":"Plant","height":6,"width":0.2,"img":"/plant.jpg","colour":"hsl(228, 40%, 70%)","coord":{"x":70,"y":20}},{"name":"T-Shirt","height":20,"width":0.5,"icon":"/icons/waterfall.svg","model":"/models/waterfall.glb","colour":"hsl(320, 40%, 70%)","coord":{"x":-60,"y":100},"img":"https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/p/e/pearls-og-tshirt-royal-white.png"},{"name":"Full Shelf","icon":"/icons/full-shelf.svg","model":"/models/full-shelf.glb","height":2,"width":1,"colour":"hsl(214, 40%, 70%)","coord":{"x":0,"y":300}},{"name":"Pant","height":22,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(296, 40%, 70%)","coord":{"x":60,"y":360},"img":"https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/p/o/polar-big-boy-jeans-silver-black-1.jpeg"}]