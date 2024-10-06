import images from './images';

const cakes = [
  {
    title: 'Wedding Cake',
    price: '$99',
    tags: 'Vanilla sponge | Fondant | Exquisite decorations',
  },
  {
    title: 'Sweetheart Delight Cake',
    price: '$75',
    tags: 'Rich chocolate layers | Personalized message | Gold accents',
  },
  {
    title: 'Carrot Cake',
    price: '$24',
    tags: 'Carrots | Walnuts | Cinnamon',
  },
  {
    title: 'Lemon Blueberry Layer Cake',
    price: '$27',
    tags: 'Lemon zest | Blueberries | Cream cheese',
  },
  {
    title: 'Chocolate Ganache Cake',
    price: '$25',
    tags: 'Dark chocolate | Cream | Vanilla',
  },
];

const frenchPastry = [
  {
    title: 'Almond Croissant',
    price: '$4',
    tags: 'Almond cream | Butter | Flaky pastry | Powdered sugar',
  },
  {
    title: "Macarons",
    price: '$3',
    tags: 'Almond flour | Buttercream filling | Vanilla extract',
  },
  {
    title: 'Eclair',
    price: '$4',
    tags: 'Choux pastry | Pastry cream | Chocolate glaze',
  },
  {
    title: 'Profiteroles',
    price: '$5',
    tags: 'Choux pastry | Pastry cream | Chocolate sauce | Whipped cream',
  },
  {
    title: 'Tarte Tatin',
    price: '$5',
    tags: 'Apples | Caramel | Puff pastry | Vanilla ice cream',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'A prestigious accolade awarded to culinary experts.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Recognizing the most talented and creative new chefs.',
  },
  {
    imgUrl: images.award04,
    title: 'AA Hospitality',
    subtitle: 'Excellence in service and hospitality, truly unmatched.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Honoring remarkable chefs with extraordinary skill.',
  },
];

export default { cakes, frenchPastry, awards };
