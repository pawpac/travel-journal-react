import ValleyOfFire from './images/valley-of-fire.png';
import Chamonix from './images/chamonix.png';
import KeeneValley from './images/keene-valley.png';

const data = [
  {
    id: 1,
    image: ValleyOfFire,
    location: 'NEVADA',
    link:'https://goo.gl/maps/FUCy7igQcSAryWCUA',
    atraction: 'Valley of Fire',
    date: '14 Mar, 2020 - 20 Mar, 2020',
    description: 'Valley of Fire derives its name from red sandstone formations, which formed from shifting sand dunes 150 million years ago.'
  },
  {
    id: 2,
    image:Chamonix,
    location: 'CHAMONIX',
    link:'https://goo.gl/maps/TN6NiPu5Brp7Re8A6',
    atraction: 'The Alps',
    date: '11 Jun, 2018 - 22 Jun, 2018',
    description: 'The Alps are believed to be created during collision between the continental tectonic plates of Africa and Europe.'
  },
  {
    id: 3,
    image:KeeneValley,
    location: 'NEW YORK',
    link:'https://goo.gl/maps/AshDwxEZo1ZWzLo97',
    atraction:'Mount Marcy',
    date: '26 Nov, 2020 - 30 Nov, 2020',
    description: 'Mount Marcy is the highest point in New York, with an elevation of 5,344 feet. It is located in the Town of Keene in Essex County.'
  }
];

export default data;