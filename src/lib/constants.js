export const refs = [
  { 
    name: 'Shelf', 
    model: '/half-shelf.glb',
    height: 2, 
    width: 0.5
  },
  { 
    name: 'Full Shelf', 
    model: '/full-shelf.glb',
    height: 2, 
    width: 1 
  },
  { 
    name: 'Cage Grid', 
    model: '/cage.glb',
    height: 20, 
    width: 0.5,
    noBtn: true
  },
  { 
    name: 'T-Shirt', 
    model: '/front.glb',
    height: 16, 
    width: 0.5 
  },
  { 
    name: 'Hoodie', 
    model: '/front.glb',
    height: 18, 
    width: 0.5 
  },
  { 
    name: 'Waterfall T-Shirt', 
    model: '/waterfall.glb',
    height: 20, 
    width: 0.5 
  },
  { 
    name: 'Waterfall Hoodie',
    model: '/waterfall.glb',
    height: 22, 
    width: 0.5 
  },
  { 
    name: 'T-Shirt Bar', 
    model: '/half-bar.glb',
    height: 18, 
    width: 0.5 
  },
  { 
    name: 'Pants Bar', 
    model: '/half-bar.glb',
    height: 22, 
    width: 0.5 
  },
  { 
    name: 'T-Shirt Full Bar', 
    model: '/full-bar.glb',
    height: 18, 
    width: 1 
  },
  { 
    name: 'Pants Full Bar', 
    model: '/full-bar.glb',
    height: 22, 
    width: 1 
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
    img: "plant.jpg"
  },
  { 
    name: 'Socks',
    height: 6, 
    width: 0.08,
    img: 'https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/s/t/stussyblack.jpg'
  },
]

export const pieceMenu = [
  {
    name: "Half Bar Shelf",
    model: "/half-bar-shelf.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: "18",
        width: "0.5"
      }
    ]
  }
]

export const initial = [
  {
    "name":"T-Shirt",
    "model":"/front.glb",
    "height":16,
    "width":0.5,
    "colour":"hsl(251, 40%, 70%)",
    "coord":{
      "x":60,
      "y":0
    }
  },
  {
    "name":"Waterfall T-Shirt",
    "model":"/waterfall.glb",
    "height":20,
    "width":0.5,
    "colour":"hsl(357, 40%, 70%)",
    "coord":{
      "x":-60,
      "y":0
    }
  },
  {
    "name":"Cage Grid",
    "model":"/cage.glb",
    "height":20,
    "width":0.5,
    "noBtn":true,
    "colour":"hsl(283, 40%, 70%)",
    "coord":{
      "x":-60,
      "y":210
    }
  },
  {
    "name":"Full Shelf",
    "model":"/full-shelf.glb",
    "height":2,
    "width":1,
    "colour":"hsl(274, 40%, 70%)",
    "coord":{
      "x":0,
      "y":190
    }
  },
  {
    "name":"Waterfall T-Shirt",
    "model":"/waterfall.glb",
    "height":20,
    "width":0.5,
    "colour":"hsl(212, 40%, 70%)",
    "coord":{
      "x":60,
      "y":210
    }
  },
  {
    "name":"T-Shirt Full Bar",
    "model":"/full-bar.glb",
    "height":18,
    "width":1,
    "colour":"hsl(330, 40%, 70%)",
    "coord":{
      "x":0,
      "y":410
    }
  }
]