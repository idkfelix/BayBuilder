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
        hanger: "/models/hanger.glb",
        height: 16,
        width: 0.5
      },
      {
        name: "Hoodie",
        hanger: "/models/hanger.glb",
        height: 18,
        width: 0.5
      },
      {
        name: "Pant",
        hanger: "/models/hanger-clip.glb",
        height: 22,
        width: 0.5
      },
      {
        name: "Short",
        hanger: "/models/hanger-clip.glb",
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
        hanger: "/models/hanger.glb",
        height: 20,
        width: 0.5
      },
      {
        name: "Hoodie",
        hanger: "/models/hanger.glb",
        height: 22,
        width: 0.5
      },
      {
        name: "Pant",
        hanger: "/models/hanger-clip.glb",
        height: 26,
        width: 0.5
      },
      {
        name: "Short",
        hanger: "/models/hanger-clip.glb",
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

export const initial = []

export const bays = [
  [{"name":"Full Shelf","icon":"/icons/full-shelf.svg","model":"/models/full-shelf.glb","height":2,"width":1,"colour":"hsl(158, 40%, 70%)","coord":{"x":0,"y":220}},{"name":"Hoodie","hanger":"/models/hanger.glb","height":18,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(47, 40%, 70%)","coord":{"x":60,"y":20}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":20,"width":0.5,"icon":"/icons/waterfall.svg","model":"/models/waterfall.glb","colour":"hsl(135, 40%, 70%)","coord":{"x":-60,"y":20}},{"name":"Cage Grid","grid":true,"model":"/models/cage.glb","height":20,"width":0.5,"noBtn":true,"colour":"hsl(75, 40%, 70%)","coord":{"x":60,"y":240}},{"name":"Pant","height":24,"width":0.5,"icon":"/icons/half-bar-shelf.svg","model":"/models/half-bar-shelf.glb","colour":"hsl(109, 40%, 70%)","coord":{"x":-60,"y":360}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":16,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(23, 40%, 70%)","coord":{"x":60,"y":440}},{"name":"Half Shelf","icon":"/icons/half-shelf.svg","model":"/models/half-shelf.glb","height":2,"width":0.5,"colour":"hsl(135, 40%, 70%)","coord":{"x":-60,"y":290}}],
  [{"name":"Hoodie","hanger":"/models/hanger.glb","height":18,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(148, 40%, 70%)","coord":{"x":-60,"y":20}},{"name":"Hoodie","hanger":"/models/hanger.glb","height":18,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(288, 40%, 70%)","coord":{"x":-60,"y":200}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":20,"width":0.5,"icon":"/icons/waterfall.svg","model":"/models/waterfall.glb","colour":"hsl(140, 40%, 70%)","coord":{"x":60,"y":20}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":20,"width":0.5,"icon":"/icons/waterfall.svg","model":"/models/waterfall.glb","colour":"hsl(327, 40%, 70%)","coord":{"x":60,"y":220}},{"name":"T-Shirt","height":18,"width":0.5,"icon":"/icons/half-bar-shelf.svg","model":"/models/half-bar-shelf.glb","colour":"hsl(182, 40%, 70%)","coord":{"x":60,"y":420}},{"name":"Half Shelf","icon":"/icons/half-shelf.svg","model":"/models/half-shelf.glb","height":2,"width":0.5,"colour":"hsl(308, 40%, 70%)","coord":{"x":-60,"y":420}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":16,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(318, 40%, 70%)","coord":{"x":-60,"y":440}}],
  [{"name":"Cage Grid","grid":true,"model":"/models/cage.glb","height":20,"width":0.5,"noBtn":true,"colour":"hsl(213, 40%, 70%)","coord":{"x":60,"y":180}},{"name":"Full Shelf","icon":"/icons/full-shelf.svg","model":"/models/full-shelf.glb","height":2,"width":1,"colour":"hsl(309, 40%, 70%)","coord":{"x":0,"y":180}},{"name":"Pant","height":24,"width":0.5,"icon":"/icons/half-bar-shelf.svg","model":"/models/half-bar-shelf.glb","colour":"hsl(316, 40%, 70%)","coord":{"x":-60,"y":360}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":20,"width":0.5,"icon":"/icons/waterfall.svg","model":"/models/waterfall.glb","colour":"hsl(174, 40%, 70%)","coord":{"x":60,"y":360}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":16,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(33, 40%, 70%)","coord":{"x":60,"y":0}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":16,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(302, 40%, 70%)","coord":{"x":-60,"y":0}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":16,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(310, 40%, 70%)","coord":{"x":-60,"y":200}}],
  [{"name":"Cage Grid","grid":true,"model":"/models/cage.glb","height":20,"width":0.5,"noBtn":true,"colour":"hsl(76, 40%, 70%)","coord":{"x":60,"y":220}},{"name":"Half Shelf","icon":"/icons/half-shelf.svg","model":"/models/half-shelf.glb","height":2,"width":0.5,"colour":"hsl(180, 40%, 70%)","coord":{"x":60,"y":220}},{"name":"Hoodie","hanger":"/models/hanger.glb","height":22,"width":0.5,"icon":"/icons/waterfall.svg","model":"/models/waterfall.glb","colour":"hsl(205, 40%, 70%)","coord":{"x":-60,"y":20}},{"name":"Short","height":14,"width":0.5,"icon":"/icons/half-bar-shelf.svg","model":"/models/half-bar-shelf.glb","colour":"hsl(19, 40%, 70%)","coord":{"x":-60,"y":260}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":16,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(223, 40%, 70%)","coord":{"x":60,"y":20}},{"name":"T-Shirt","height":18,"width":1,"icon":"/icons/full-bar-shelf.svg","model":"/models/full-bar-shelf.glb","colour":"hsl(136, 40%, 70%)","coord":{"x":0,"y":420}}],
  [{"name":"Hoodie","hanger":"/models/hanger.glb","height":18,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(291, 40%, 70%)","coord":{"x":60,"y":20}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":16,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(119, 40%, 70%)","coord":{"x":-60,"y":20}},{"name":"Half Shelf","icon":"/icons/half-shelf.svg","model":"/models/half-shelf.glb","height":2,"width":0.5,"colour":"hsl(116, 40%, 70%)","coord":{"x":-60,"y":210}},{"name":"Hoodie","hanger":"/models/hanger.glb","height":18,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(269, 40%, 70%)","coord":{"x":-60,"y":230}},{"name":"T-Shirt","hanger":"/models/hanger.glb","height":20,"width":0.5,"icon":"/icons/waterfall.svg","model":"/models/waterfall.glb","colour":"hsl(149, 40%, 70%)","coord":{"x":60,"y":210}},{"name":"T-Shirt","height":18,"width":0.5,"icon":"/icons/half-bar-shelf.svg","model":"/models/half-bar-shelf.glb","colour":"hsl(101, 40%, 70%)","coord":{"x":60,"y":420}},{"name":"Hoodie","hanger":"/models/hanger.glb","height":18,"width":0.5,"icon":"/icons/front.svg","model":"/models/front.glb","colour":"hsl(247, 40%, 70%)","coord":{"x":-60,"y":420}}],
]