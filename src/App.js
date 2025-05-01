import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import DestinationCard from './components/DestinationCard';
import TopDeals from './components/TopDeals';
import Footer from './components/Footer';
import DestinationDetail from './components/DestinationDetail';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import ThemeToggle from './components/ThemeToggle';
import logo from './assets/rohantravels-logo.svg';

export const destinations = [
  {
    name: 'Santorini, Greece',
    slug: 'santorini-greece',
    images: [
      'https://theplanetd.com/images/Best-Things-To-Do-in-Santorini.jpg',
      'https://theplanetd.com/images/Best-Things-To-Do-in-Santorini.jpg',
      'https://theplanetd.com/images/Best-Things-To-Do-in-Santorini.jpg'
    ],
    description:
      'Santorini is famous for its stunning sunsets, whitewashed houses, and blue-domed churches perched over the Aegean Sea. Enjoy breathtaking views, romantic evenings, and unique volcanic beaches.',
    details: {
      lodging: 'Luxury resorts, boutique hotels, cliffside villas with sea views.',
      attractions: 'Oia village, Fira, Red Beach, Akrotiri ruins.',
      todo: 'Sunset watching, wine tours, boat trips, hiking.',
      restaurants: 'Metaxi Mas, Selene, Ambrosia.',
      activities: 'Sailing, snorkeling, ATV tours.',
      safety: 'Very safe, but watch for steep paths.',
      commuting: 'Buses, taxis, ATV/scooter rentals.'
    },
    thingsToDo: [
      {
        title: 'Oia Village',
        image: 'https://images.ansharimages.com/photo/greece/santorini/oia-village-at-dawn-santorini-greece.jpg',
        description: 'Famous for its sunsets and picturesque streets.',
        distance: '8 km'
      },
      {
        title: 'Red Beach',
        image: 'https://th.bing.com/th/id/R.6c7dbfc4674771fb7196e7d289ac7910?rik=XvDEQCnioj5r6g&riu=http%3a%2f%2fwww.santorini-view.com%2ffiles%2fGalleryImages%2fc45fa64d-1ac1-4789-8f61-59d82930ec5a.jpg&ehk=6ECzPtVaVESLEMsMbbg%2fZ7rbcqrzrf7lt9yszeiY%2fbc%3d&risl=&pid=ImgRaw&r=0',
        description: 'Unique red sand and dramatic cliffs.',
        distance: '12 km'
      },
      {
        title: 'Akrotiri Ruins',
        image: 'https://th.bing.com/th/id/OIP.s6qyFroXQdReEuLQjnA-QgHaE7?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Ancient Minoan city preserved in volcanic ash.',
        distance: '10 km'
      }
    ],
    famousPlaces: [
      {
        title: 'Oia Village',
        image: 'https://images.ansharimages.com/photo/greece/santorini/oia-village-at-dawn-santorini-greece.jpg',
        description: 'Famous for its sunsets and picturesque streets.',
        distance: '8 km'
      },
      {
        title: 'Fira Town',
        image: 'https://th.bing.com/th/id/OIP.uAKYiOoKfHzpLhAYpV3KJgHaFc?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'The bustling capital with shops, cafes, and caldera views.',
        distance: 'Central Santorini'
      },
      {
        title: 'Pyrgos Village',
        image: 'https://th.bing.com/th/id/OIP.ZWUnNuQwhQqHRpZbwIo4gwHaEp?w=289&h=181&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A charming hillside village with panoramic views.',
        distance: '7 km'
      }
    ],
    bestTime: [
      { month: 'APR-MAY', note: 'Spring, fewer crowds, mild weather.' },
      { month: 'SEP-OCT', note: 'Warm sea, pleasant evenings.' }
    ],
    booking: [
      { name: 'Santorini Luxury Suites', link: '#', type: 'Hotel', price: '₹28,000/night' },
      { name: 'Blue Dome Villas', link: '#', type: 'Villa', price: '₹19,000/night' },
      { name: 'Sunset Cruise', link: '#', type: 'Tour', price: '₹5,500/person' }
    ]
  },
  {
    name: 'Kyoto, Japan',
    slug: 'kyoto-japan',
    images: [
      'https://th.bing.com/th/id/OIP.YO9f1fIbODetXqVX9dMT_QHaE8?w=259&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
      'https://th.bing.com/th/id/OIP.YO9f1fIbODetXqVX9dMT_QHaE8?w=259&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
      'https://th.bing.com/th/id/OIP.YO9f1fIbODetXqVX9dMT_QHaE8?w=259&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7'
    ],
    description: 'Kyoto is a city of ancient temples, cherry blossoms, tranquil gardens, and rich traditions. It offers a glimpse into Japan’s imperial past and is renowned for its seasonal beauty.',
    details: {
      lodging: 'Ryokans, guesthouses, modern hotels.',
      attractions: 'Fushimi Inari Shrine, Kinkaku-ji, Arashiyama Bamboo Grove.',
      todo: 'Temple visits, kimono experiences, tea ceremonies.',
      restaurants: 'Gion Karyo, Nishiki Market eateries.',
      activities: 'Geisha shows, river boating, cycling.',
      safety: 'Extremely safe, low crime.',
      commuting: 'Efficient buses, subways, taxis.'
    },
    thingsToDo: [
      {
        title: 'Fushimi Inari Shrine',
        image: 'https://th.bing.com/th/id/OIP.-VBrxB9DlI-odVyNjfySagHaE8?w=289&h=192&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Iconic shrine with thousands of vermillion torii gates.',
        distance: '5 km'
      },
      {
        title: 'Arashiyama Bamboo Grove',
        image: 'https://th.bing.com/th/id/OIP.CGwqZ8qz12uuYL73I6bi6QHaGE?w=210&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A magical forest of towering bamboo.',
        distance: '9 km'
      },
      {
        title: 'Kinkaku-ji (Golden Pavilion)',
        image: 'https://th.bing.com/th/id/OIP.WMVYe7Hb2nfnMKQTDm9dJwHaE7?w=243&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A Zen temple covered in gold leaf, surrounded by gardens.',
        distance: '7 km'
      }
    ],
    famousPlaces: [
      {
        title: 'Gion District',
        image: 'https://th.bing.com/th/id/OIP.PzndnzpXlA8FtzN7BqOE7wHaE8?w=230&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Traditional quarter famous for geisha culture.',
        distance: 'Central Kyoto'
      },
      {
        title: 'Nijo Castle',
        image: 'https://ts2.mm.bing.net/th?id=OIP.6AZUnQcGJWP2DDi0n0v7AgHaE7&pid=15.1',
        description: 'UNESCO World Heritage Site with nightingale floors.',
        distance: 'Central Kyoto'
      },
      {
        title: 'Philosopher’s Path',
        image: 'https://ts2.mm.bing.net/th?id=OIP.-zmRJjwcsRZTPylY5OGLLAHaFb&pid=15.1',
        description: 'A scenic walking path lined with cherry blossom trees.',
        distance: 'Eastern Kyoto'
      }
    ],
    bestTime: [
      { month: 'MAR-APR', note: 'Cherry blossom season.' },
      { month: 'OCT-NOV', note: 'Autumn foliage.' }
    ],
    booking: [
      { name: 'Kyoto Ryokan Gion', link: '#', type: 'Ryokan', price: '₹13,500/night' },
      { name: 'Temple Stay Experience', link: '#', type: 'Experience', price: '₹6,200/night' },
      { name: 'Guided Cherry Blossom Tour', link: '#', type: 'Tour', price: '₹3,800/person' }
    ]
  },
  {
    name: 'Paris, France',
    slug: 'paris-france',
    images: [
      'https://th.bing.com/th/id/OIP.gOiajMIog2Kbarg3VMx9RwHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.gOiajMIog2Kbarg3VMx9RwHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.gOiajMIog2Kbarg3VMx9RwHaE8?cb=iwc1&rs=1&pid=ImgDetMain'
    ],
    description: 'Paris, the city of lights, is renowned for its romance, art, gourmet cuisine, and iconic landmarks. Stroll along the Seine, visit world-class museums, and enjoy Parisian café culture.',
    details: {
      lodging: 'Boutique hotels, luxury chains, Airbnbs.',
      attractions: 'Eiffel Tower, Louvre, Montmartre.',
      todo: 'Museum tours, river cruises, shopping.',
      restaurants: 'Le Meurice, Café de Flore, local bistros.',
      activities: 'Wine tasting, art walks, cabaret shows.',
      safety: 'Generally safe, beware of pickpockets.',
      commuting: 'Metro, buses, bikes, walking.'
    },
    thingsToDo: [
      {
        title: 'Eiffel Tower',
        image: 'https://th.bing.com/th/id/OIP.v5i3C1psm_SoA6QPpCrGbgHaLH?w=184&h=276&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Climb or ascend for panoramic city views.',
        distance: 'Central Paris'
      },
      {
        title: 'Louvre Museum',
        image: 'https://th.bing.com/th/id/OIP.Qpno3Srw-4V6OBO1mv4yZwHaE8?w=226&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'World’s largest art museum, home to the Mona Lisa.',
        distance: '2 km'
      },
      {
        title: 'Montmartre',
        image: 'https://th.bing.com/th/id/OIP.VDtR5Iyr2_QtmsGxq5uQLQHaE8?w=250&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Historic hilltop neighborhood with artists and Sacré-Cœur.',
        distance: '4 km'
      }
    ],
    famousPlaces: [
      {
        title: 'Notre-Dame Cathedral',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        description: 'Iconic Gothic cathedral that was built in the 12th century.',
        distance: 'Central Paris'
      },
      {
        title: 'Arc de Triomphe',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Triumphal arch honoring the soldiers who fought and died for France.',
        distance: 'Central Paris'
      },
      {
        title: 'Palace of Versailles',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
        description: 'Former royal palace with opulent decorations and gardens.',
        distance: '20 km from Paris'
      }
    ],
    bestTime: [
      { month: 'APR-JUN', note: 'Springtime in Paris.' },
      { month: 'SEP-OCT', note: 'Pleasant weather, fewer tourists.' }
    ],
    booking: [
      { name: 'Hotel Le Meurice', link: '#', type: 'Hotel', price: '₹32,000/night' },
      { name: 'Seine River Cruise', link: '#', type: 'Tour', price: '₹2,900/person' },
      { name: 'Montmartre Walking Tour', link: '#', type: 'Tour', price: '₹2,200/person' }
    ]
  },
  {
    name: 'Bali, Indonesia',
    slug: 'bali-indonesia',
    images: [
      'https://th.bing.com/th/id/OIP.ShZdQbYWtQHokK39wG-2KgHaEK?w=315&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
      'https://th.bing.com/th/id/OIP.ShZdQbYWtQHokK39wG-2KgHaEK?w=315&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
      'https://th.bing.com/th/id/OIP.ShZdQbYWtQHokK39wG-2KgHaEK?w=315&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7'
    ],
    description: 'Bali is a tropical paradise with lush rice terraces, pristine beaches, and temples. Enjoy surfing, yoga, and vibrant culture.',
    details: {
      lodging: 'Beach resorts, eco-lodges, private villas.',
      attractions: 'Ubud, Seminyak, Tanah Lot Temple.',
      todo: 'Surfing, yoga retreats, volcano hikes.',
      restaurants: 'Locavore, La Lucciola, Warung Babi Guling.',
      activities: 'Scuba diving, spa days, market visits.',
      safety: 'Safe, but watch for traffic and petty theft.',
      commuting: 'Scooter rentals, taxis, private drivers.'
    },
    thingsToDo: [
      {
        title: 'Uluwatu Temple',
        image: 'https://ts3.mm.bing.net/th?id=OIP.LRIECA5gCuu5VIWGee-dKQHaE7&pid=15.1',
        description: 'Balinese Hindu temple perched on a cliff overlooking the Indian Ocean.',
        distance: '25 km'
      },
      {
        title: 'Seminyak Beach',
        image: 'https://th.bing.com/th/id/OIP.0CrpXDs7zCbifTS8ijAfWQHaE0?w=295&h=191&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Popular beach with luxury resorts, restaurants, and shopping.',
        distance: '10 km'
      },
      {
        title: 'Ubud Monkey Forest',
        image: 'https://th.bing.com/th/id/OIP.CJwSCxEjZZ1aZOeEK8w2xAHaE8?w=213&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Nature reserve with over 700 Balinese long-tailed macaques.',
        distance: '35 km'
      }
    ],
    famousPlaces: [
      {
        title: 'Uluwatu Temple',
        image: 'https://ts3.mm.bing.net/th?id=OIP.LRIECA5gCuu5VIWGee-dKQHaE7&pid=15.1',
        description: 'Balinese Hindu temple perched on a cliff overlooking the Indian Ocean.',
        distance: '25 km'
      },
      {
        title: 'Tegallalang Rice Terrace',
        image: 'https://th.bing.com/th/id/OIP.NII_YOQ6zDq_rhchrU_rQQHaE8?w=222&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7`',
        description: 'Famous for lush, scenic rice paddies and swings.',
        distance: 'Ubud area'
      },
      {
        title: 'Besakih Temple',
        image: 'https://th.bing.com/th/id/OIP.hUTwZaRHJtk1RYsxtdT4egHaE8?w=251&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Mother Temple of Bali, located on the slopes of Mount Agung.',
        distance: '50 km from Denpasar'
      }
    ],
    bestTime: [
      { month: 'MAY-SEP', note: 'Dry season, ideal for outdoor activities.' },
      { month: 'DEC-APR', note: 'Wet season, but fewer tourists.' }
    ],
    booking: [
      { name: 'Four Seasons Resort Bali', link: '#', type: 'Hotel', price: '₹45,000/night' },
      { name: 'Bali Surf School', link: '#', type: 'Experience', price: '₹4,500/person' },
      { name: 'Ubud Food Tour', link: '#', type: 'Tour', price: '₹2,500/person' }
    ]
  },
  {
    name: 'Rome, Italy',
    slug: 'rome-italy',
    images: [
      'https://th.bing.com/th/id/OIP.W5uhQDtKFzC9tF3ggSuZEQHaE8?w=261&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
      'https://th.bing.com/th/id/OIP.W5uhQDtKFzC9tF3ggSuZEQHaE8?w=261&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
      'https://th.bing.com/th/id/OIP.W5uhQDtKFzC9tF3ggSuZEQHaE8?w=261&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7'
    ],
    description: 'Rome is a living museum of history, art, and Italian cuisine. Explore ancient ruins, indulge in delicious food, and soak up the vibrant atmosphere.',
    details: {
      lodging: 'Historic hotels, apartments, hostels.',
      attractions: 'Colosseum, Vatican, Trevi Fountain.',
      todo: 'Guided tours, gelato tasting, piazza hopping.',
      restaurants: 'Roscioli, Trattoria Pennestri, Armando al Pantheon.',
      activities: 'Cooking classes, Vespa tours, opera.',
      safety: 'Safe, but beware of tourist scams.',
      commuting: 'Metro, buses, walking.'
    },
    thingsToDo: [
      {
        title: 'Colosseum',
        image: 'https://ts2.mm.bing.net/th?id=OIP.ZfupFQzCnRsIj1UJY1g6bgHaE7&pid=15.1',
        description: 'Iconic amphitheater and one of Rome’s most recognizable landmarks.',
        distance: 'Central Rome'
      },
      {
        title: 'Vatican City',
        image: 'https://th.bing.com/th/id/OIP.3ktqKm2D3IdICCrYcNUWQgHaE7?w=274&h=183&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Independent city-state within Rome, home to the Pope and numerous iconic art and architecture.',
        distance: '5 km'
      },
      {
        title: 'Trevi Fountain',
        image: 'https://th.bing.com/th/id/OIP.Vom_wO6Lw86clJailIzIwwHaE8?w=254&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Beautiful baroque fountain where you can make a wish.',
        distance: 'Central Rome'
      }
    ],
    famousPlaces: [
      {
        title: 'Pantheon',
        image: 'https://th.bing.com/th/id/OIP.hQTqf-dCokHAdDaz5uVYLQHaEK?w=274&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Ancient temple with an impressive dome.',
        distance: 'Central Rome'
      },
      {
        title: 'Roman Forum',
        image: 'https://www.fodors.com/wp-content/uploads/2019/07/01_BestAncientSitesInRome__RomanForum_shutterstock_351471179.jpg',
        description: 'Historic heart of ancient Rome with ruins and temples.',
        distance: 'Central Rome'
      },
      {
        title: 'Spanish Steps',
        image: 'https://th.bing.com/th/id/OIP.aX-3i5fuoogjBlfJ0tNZHQHaE7?w=297&h=198&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'One of the city’s most famous landmarks and a popular meeting spot.',
        distance: 'Central Rome'
      }
    ],
    bestTime: [
      { month: 'APR-JUN', note: 'Spring, mild weather, fewer tourists.' },
      { month: 'SEP-OCT', note: 'Autumn, pleasant weather, harvest season.' }
    ],
    booking: [
      { name: 'Hotel Raphael', link: '#', type: 'Hotel', price: '₹25,000/night' },
      { name: 'Rome Food Tour', link: '#', type: 'Tour', price: '₹3,500/person' },
      { name: 'Vatican Guided Tour', link: '#', type: 'Tour', price: '₹2,800/person' }
    ]
  },
  {
    name: 'Cape Town, South Africa',
    slug: 'cape-town-south-africa',
    images: [
      'https://cff2.earth.com/uploads/2007/11/09001502/cape-town-south-africa.jpg',
      'https://cff2.earth.com/uploads/2007/11/09001502/cape-town-south-africa.jpg',
      'https://cff2.earth.com/uploads/2007/11/09001502/cape-town-south-africa.jpg'
    ],
    description: 'Cape Town is a stunning coastal city surrounded by mountains and ocean. Enjoy vibrant culture, beautiful beaches, and outdoor activities.',
    details: {
      lodging: 'Beachfront hotels, guesthouses, lodges.',
      attractions: 'Table Mountain, Robben Island, V&A Waterfront.',
      todo: 'Winery tours, hiking, penguin spotting.',
      restaurants: 'The Test Kitchen, Gold Restaurant, Pot Luck Club.',
      activities: 'Safari, surfing, boat trips.',
      safety: 'Take care at night, use registered taxis.',
      commuting: 'Uber, buses, car rentals.'
    },
    thingsToDo: [
      {
        title: 'Table Mountain',
        image: 'https://cdn.britannica.com/41/75841-050-FAAE44F0/Table-Mountain-Cape-Town-Western-Bay-South.jpg',
        description: 'Iconic flat-topped mountain and one of Cape Town’s most recognizable landmarks.',
        distance: 'Central Cape Town'
      },
      {
        title: 'Robben Island',
        image: 'https://th.bing.com/th/id/OIP.EoWPKzou1HpJ2iUy89QK7gHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Island where Nelson Mandela was imprisoned, now a museum.',
        distance: '12 km'
      },
      {
        title: 'Boulders Beach',
        image: 'https://www.stokedtotravel.com/wp-content/uploads/2019/03/IMG_3123.jpg',
        description: 'Popular beach with African penguins.',
        distance: '30 km'
      }
    ],
    famousPlaces: [
      {
        title: 'Camps Bay Beach',
        image: 'https://thumbs.dreamstime.com/b/camps-bay-beach-cape-town-above-drone-aerial-view-242473478.jpg',
        description: 'Popular beach with white sand and clear waters.',
        distance: 'Central Cape Town'
      },
      {
        title: 'Kirstenbosch Botanical Gardens',
        image: 'https://th.bing.com/th/id/OIP.ty05Dq-DW1HVjuzDKxQOEgHaE6?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Beautiful gardens with diverse flora and fauna.',
        distance: '10 km from Cape Town'
      },
      {
        title: 'Bo-Kaap',
        image: 'https://www.travelmag.com/wp-content/uploads/2023/03/Bo-Kaap-1024x681.jpg',
        description: 'Colorful neighborhood with Cape Malay culture.',
        distance: 'Central Cape Town'
      }
    ],
    bestTime: [
      { month: 'SEP-NOV', note: 'Spring, mild weather, wildflowers.' },
      { month: 'MAR-MAY', note: 'Autumn, pleasant weather, whale watching.' }
    ],
    booking: [
      { name: 'The Silo Hotel', link: '#', type: 'Hotel', price: '₹30,000/night' },
      { name: 'Cape Town Food Tour', link: '#', type: 'Tour', price: '₹3,000/person' },
      { name: 'Table Mountain Hike', link: '#', type: 'Tour', price: '₹2,000/person' }
    ]
  },
  {
    name: 'New York City, USA',
    slug: 'new-york-city-usa',
    images: [
      'https://s1.1zoom.me/b5050/304/432441-Kycb_3840x2160.jpg',
      'https://s1.1zoom.me/b5050/304/432441-Kycb_3840x2160.jpg',
      'https://s1.1zoom.me/b5050/304/432441-Kycb_3840x2160.jpg'
    ],
    description: 'New York City is a bustling metropolis with iconic landmarks, world-class museums, and diverse neighborhoods. Enjoy Broadway shows, shopping, and dining.',
    details: {
      lodging: 'Hotels, boutique stays, hostels.',
      attractions: 'Central Park, Times Square, Statue of Liberty.',
      todo: 'Broadway shows, shopping, sightseeing.',
      restaurants: 'Katz’s Delicatessen, Le Bernardin, Joe’s Pizza.',
      activities: 'Helicopter tours, museums, rooftop bars.',
      safety: 'Safe, stay alert in crowds.',
      commuting: 'Subway, buses, taxis, walking.'
    },
    thingsToDo: [
      {
        title: 'Statue of Liberty',
        image: 'https://c1.wallpaperflare.com/preview/892/138/408/statue-of-liberty-architecture-new-york-dom.jpg',
        description: 'Iconic copper statue and symbol of freedom.',
        distance: 'Liberty Island'
      },
      {
        title: 'Central Park',
        image: 'https://th.bing.com/th/id/OIP.TY0dq6-rzDtpbohmH4vhEgHaFj?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Large public park in the heart of Manhattan.',
        distance: 'Central Manhattan'
      },
      {
        title: 'Metropolitan Museum of Art',
        image: 'https://news.artnet.com/app/news-upload/2017/09/metropolitan-museum-of-art-754843_1920.jpg',
        description: 'One of the world’s largest and most famous museums.',
        distance: 'Upper East Side'
      }
    ],
    famousPlaces: [
      {
        title: 'Times Square',
        image: 'https://www.tripsavvy.com/thmb/mYqOPd4-7awhRigPXzmKuGHNpzE=/3864x2577/filters:no_upscale():max_bytes(150000):strip_icc()/times-square---new-york-city-588653038-5b9c9e9546e0fb002439510b.jpg',
        description: 'Iconic square known for its bright lights and giant billboards.',
        distance: 'Central Manhattan'
      },
      {
        title: 'Brooklyn Bridge',
        image: 'https://th.bing.com/th/id/OIP.NC2X9BdWqUVuIJ5GGhLDkAHaE7?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Historic bridge connecting Brooklyn and Manhattan.',
        distance: 'Lower Manhattan'
      },
      {
        title: 'Rockefeller Center',
        image: 'https://www.a-newyork.com/images/02_Guida/02_04_RockefellerCenter.jpg',
        description: 'Complex of buildings with NBC studios, skating rink, and Christmas tree.',
        distance: 'Midtown Manhattan'
      }
    ],
    bestTime: [
      { month: 'SEP-NOV', note: 'Autumn, mild weather, foliage.' },
      { month: 'APR-JUN', note: 'Spring, mild weather, blooming flowers.' }
    ],
    booking: [
      { name: 'The Plaza Hotel', link: '#', type: 'Hotel', price: '₹40,000/night' },
      { name: 'New York City Food Tour', link: '#', type: 'Tour', price: '₹3,500/person' },
      { name: 'Broadway Show', link: '#', type: 'Event', price: '₹5,000/person' }
    ]
  },
  {
    name: 'Sydney, Australia',
    slug: 'sydney-australia',
    images: [
      'https://www.australia-roads.fr/wp-content/uploads/2017/04/OperaHouse_Sydney.jpg',
      'https://www.australia-roads.fr/wp-content/uploads/2017/04/OperaHouse_Sydney.jpg',
      'https://www.australia-roads.fr/wp-content/uploads/2017/04/OperaHouse_Sydney.jpg'
    ],
    description: 'Sydney is a vibrant city with iconic landmarks, beautiful beaches, and a thriving cultural scene. Enjoy surfing, hiking, and exploring the city.',
    details: {
      lodging: 'Harbour hotels, beach resorts, apartments.',
      attractions: 'Sydney Opera House, Bondi Beach, Harbour Bridge.',
      todo: 'Ferry rides, coastal walks, surfing.',
      restaurants: 'Quay, The Grounds of Alexandria, Bennelong.',
      activities: 'Snorkeling, wildlife parks, festivals.',
      safety: 'Very safe, swim between flags.',
      commuting: 'Trains, buses, ferries, light rail.'
    },
    thingsToDo: [
      {
        title: 'Sydney Opera House',
        image: 'https://external-preview.redd.it/So6_opvkLo01eMUdQVNCnP0wZDYfJGh-zu1_DGWKbqg.jpg?auto=webp&s=664191ca34f1ba44d4c2b005b2e7258a9eed0096',
        description: 'Iconic performing arts center and one of Sydney’s most recognizable landmarks.',
        distance: 'Central Sydney'
      },
      {
        title: 'Bondi Beach',
        image: 'https://th.bing.com/th/id/OIP.kGlolBg-9KnM1ZHUUxT-FAHaF7?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'One of Australia’s most famous beaches.',
        distance: '7 km'
      },
      {
        title: 'Blue Mountains',
        image: 'https://cdn-travelessence.imgix.net/travelessence/australia/blog/discover-page/national-parcs/au-blue-mountains-discoverpage-detailed-national-parks-header.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1200&q=80&w=1600&s=23f88442090790ec99b114beeb5370fc',
        description: 'Mountain range with scenic views, hiking trails, and picturesque villages.',
        distance: '100 km'
      }
    ],
    famousPlaces: [
      {
        title: 'Darling Harbour',
        image: 'https://th.bing.com/th/id/OIP.11sy9AziB_Wm7RcLcrvAWAHaE9?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Waterfront area with shopping, dining, and entertainment.',
        distance: 'Central Sydney'
      },
      {
        title: 'The Rocks',
        image: 'https://res.cloudinary.com/odysseytraveller/image/fetch/f_auto,q_auto,dpr_auto,r_4,w_765,h_535.5,c_limit/https://cdn.odysseytraveller.com/app/uploads/2020/12/GettyImages-477742464.jpg',
        description: 'Historic neighborhood with cobblestone streets and charming shops.',
        distance: 'Central Sydney'
      },
      {
        title: 'Manly Beach',
        image: 'https://th.bing.com/th/id/OIP.XvIMjVDvxw-RD6G4U6sdRgHaE7?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Popular beach with surfing and scenic coastal walks.',
        distance: '17 km'
      }
    ],
    bestTime: [
      { month: 'SEP-NOV', note: 'Spring, mild weather, wildflowers.' },
      { month: 'MAR-MAY', note: 'Autumn, mild weather, surfing.' }
    ],
    booking: [
      { name: 'Shangri-La Hotel Sydney', link: '#', type: 'Hotel', price: '₹35,000/night' },
      { name: 'Sydney Harbour Cruise', link: '#', type: 'Tour', price: '₹2,500/person' },
      { name: 'Blue Mountains Day Trip', link: '#', type: 'Tour', price: '₹4,000/person' }
    ]
  },
  {
    name: 'Dubai, UAE',
    slug: 'dubai-uae',
    images: [
      'https://th.bing.com/th/id/OIP.S_-RMegkarOnzlYIDWRsEgHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.S_-RMegkarOnzlYIDWRsEgHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.S_-RMegkarOnzlYIDWRsEgHaE8?cb=iwc1&rs=1&pid=ImgDetMain'
    ],
    description:
      'Dubai is a futuristic city known for its luxury shopping, ultramodern architecture, lively nightlife, and desert adventures. Home to the world’s tallest building, artificial islands, and a vibrant blend of cultures.',
    details: {
      lodging: 'Luxury hotels (Burj Al Arab, Atlantis), serviced apartments, resorts.',
      attractions: 'Burj Khalifa, Dubai Mall, Palm Jumeirah, Desert Safari.',
      todo: 'Visit the Burj Khalifa, shop at Dubai Mall, relax at Jumeirah Beach, desert safari, waterparks.',
      restaurants: 'Zuma, Ravi Restaurant, Al Fanar, Pierchic.',
      activities: 'Skydiving, dune bashing, yacht cruises, indoor skiing.',
      safety: 'Very safe, strict laws; respect local customs.',
      commuting: 'Metro, taxis, trams, ride-sharing.'
    },
    thingsToDo: [
      {
        title: 'Burj Khalifa',
        image: 'https://dubaitickets.tours/wp-content/uploads/2023/03/burj-khalifa.jpg',
        description: 'World’s tallest building with an observation deck and stunning city views.',
        distance: 'Downtown Dubai'
      },
      {
        title: 'Desert Safari',
        image: 'https://th.bing.com/th/id/OIP.KupW3UKQZY9rivkeyBJe7gHaE7?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Experience dune bashing, camel rides, and a traditional Bedouin camp.',
        distance: '30 km'
      },
      {
        title: 'Dubai Mall',
        image: 'https://th.bing.com/th/id/R.1ba7f5307732ad45a6f263a79e12c7b6?rik=TF7AQLkaU8xBWA&riu=http%3a%2f%2fmedia2.popsugar-assets.com%2ffiles%2f2014%2f03%2f06%2f930%2fn%2f4981322%2f93a2c9c96722196b_shutterstock_147847316.jpg.xxxlarge_2x%2fi%2fDubai-Mall.jpg&ehk=jbfgAUYlxShXHMauibTfxSmRb6VlVMkSE%2ba29fKIgoo%3d&risl=&pid=ImgRaw&r=0',
        description: 'One of the world’s largest malls with shops, aquarium, and ice rink.',
        distance: 'Downtown Dubai'
      },
      {
        title: 'Palm Jumeirah',
        image: 'https://th.bing.com/th/id/OIP.VtRM2kEc4Xb5cTsy_1xCUgHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Iconic man-made island with luxury resorts and beaches.',
        distance: '20 km'
      }
    ],
    famousPlaces: [
      {
        title: 'Dubai Miracle Garden',
        image: 'https://i1.wp.com/www.whisperwanderlust.com/wp-content/uploads/2018/09/miracle-garden-25.jpg?fit=2272%2C1512&ssl=1',
        description: 'Largest flower garden in the world with over 45 million flowers.',
        distance: 'Al Barsha South'
      },
      {
        title: 'Global Village',
        image: 'https://th.bing.com/th/id/OIP.kPtf2D4PoYWIggr0MJ4DygHaEe?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Cultural and entertainment park with pavilions from different countries.',
        distance: 'Dubailand'
      },
      {
        title: 'Museum of the Future',
        image: 'https://www.visitdubai.com/-/media/images/leisure/campaigns/dubai-presents/itineraries/spy/spy-media-museum-of-the-future.jpg',
        description: 'Futuristic museum showcasing innovation and technology.',
        distance: 'Downtown Dubai'
      }
    ],
    bestTime: [
      { month: 'NOV-MAR', note: 'Pleasant weather for outdoor activities.' },
      { month: 'APR-OCT', note: 'Hot, but great for shopping and indoor attractions.' }
    ],
    booking: [
      { name: 'Atlantis The Palm', link: '#', type: 'Hotel', price: '₹18,000/night' },
      { name: 'Burj Al Arab Jumeirah', link: '#', type: 'Hotel', price: '₹60,000/night' },
      { name: 'Desert Safari Adventure', link: '#', type: 'Tour', price: '₹4,500/person' }
    ]
  },
  {
    name: 'Jaipur, India',
    slug: 'jaipur-india',
    images: [
      'https://th.bing.com/th/id/OIP.-31Lp_6cdxzB9rqDmZnIQQHaE6?w=270&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
      'https://th.bing.com/th/id/OIP.-31Lp_6cdxzB9rqDmZnIQQHaE6?w=270&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
      'https://th.bing.com/th/id/OIP.-31Lp_6cdxzB9rqDmZnIQQHaE6?w=270&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7'
    ],
    description: 'Jaipur, the Pink City, is known for its royal palaces, vibrant bazaars, and rich Rajasthani culture. Explore majestic forts, colorful streets, and traditional cuisine.',
    details: {
      lodging: 'Heritage hotels, boutique stays, guesthouses.',
      attractions: 'Amber Fort, Hawa Mahal, City Palace.',
      todo: 'Palace tours, shopping, elephant rides.',
      restaurants: 'Laxmi Mishthan Bhandar, Rawat Mishtan Bhandar, Chokhi Dhani.',
      activities: 'Folk dances, camel rides, block printing.',
      safety: 'Safe, but crowded markets.',
      commuting: 'Auto-rickshaws, taxis, buses.'
    },
    thingsToDo: [
      {
        title: 'Amber Fort',
        image: 'https://th.bing.com/th/id/OIP.KBIjTf8sTyvg4BdrXahgpwHaE8?w=286&h=191&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A majestic fort with beautiful architecture and hilltop views.',
        distance: '11 km from city center'
      },
      {
        title: 'Hawa Mahal',
        image: 'https://th.bing.com/th/id/OIP.Q6JdZxxC5uabjnNzQSae0QHaEK?w=311&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Iconic palace with hundreds of windows.',
        distance: 'Central Jaipur'
      },
      {
        title: 'Johari Bazaar',
        image: 'https://th.bing.com/th/id/OIP.00VFPfIAKr6OtOMQ9b3M_wHaDt?w=293&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'Famous for jewelry, textiles, and handicrafts.',
        distance: 'Central Jaipur'
      }
    ],
    famousPlaces: [
      {
        title: 'City Palace',
        image: 'https://th.bing.com/th/id/OIP.3onhCSpS-WfCur4v33EJ_gHaE7?w=288&h=192&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A beautiful palace complex in the heart of Jaipur, blending Rajasthani and Mughal architecture.',
        distance: 'Central Jaipur'
      },
      {
        title: 'Jantar Mantar',
        image: 'https://th.bing.com/th/id/OIP.2YLGnRK05nBgfS7ohrGIHQHaEI?w=285&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A UNESCO World Heritage Site, this astronomical observatory features the world’s largest stone sundial.',
        distance: 'Near City Palace'
      },
      {
        title: 'Nahargarh Fort',
        image: 'https://th.bing.com/th/id/OIP.awUTp8nrhYzSHATacgvmHwHaEK?w=319&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A fort on the Aravalli hills offering panoramic views of Jaipur.',
        distance: '15 km from city center'
      },
      {
        title: 'Jal Mahal',
        image: 'https://th.bing.com/th/id/OIP.zj7SmNB_58rYhhKcLfmovgHaEK?w=292&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A palace situated in the middle of the Man Sagar Lake, known for its scenic beauty.',
        distance: '6 km from city center'
      },
      {
        title: 'Albert Hall Museum',
        image: 'https://th.bing.com/th/id/OIP.51NLbi1W6nkEcS48GLEzxQHaD7?w=316&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'The oldest museum in Rajasthan, showcasing artifacts and art.',
        distance: 'Central Jaipur'
      },
      {
        title: 'Birla Mandir',
        image: 'https://th.bing.com/th/id/OIP.yIQmW2TCbTM1X1IeynolUQHaE6?w=331&h=203&c=7&r=0&o=5&cb=iwc1&pid=1.7',
        description: 'A modern white marble Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi.',
        distance: 'Jawahar Lal Nehru Marg, Jaipur'
      }
    ],
    bestTime: [
      { month: 'OCT-MAR', note: 'Pleasant winter weather, ideal for sightseeing.' }
    ],
    booking: [
      { name: 'Rambagh Palace', link: '#', type: 'Hotel', price: '₹32,000/night' },
      { name: 'Jaipur City Tour', link: '#', type: 'Tour', price: '₹1,800/person' },
      { name: 'Block Printing Workshop', link: '#', type: 'Experience', price: '₹900/person' }
    ]
  },
  {
    name: 'India',
    slug: 'India',
    images: [
      'https://th.bing.com/th/id/OIP.0Y7xW7HrHDj2qnuoO1BSNwHaEK?cb=iwc1&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.0Y7xW7HrHDj2qnuoO1BSNwHaEK?cb=iwc1&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.0Y7xW7HrHDj2qnuoO1BSNwHaEK?cb=iwc1&rs=1&pid=ImgDetMain'
    ],
    description: 'India, officially known as the Republic of India, is a country located in South Asia. It is the seventh-largest country by area and became the most populous country in the world.',
    details: {
      lodging: 'Beach resorts, shacks, boutique hotels.',
      attractions: 'Baga Beach, Fort Aguada, Old Goa churches.',
      todo: 'Water sports, beach parties, spice plantation tours.',
      restaurants: 'Britto’s, Gunpowder, Mum’s Kitchen.',
      activities: 'Dolphin spotting, flea markets, yoga.',
      safety: 'Safe, but watch valuables on beaches.',
      commuting: 'Scooters, taxis, buses.'
    },
    thingsToDo: [
      {
        title: 'Baga Beach',
        image: 'https://www.tripsavvy.com/thmb/OrVflvJk5fXQJsw5u1UJFxIcXQI=/2122x1413/filters:fill(auto,1)/GettyImages-dv1170129-5b2978f3ff1b78003721993b.jpg',
        description: 'Lively beach with water sports and shacks.',
        distance: 'North Goa'
      },
      {
        title: 'Fort Aguada',
        image: 'https://cdn.thegoavilla.com/static/img/articles/fort-aguada.jpg',
        description: 'Historic fort with panoramic sea views.',
        distance: '18 km from Panaji'
      },
      {
        title: 'Anjuna Flea Market',
        image: 'https://www.tourmyindia.com/states/goa/image/anjuna-flea-market-do-goa.webp',
        description: 'Bustling market for souvenirs and clothes.',
        distance: 'Anjuna, North Goa'
      }
    ],
    famousPlaces: [
      {
        title: 'Se Cathedral',
        image: 'https://travelogyindia.b-cdn.net/storage/app/article/439/se-cathedral-goa-thumb.jpg',
        description: 'One of the oldest and largest churches in Asia.',
        distance: 'Old Goa'
      },
      {
        title: 'Chapora Fort',
        image: 'https://th.bing.com/th/id/OIP.7T_jjTHQ6HJzMk8PeQ4HnQAAAA?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Historic fort with stunning views of the Arabian Sea.',
        distance: 'Bardez, North Goa'
      },
      {
        title: 'Dona Paula',
        image: 'https://belezagoa.com/wp-content/uploads/2019/04/dona-paula.jpg',
        description: 'Popular spot for water sports and scenic views.',
        distance: 'Panaji'
      },
      {
        title: 'Gateway of India',
        image: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gateway-to-India_0.jpg',
        description: 'Iconic arch monument on the waterfront in Mumbai.',
        distance: 'Colaba, Mumbai'
      },
      {
        title: 'Taj Mahal',
        image: 'https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_4x3.jpg',
        description: 'World-famous white marble mausoleum in Agra, symbol of love.',
        distance: 'Agra, Uttar Pradesh'
      },
      {
        title: 'Qutub Minar',
        image: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1287357/1360/2040/m1/fpnw/wm1/gpnhdmtva6kttyu7yrfxisqqeal1fzzwpqge7irijrggvq7duyj9a35jds6aiyx4-.jpg?1463669106&s=7f3ad421926d76acf8e04f1bdb27dde4',
        description: 'Tallest brick minaret in the world, UNESCO World Heritage Site.',
        distance: 'Delhi'
      },
      {
        title: 'Golden Temple',
        image: 'https://th.bing.com/th/id/R.6eadd38e5798f3e9cc60269252d57c56?rik=atkmRGBU%2fVL6XQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Bmk8P2djETc%2fUdLS3HSxS4I%2fAAAAAAAAATE%2ffGNpRFvXa8Y%2fs1024%2fGolden_Temple_Nightview.jpg&ehk=9QN8M4uZafxdGRL9GU6YPfVht%2bsK0OXhKPHlQvOAsBk%3d&risl=&pid=ImgRaw&r=0',
        description: 'Holiest Sikh shrine, known for its stunning golden architecture.',
        distance: 'Amritsar, Punjab'
      },
      {
        title: 'Mysore Palace',
        image: 'https://th.bing.com/th/id/OIP.4IQB-mHqtXS-B5KfN0rFTgHaFk?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Historical palace and royal residence in Mysore.',
        distance: 'Mysore, Karnataka'
      },
      {
        title: 'Charminar',
        image: 'https://th.bing.com/th/id/OIP.ggj7xFzg1OCqkPG26y5f7QHaEo?cb=iwc1&rs=1&pid=ImgDetMain',
        description: '16th-century mosque and monument, iconic symbol of Hyderabad.',
        distance: 'Hyderabad, Telangana'
      }
    ],
    bestTime: [
      { month: 'NOV-FEB', note: 'Cool, dry, and festive season.' }
    ],
    booking: [
      { name: 'Taj Exotica Resort', link: '#', type: 'Hotel', price: '₹18,000/night' },
      { name: 'Goa Water Sports', link: '#', type: 'Experience', price: '₹2,500/person' },
      { name: 'Spice Plantation Tour', link: '#', type: 'Tour', price: '₹1,200/person' }
    ]
  },
  {
    name: 'Leh-Ladakh, India',
    slug: 'leh-ladakh-india',
    images: [
      'https://static.toiimg.com/photo/64764925/leh-mountains.jpg?width=748&resize=4',
      'https://static.toiimg.com/photo/64764925/leh-mountains.jpg?width=748&resize=4',
      'https://static.toiimg.com/photo/64764925/leh-mountains.jpg?width=748&resize=4'
    ],
    description: 'Leh-Ladakh offers dramatic Himalayan landscapes, Buddhist monasteries, and adventure. It’s a haven for bikers, trekkers, and nature lovers.',
    details: {
      lodging: 'Homestays, guesthouses, camps.',
      attractions: 'Pangong Lake, Nubra Valley, Thiksey Monastery.',
      todo: 'Biking, trekking, monastery visits.',
      restaurants: 'Gesmo Restaurant, Tibetan Kitchen.',
      activities: 'River rafting, camel safaris, meditation.',
      safety: 'Altitude caution, limited medical facilities.',
      commuting: 'Bikes, taxis, shared jeeps.'
    },
    thingsToDo: [
      {
        title: 'Pangong Lake',
        image: 'https://www.budgetwayfarers.com/wp-content/uploads/2018/01/Pangong-Lake-2-4.jpg',
        description: 'Crystal blue lake surrounded by mountains.',
        distance: '160 km from Leh'
      },
      {
        title: 'Nubra Valley',
        image: 'https://www.adotrip.com/public/images/areas/5c6fddae1f471-Nubra%20Valley%20Places%20to%20See.jpg',
        description: 'Desert valley with sand dunes and double-humped camels.',
        distance: '120 km from Leh'
      },
      {
        title: 'Thiksey Monastery',
        image: 'https://discoverlehladakh.in/wp-content/uploads/2020/06/Thiksey-monastery-leh-ladakh-1088x530.jpg',
        description: 'Stunning monastery with panoramic views.',
        distance: '19 km from Leh'
      }
    ],
    famousPlaces: [
      {
        title: 'Magnetic Hill',
        image: 'https://th.bing.com/th/id/OIP.l4cbQsOElJVUuvLwb22UOQHaFj?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'Gravity-defying hill where vehicles seem to move uphill.',
        distance: '30 km from Leh'
      },
      {
        title: 'Tso Moriri Lake',
        image: 'https://th.bing.com/th/id/OIP.deK7Jy4ZIwU6OnYSnDddMgHaE2?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'High-altitude lake with scenic views and birdwatching.',
        distance: '220 km from Leh'
      },
      {
        title: 'Hemis Monastery',
        image: 'https://www.tourmyindia.com/socialimg/hemis-monastery-ladakh.jpg',
        description: 'One of the largest and wealthiest monasteries in Ladakh.',
        distance: '45 km from Leh'
      }
    ],
    bestTime: [
      { month: 'JUN-SEP', note: 'Accessible, pleasant weather.' }
    ],
    booking: [
      { name: 'The Grand Dragon Ladakh', link: '#', type: 'Hotel', price: '₹14,000/night' },
      { name: 'Leh Bike Tour', link: '#', type: 'Tour', price: '₹8,500/person' },
      { name: 'Pangong Lake Camping', link: '#', type: 'Experience', price: '₹3,000/night' }
    ]
  },
  {
    name: 'Kerala Backwaters, India',
    slug: 'kerala-backwaters-india',
    images: [
      'https://th.bing.com/th/id/OIP.JECjnAV5T5IldizQjS-K4gHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.JECjnAV5T5IldizQjS-K4gHaE8?cb=iwc1&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.JECjnAV5T5IldizQjS-K4gHaE8?cb=iwc1&rs=1&pid=ImgDetMain'
    ],
    description: 'Kerala’s backwaters offer tranquil houseboat cruises, lush landscapes, and authentic village life. A perfect escape for relaxation and nature.',
    details: {
      lodging: 'Houseboats, resorts, homestays.',
      attractions: 'Alleppey, Kumarakom, Vembanad Lake.',
      todo: 'Houseboat rides, bird watching, village tours.',
      restaurants: 'Indian Coffee House, Thaff, local toddy shops.',
      activities: 'Ayurvedic massages, canoeing, Kathakali shows.',
      safety: 'Very safe, avoid monsoon season.',
      commuting: 'Boats, taxis, auto-rickshaws.'
    },
    thingsToDo: [
      {
        title: 'Houseboat Cruise',
        image: 'https://mediaim.expedia.com/localexpert/213802/acb997c1-b82a-4144-ad35-c422afb9c33c.jpg?impolicy=resizecrop&rw=1005&rh=565',
        description: 'Experience the tranquil backwaters on a traditional houseboat.',
        distance: 'Alleppey Backwaters'
      },
      {
        title: 'Kumarakom Bird Sanctuary',
        image: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/02/Kumarakom-Bird-Sanctuary.jpg',
        description: 'A haven for bird lovers with migratory and local species.',
        distance: '15 km from Kottayam'
      },
      {
        title: 'Vembanad Lake',
        image: 'https://th.bing.com/th/id/OIP.uUcvPP9eKbb_fFGDbEnlkgHaE5?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'The longest lake in India, famous for boating and scenic beauty.',
        distance: 'Kumarakom/Alleppey'
      }
    ],
    famousPlaces: [
      {
        title: 'Marari Beach',
        image: 'https://th.bing.com/th/id/R.fbad55638ad4897a692745a3b2a7ebc7?rik=QreXzIN0gZ%2bywA&riu=http%3a%2f%2fwww.keralaindiavacation.com%2fimages%2fpage-images%2fmarari-header-m.jpg&ehk=hvucKAFUVyaO%2fpUn8BqYYvCgDtJ6V3i3iYJ1vjk23w4%3d&risl=&pid=ImgRaw&r=0',
        description: 'A peaceful beach with scenic views and water sports.',
        distance: 'Alleppey'
      },
      {
        title: 'Kerala Folklore Museum',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        description: 'A museum showcasing Kerala’s rich cultural heritage.',
        distance: 'Kochi'
      },
      {
        title: 'Thattekad Bird Sanctuary',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/68/e3/30.jpg',
        description: 'A protected area with diverse bird species and scenic views.',
        distance: 'Ernakulam'
      }
    ],
    bestTime: [
      { month: 'NOV-FEB', note: 'Cool, dry, and scenic.' }
    ],
    booking: [
      { name: 'Luxury Houseboat', link: '#', type: 'Houseboat', price: '₹12,000/night' },
      { name: 'Ayurveda Spa Retreat', link: '#', type: 'Experience', price: '₹3,500/person' },
      { name: 'Village Canoe Tour', link: '#', type: 'Tour', price: '₹1,500/person' }
    ]
  },
  {
    name: 'Varanasi, India',
    slug: 'varanasi-india',
    images: [
      'https://www.ghumindiaghum.com/blog/wp-content/uploads/2020/08/things-to-do-in-varanasi.jpg',
      'https://www.ghumindiaghum.com/blog/wp-content/uploads/2020/08/things-to-do-in-varanasi.jpg',
      'https://www.ghumindiaghum.com/blog/wp-content/uploads/2020/08/things-to-do-in-varanasi.jpg'
    ],
    description: 'Varanasi, the spiritual heart of India, is famous for its ghats, temples, and centuries-old rituals on the banks of the Ganges. A unique blend of devotion, color, and tradition.',
    details: {
      lodging: 'Heritage hotels, guesthouses, ashrams.',
      attractions: 'Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath.',
      todo: 'Boat rides, temple visits, evening Ganga Aarti.',
      restaurants: 'Blue Lassi, Kashi Chaat Bhandar, Brown Bread Bakery.',
      activities: 'Classical music, yoga, silk weaving.',
      safety: 'Safe, but crowded and busy.',
      commuting: 'Auto-rickshaws, cycle rickshaws, walking.'
    },
    thingsToDo: [
      {
        title: 'Dashashwamedh Ghat',
        image: 'https://www.krazybutterfly.com/wp-content/uploads/2022/12/Dashashwamedh-Ghat-Varanasi-2.jpg',
        description: 'Main ghat for evening Ganga Aarti.',
        distance: 'Central Varanasi'
      },
      {
        title: 'Kashi Vishwanath Temple',
        image: 'https://www.thehistoryhub.com/wp-content/uploads/2017/03/Kashi-Vishwanath-Temple-Inside.jpg',
        description: 'One of the most sacred Hindu temples.',
        distance: 'Central Varanasi'
      },
      {
        title: 'Sarnath',
        image: 'https://www.adotrip.com/public/images/city/master_images/5ea80f0fa0b2d-Sarnath_Attractions.jpg',
        description: 'Site of Buddha’s first sermon, ancient ruins and stupas.',
        distance: '10 km from Varanasi'
      }
    ],
    famousPlaces: [
      {
        title: 'Manikarnika Ghat',
        image: 'https://th.bing.com/th/id/OIP.EF8De7daGe-IjBR1g13VAgHaEK?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'One of the oldest and most sacred ghats in Varanasi.',
        distance: 'Central Varanasi'
      },
      {
        title: 'Tulsi Manas Temple',
        image: 'https://th.bing.com/th/id/OIP.7bLC8v-NduFTaplWBEXoNwHaDy?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'A temple dedicated to Lord Rama, with beautiful gardens.',
        distance: 'Central Varanasi'
      },
      {
        title: 'Ramnagar Fort',
        image: 'https://th.bing.com/th/id/OIP.Exaw9LJ9ikmqCMGD1ydctAHaE6?cb=iwc1&rs=1&pid=ImgDetMain',
        description: 'A historic fort on the banks of the Ganges, with a palace and museum.',
        distance: '10 km from Varanasi'
      }
    ],
    bestTime: [
      { month: 'NOV-FEB', note: 'Cool and pleasant for sightseeing.' }
    ],
    booking: [
      { name: 'BrijRama Palace', link: '#', type: 'Hotel', price: '₹16,000/night' },
      { name: 'Ganges Boat Ride', link: '#', type: 'Experience', price: '₹700/person' },
      { name: 'Sarnath Guided Tour', link: '#', type: 'Tour', price: '₹1,200/person' }
    ]
  },
];

