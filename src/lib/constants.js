export const pieceMenu = [
  {
    name: "Shelf",
    nodes: [
      {
        name: "Half Shelf",
        model: "/half-shelf.glb",
        height: "2",
        width: "0.5"
      },
      {
        name: "Full Shelf",
        model: "/full-shelf.glb",
        height: "2",
        width: "1"
      },
    ]
  },
  {
    name: "Half Bar Shelf",
    model: "/half-bar-shelf.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: "18",
        width: "0.5"
      },
      {
        name: "Hoodie",
        height: "20",
        width: "0.5"
      },
      {
        name: "Pant",
        height: "24",
        width: "0.5"
      },
      {
        name: "Short",
        height: "14",
        width: "0.5"
      },
    ]
  },
  {
    name: "Full Bar Shelf",
    model: "/full-bar-shelf.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: "18",
        width: "1"
      },
      {
        name: "Hoodie",
        height: "20",
        width: "1"
      },
      {
        name: "Pant",
        height: "24",
        width: "1"
      },
      {
        name: "Short",
        height: "14",
        width: "1"
      },
    ]
  },
  {
    name: "Half Bar",
    model: "/half-bar.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: "17",
        width: "0.5"
      },
      {
        name: "Hoodie",
        height: "19",
        width: "0.5"
      },
      {
        name: "Pant",
        height: "23",
        width: "0.5"
      },
      {
        name: "Short",
        height: "13",
        width: "0.5"
      },
    ]
  },
  {
    name: "Full Bar",
    model: "/full-bar.glb",
    nodes: [
      {
        name: "T-Shirt",
        height: "17",
        width: "1"
      },
      {
        name: "Hoodie",
        height: "19",
        width: "1"
      },
      {
        name: "Pant",
        height: "23",
        width: "1"
      },
      {
        name: "Short",
        height: "13",
        width: "1"
      },
    ]
  },
  {
    name: "Accessories",
    nodes: [
      { 
        name: 'Cage Grid', 
        model: '/cage.glb',
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