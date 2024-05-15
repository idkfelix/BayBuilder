export const pieceMenu = [
  {
    name: "Shelf",
    noGroup: true,
    nodes: [
      {
        name: "Half Shelf",
        icon: "/icons/half-shelf.png",
        model: "/models/half-shelf.glb",
        height: 2,
        width: 0.5
      },
      {
        name: "Full Shelf",
        icon: "/icons/full-shelf.png",
        model: "/models/full-shelf.glb",
        height: 2,
        width: 1
      },
    ]
  },
  {
    name: "Front Facing",
    icon: "/icons/front.png",
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
    icon: "/icons/waterfall.png",
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
    icon: "/icons/half-bar-shelf.png",
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
    icon: "/icons/full-bar-shelf.png",
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
    icon: "/icons/half-bar.png",
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
    icon: "/icons/full-bar.png",
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
        icon: "/icons/cage.png",
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

export const initial = [
  {
    "name": "Full Bar Shelf T-Shirt",
    "height": 18,
    "width": 1,
    "icon": "/icons/full-bar-shelf.png",
    "model": "/models/full-bar-shelf.glb",
    "colour": "hsl(271, 40%, 70%)",
    "coord": {
      "x": 0,
      "y": 420
    },
    "img": "https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/p/e/pearlsgrn.png"
  },
  {
    "name": "Cage Grid",
    "model": "/models/cage.glb",
    "height": 20,
    "width": 0.5,
    "icon": "/icons/cage.png",
    "noBtn": true,
    "colour": "hsl(200, 40%, 70%)",
    "coord": {
      "x": -60,
      "y": 220
    }
  },
  {
    "name": "Half Shelf",
    "icon": "/icons/half-shelf.png",
    "model": "/models/half-shelf.glb",
    "height": 2,
    "width": 0.5,
    "colour": "hsl(335, 40%, 70%)",
    "coord": {
      "x": -60,
      "y": 200
    }
  },
  {
    "name": "Waterfall T-Shirt",
    "height": 20,
    "width": 0.5,
    "icon": "/icons/waterfall.png",
    "model": "/models/waterfall.glb",
    "colour": "hsl(252, 40%, 70%)",
    "coord": {
      "x": 60,
      "y": 20
    },
    "img": "https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/p/e/pearls_og_crew_ice_marle_1.png"
  },
  {
    "name": "Front Facing T-Shirt",
    "height": 16,
    "width": 0.5,
    "icon": "/icons/front.png",
    "model": "/models/front.glb",
    "colour": "hsl(118, 40%, 70%)",
    "coord": {
      "x": -60,
      "y": 20
    },
    "img": "https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/p/e/pearls-poodle-tshirt-black.png"
  },
  {
    "name": "Waterfall T-Shirt",
    "height": 20,
    "width": 0.5,
    "icon": "/icons/waterfall.png",
    "model": "/models/waterfall.glb",
    "colour": "hsl(121, 40%, 70%)",
    "coord": {
      "x": 60,
      "y": 220
    },
    "img": "https://cdn.fasttimes.com.au/media/catalog/product/cache/d5dc7326c4215340773195b00a886565/p/e/pearls-og-tshirt-royal-white.png"
  }
]