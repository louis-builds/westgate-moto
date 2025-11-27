export const categories = [
    { id: 'all', name: 'All Parts' },
    { id: 'engine', name: 'Engine & Exhaust' },
    { id: 'brakes', name: 'Brakes' },
    { id: 'tires', name: 'Tires & Wheels' },
    { id: 'body', name: 'Body & Frame' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'accessories', name: 'Accessories' },
];

export const products = [
    {
        id: 1,
        name: 'High Performance Exhaust',
        category: 'engine',
        price: 599.00,
        image: '/images/exhaust.png',
        description: 'Titanium slip-on exhaust for improved flow and sound.',
        compatible: ['Yamaha R6', 'Yamaha R1', 'Kawasaki ZX-6R']
    },
    {
        id: 2,
        name: 'Sintered Brake Pads',
        category: 'brakes',
        price: 45.00,
        image: '/images/brakes.png',
        description: 'High friction coefficient for maximum stopping power.',
        compatible: ['Universal Sport Bikes']
    },
    {
        id: 3,
        name: 'Sport Touring Tire',
        category: 'tires',
        price: 180.00,
        image: '/images/tire.png',
        description: 'Dual compound rear tire for longevity and grip.',
        compatible: ['17 inch wheels']
    },
    {
        id: 4,
        name: 'LED Turn Signals',
        category: 'electronics',
        price: 29.99,
        image: '/images/led.png',
        description: 'Slim profile LED indicators with sequential flash.',
        compatible: ['Universal']
    },
    {
        id: 5,
        name: 'Carbon Fiber Fender',
        category: 'body',
        price: 220.00,
        image: '/images/carbon.png',
        description: 'Lightweight carbon fiber front fender.',
        compatible: ['Ducati Panigale', 'Streetfighter V4']
    },
    {
        id: 6,
        name: 'Synthetic Motor Oil 10W-40',
        category: 'engine',
        price: 65.00,
        image: '/images/oil.png',
        description: 'Full synthetic ester-based 4-stroke oil.',
        compatible: ['All 4-stroke engines']
    },
];

export const services = [
    {
        id: 1,
        title: 'General Service',
        description: 'Oil change, filter replacement, and safety inspection.',
        price: 'From $150'
    },
    {
        id: 2,
        title: 'Tire Fitting',
        description: 'Mounting and balancing for all types of motorcycle tires.',
        price: 'From $40/wheel'
    },
    {
        id: 3,
        title: 'Engine Tuning',
        description: 'Dyno tuning and ECU remapping for optimal performance.',
        price: 'From $300'
    },
    {
        id: 4,
        title: 'Accident Repair',
        description: 'Full damage assessment and insurance repairs.',
        price: 'Quote only'
    }
];