function Home({ theme, setTheme }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [bookingType, setBookingType] = React.useState(null);
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleNavSelect = (type) => {
    setBookingType(type);
  };
  const handleCloseModal = () => setBookingType(null);
  const filteredDestinations = searchQuery
    ? destinations.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (dest.description && dest.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : destinations;
  return (
    <>
      <header className="header">
        <img src={logo} alt="Rohan Travels Logo" className="site-logo" />
        <h1 className="logo">Rohan Travels</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Navbar onSelect={handleNavSelect} />
      </header>
      <BookingModal open={!!bookingType} onClose={handleCloseModal} type={bookingType} />
      <main>
        <section className="destinations-section">
          <div className="searchbar-container creative">
            <SearchBar onSearch={handleSearch} />
          </div>
          <h2>Popular Destinations</h2>
          <div className="destinations-grid">
            {filteredDestinations.length === 0 ? (
              <div style={{padding:'2rem',width:'100%',textAlign:'center',color:'#888'}}>No destinations found.</div>
            ) : (
              filteredDestinations.map((dest, idx) => (
                <DestinationCard key={idx} {...dest} />
              ))
            )}
          </div>
        </section>
        <TopDeals />
        <Footer />
      </main>
    </>
  );
}

function App() {
  const [theme, setTheme] = React.useState(() => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
        <Route path="/destination/:destinationSlug" element={<DestinationDetail destinations={destinations} />} />
      </Routes>
    </Router>
  );
}

export default App;
