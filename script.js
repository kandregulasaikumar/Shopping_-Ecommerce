 
// Place your JavaScript code here
const products = [
    { category: 'mobile', name: 'POCO C51 (Royal Blue, 64 GB) (4 GB RAM 128GB ROM',        image: "phone-1.jpg", price: 9000, description: '8MP Dual Rear Camera | 5MP Front Camera,5000 mAh Battery,Helio G36 Processor' },
    { category: 'mobile', name: 'Redmi 12 5G Moonstone Silver 6GB RAM 128GB ROM', image: 'phone-2.png', price: 8000, description: 'Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual.' },
    { category: 'mobile', name: 'OnePlus 12 (Flowy Emerald, 12 GB RAM, 256GB)',   image: 'phone-3.jpg', price: 50000, description: 'Pro-Level Hasselblad Camera System: -Primary 50MP Sony s LYT-808 with OIS.' },
    { category: 'mobile', name: 'Nokia G42 5G | Snapdragon® 480+ 5G | 50MP Triple AI Camera |', image: 'phone-4.jpg', price: 500, description: 'So Fast: With 5G connectivity you get where you want to go, fast.' },
    { category: 'mobile', name: 'realme narzo N55 (Prime Black, 6GB+128GB) 33W Segment Fastest Charging ', image: 'phone-5.jpg', price: 9500, description: 'A powerful mobile phone with great features.' },
    { category: 'mobile', name: 'Redmi A2 (Sea Green, 2GB RAM, 64GB Storage Blue Color)', image: 'phone-6.jpg', price: 9500, description: 'Camera: 8MP Dual camera with Portrait mode | 5MP Front camera' },
    { category: 'mobile', name: 'vivo Y27 (Burgundy Black, 6GB RAM, 128GB Storage Black color)', image: 'phone-7.jpg', price: 10000, description: 'Battery & charging: 44W FlashCharge with 5000 mAh battery' },
    { category: 'mobile', name: 'Samsung Galaxy S24 5G AI Smartphone ( 8GB, 512GB Storage)', image: 'phone-8.jpg', price:69500, description: 'A true pixel powerhouse that will not disappoint.' },
    { category: 'mobile', name: 'realme narzo 60X 5G（Nebula Purple 6GB,128GB Storage', image: 'phone-10.jpg', price: 6500, description: '50MP Primary Camera,street photography high-quality pictures that catch every details with astounding clarity' },
    { category: 'mobile', name: 'Samsung Galaxy S24 5G AI Smartphone (8GB, 256GB Storage', image: 'phone-9.jpg', price: 9000, description: 'Easy to grip. Satisfying to hold. With their unified design and satin finish, Galaxy S24 feels ' },
    { category: 'mobile', name: 'realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display ', image: 'phone-11.jpg', price: 7500, description: 'Unleash your creativity and capture stunning street photography moments with our powerful 64' },
    { category: 'mobile', name: 'Redmi Note 13 5G (Prism Gold, 6GB RAM, 128GB Storage', image: 'phone-12.jpg', price: 9500, description: 'Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity' },
    
    
    //  watches data here...
    { category: 'watches', name: 'OLEVS Watch for Men Diamond Business Dress Analog Quartz Stainless  ', image: 'watch-1.jpg', price: 500, description: '⌚316L Stainless Steel Strap: Solid stainless steel watch bracelet,' },
    { category: 'watches', name: 'DOUBLERUN New Stylist 3D Glass Date Function Multicolor Dial Man Watch', image: 'watch-2.png', price: 600, description: 'A Japanese Battery is included and its Life is more than 2 Years.' },
    { category: 'watches', name: 'Casio Unisex 36.8 x 33.2 x 8.2mm Vintage COLLECTIONA-158WA ', image: 'watch-3.png', price: 540, description: '1Q Grey Dial Metal Watch - D011 (Not assigned,Not Assigned' },
    { category: 'watches', name: 'SKMEI Mens Top Brands Digital Mens Waterproof Blue Color', image: 'watch-4.jpg', price: 900, description: 'Electronic WristWatches Fashion PU Band Sports Watch relogio Masculino Sport Watch Men' },
    { category: 'watches', name: 'SKMEI Men Quartz Watch Leather Band Waterproof Black Color', image: 'watch-5.png', price: 500, description: 'Stylish and Unique Design: Easy-to-read baton-style hands,' },
    { category: 'watches', name: 'CARNAER Skeleton Dial Analog Sports Watch for Men Tonneau Case ', image: 'watch-6.png', price: 1200, description: '00% PREMIUM QUALITY WATCHES: We Are Providing Modern Designer Watches for Men With 100% ' },
    { category: 'watches', name: 'Noise ColorFit Pro  1.78"  Display, Bluetooth Calling Smart Watch, ', image: 'watch-7.png', price: 1500, description: '1.78" AMOLED display: See your world in utmost clarity on the 1.78’’' },
    { category: 'watches', name: 'ire-Boltt Gladiator 1.96" Biggest Display Smart Watch ', image: 'watch-8.png', price: 2000, description: 'Smart Watch with Bluetooth Calling, Voice Assistant &123 Sports Modes, 8 Unique UI Interactions' },
    { category: 'watches', name: 'Fire-Boltt Phoenix Pro 1.39" Bluetooth Calling Smartwatch', image: 'watch-9.png', price: 5000, description: 'AI Voice Assistant, Metal Body with 120+ Sports Modes, SpO2, Heart Rate Monitoring' },
    { category: 'watches', name: 'Apple Watch Series 7 (GPS + Cellular, 45mm)Calling Smartwatch ', image: 'watch-10.png', price: 4500, description: 'Blue Aluminium Case with Abyss Blue Sport Band - Regular' },
    { category: 'watches', name: 'Lapras { Today Sale 12 Years Warranty ) Pro 1 Waterproof Bluetooth ', image: 'watch-11.png', price: 500, description: 'Smartwatch with Heart Rate Sensor Daily Activity Tracker ' },
    { category: 'watches', name: 'Lapras D20 Touchscreen Smart Watch Bluetooth Smartwatch', image: 'watch-12.png', price: 5000, description: 'smart watch for All is designed to inspire a healthy and more active lifestyle.' },
   
     //  earphones data here...
     { category: 'earphones', name: 'Noise Buds VS402 in-Ear Truly Wireless Earbuds with 50H of Playtime', image: 'ear-1.png', price: 500, description: 'Low Latency, Quad Mic with ENC, Instacharge,10mm Driver,' },
     { category: 'earphones', name: 'Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime', image: 'ear-2.png', price: 1500, description: 'Up to 45-hour playtime:- Get set for a day full of music and ' },
     { category: 'earphones', name: 'Noise Newly Launched Buds Xero Truly Wireless in-Ear Earbuds ', image: 'ear-3.png', price: 500, description: 'Sound+TM algorithm for call clarity: Powered by AI, experience' },
     { category: 'earphones', name: 'Apple AirPods (2nd Generation) Case, White in-Ear Earbuds' , image: 'ear-4.png', price: 15000, description: 'Automatically on, automatically connected' },
     { category: 'earphones', name: 'ZEBRONICS Zeb-Bro in Ear Wired Earphones with Mic', image: 'ear-5.png', price: 500, description: ', 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible' },
     { category: 'earphones', name: 'Boult Audio Bassbuds Loop 2 Wired in Ear Earphones with Mic,', image: 'ear-6.png', price: 500, description: ' 10mm Powerful Driver for Extra Bass with Customizable Ear Loop (Teal Blue)' },
     { category: 'earphones', name: 'AMBRANE Type-C Wired Earphones  wired with mic earphone,', image: 'ear-7.png', price: 500, description: ' 14mm Bass Drivers, Inline Controls for Type C Smartphones, iPhone 15 & Laptop, 1.2m Braided Anti Tangle Wire, Metal Alloy Body, Mic & Clear Calling' },
     { category: 'earphones', name: 'pTron Newly Launched Bassbuds NX TWS Earbuds with mic,', image: 'ear-8.png', price: 500, description: ' TruTalk AI-ENC Calls, 32Hrs Playtime, 13mm Drivers, Bluetooth 5.3 Wireless Headphone, Voice Assistant, Type-C Fast Charging & IPX5 Water Resistant(Green)' },
     { category: 'earphones', name: 'pTron Bassbuds Nyx in-Ear TWS Earbuds White in-Ear Earbuds ,', image: 'ear-9.png', price: 500, description: ' Immersive Audio, Bluetooth 5.1 Wireless Headphones, HD Mic, 50ms Movie Mode, Digital Case, Type-C Fast Charging & IPX4 Water Resistant (Pearl White/Black)' },
     { category: 'earphones', name: 'pTron Newly Launched Bassbuds Gomax TWS Earbuds,', image: 'ear-10.png', price: 500, description: ' TruTalk AI-ENC Calls, 36Hrs Playtime, 13mm Drivers, in-Ear Bluetooth 5.3 Wireless Headphones, Voice Assistant, Type-C Fast Charging & IPX5 (Black)' },
     { category: 'earphones', name: 'boAt Rockerz 255 Max Bluetooth White in-Ear Earbuds', image: 'ear-11.png', price: 500, description: ' Ear Earphones with 60H Playtime, EQ Modes, Power Magnetic Earbuds, Beast Mode, Enx Tech, ASAP Charge(10 Mins=10 Hrs), Dual Pair(Space Blue)' },
     { category: 'earphones', name: 'boAt Nirvana 751 ANC Hybrid Active Noise Cancelling', image: 'ear-12.png', price: 500, description: 'boAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, ASAP Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Gunmetal Grey)' },
    
     //  loptops data here...
     { category: 'Laptops', name: 'Dell 15 Laptop Intel Core i3-1115G4 Processor', image: 'lap-1.png', price: 40000, description: 'Intel Core i3-1115G4 Processor/8GB DDR4/512GB SSD/Intel UHD Graphics/15.6" (39.6cm) FHD 120Hz Refresh, 250 nits/Mobile Connect/Win 11+MSO 21/15 Month McAfee/Black/Thin & Light-1.66kg' },
     { category: 'Laptops', name: 'HP Laptop 14s, 12th Gen Intel Core i3-1215U,', image: 'lap-2.png', price: 60000, description: ' 14-inch (35.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.46 kg), dy5008TU' },
     { category: 'Laptops', name: 'ASUS Vivobook 14, Intel Core i3-1115G4 , 14"', image: 'lap-3.png', price: 100000, description: ' (35.56 cms) FHD, Thin and Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/Transparent Silver/1.60 kg), X1400EA-EK322WS' },
     { category: 'Laptops', name: 'Dell 15 Laptop, Intel Core i3-1115', image: 'lap-4.png', price: 70000, description: ' Processor/8GB DDR4/512GB SSD/Intel UHD Graphics/15.6" (39.6cm) FHD 120Hz Refresh, 250 nits/Mobile Connect/Win 11+MSO 21/15 Month McAfee/Black/Thin & Light-1.66kg' },
     { category: 'Laptops', name: 'Acer Travelmate Business Laptop Intel Core i7-11th Gen ', image: 'lap-5.png', price: 60000, description: '(Windows 11 Home/16 GB Ram/1TB SSD/Intel Iris Xe Graphics/14.0 IPS Display/Backlit Keyboard/Fingerprint Sensor) TMP214-53' },
     { category: 'Laptops', name: 'Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen', image: 'lap-6.webp', price: 20000, description: ' (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050) A515-57G (15.6" FHD Display, 1.8 Kg)' },
     { category: 'Laptops', name: 'HP Victus Gaming Laptop 12th Gen Intel Core i5 11th gen', image: 'lap-7.png', price: 141000, description: 'HP Victus Gaming Laptop 12th Gen Intel Core i5-12450H 15.6 inch(39.6 cm) FHD IPS Gaming Laptop(16GB RAM/512GB SSD/NVIDIA GeForce RTX 3050 graphics/144Hz/Backlit KB/B&O/Alexa/Xbox),15-fa0666TX' },
     { category: 'Laptops', name: 'Dell G15 5520 Gaming Laptop, Intel i5-12500H/16GB ', image: 'lap-8.png', price: 90000, description: 'DDR5/1TB SSD/15.6" (39.62cm) FHD WVA AG 120Hz 250 nits/NVIDIA RTX 3050, 4 GB GDDR6/Win 11 + MSO 21/15 Months McAfee/Backlit KB/Dark Shadow Grey/2.81kg' },
     { category: 'Laptops', name: 'Apple MacBook Air Laptop M1 chip', image: 'lap-12.png', price: 22000, description: ', 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey' },
     { category: 'Laptops', name: 'TECNO MEGABOOK T1, Intel Core 11th Gen ', image: 'lap-11.png', price: 54000, description: 'i5 Processor (16GB RAM/512GB SSD Storage),15.6-Inch (39.62 CM), Eye Comfort disply, (14.8mm Ultra Slim/70 Wh Large Battery/Windows 11/ Moonshine Silver/1.56 Kg)' },
     { category: 'Laptops', name: 'Lenovo IdeaPad Slim 3 AMD Ryzen 3 7320U', image: 'lap-12.png', price: 34000, description: ' 15.6 inch (39.6cm) FHD Laptop (8GB/512GB SSD/Windows 11/Office 2021/Alexa Built-in/3 Month Game Pass/Arctic Grey/1.62Kg), 82XQ008DIN' },
     { category: 'Laptops', name: 'Lenovo IdeaPad Slim 3 AMD Ryzen 3 7320U', image: 'lap-1.png', price: 34000, description: ' 15.6 inch (39.6cm) FHD Laptop (8GB/512GB SSD/Windows 11/Office 2021/Alexa Built-in/3 Month Game Pass/Arctic Grey/1.62Kg), 82XQ008DIN' },
    
    
      //  men's data here...
      { category: 'menshoes', name: 'Woodland Mens Gc 2577117ws Sneaker', image: 'men-1.png', price: 500, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Red Tape Casual Sneaker Shoes for Men |', image: 'men-2.png', price: 300, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'U.S. POLO ASSN. Mens Anton 2.0Sneaker', image: 'men-3.png', price: 200, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'U.S. POLO ASSN. Mens RubenSneaker', image: 'men-4.png', price: 1500, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Amazon Brand - Symbol Mens PhillippeSneakers water proof', image: 'men-5.png', price: 1300, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Centrino mens 5631 Sneakers shoes for men water proof', image: 'men-6.png', price: 700, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Sparx Mens Sc0757gCasual Shoe Not Water Resistant', image: 'men-7.jpg', price: 800, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Sparx Mens Sc0620gCasual Shoe water proof', image: 'men-8.png', price: 900, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Puma Unisex-Adult Aviator Profoam Sky Running Shoe', image: 'men-9.png', price: 1000, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Puma Unisex-Adult Disperse Xt 3Training Shoe', image: 'men-10.png', price: 1100, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Puma Mens Velocity Nitro 2 Running Shoe sky running' , image: 'men-11.png', price: 1300, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
      { category: 'menshoes', name: 'Puma Mens Foreverrun Nitro KnitRunning Shoe Good', image: 'men-12.png', price: 1400, description: 'Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock Absorption' },
     
       //  girl's data here...
       { category: 'girlShoes', name: 'Doctor Walk Womens Everyday Basic Sneakers for Women ', image: 'girl-1.png', price: 700, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'Sparx Womens Sneaker with water proof for walking', image: 'girl-2.png', price: 900, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'DOCTOR EXTRA SOFT Memory Foam Women s Shoes for Walking', image: 'girl-3.png', price: 1500, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'OCTOR EXTRA SOFT Flexible Memory Foam Womens Shoes ', image: 'girl-4.png', price: 1700, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'Sparx Womens Sneaker SOFT Flexible', image: 'girl-5.png', price: 1800, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'Aqualite Running Shoes SOFT Flexible', image: 'girl-6.png', price: 1200, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'Slip-On Casual Shoes SOFT Flexible ', image: 'girl-7.png', price: 1300, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'DOCTOR EXTRA SOFT Flexible', image: 'girl-8.png', price: 5000, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'DOCTOR EXTRA SOFT Lightweight Memory Foam Women s Shoes |', image: 'girl-9.png', price: 1400, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'Marc Loire Women s Lightweight Athleisure Knitted Active Wear', image: 'girl-10.png', price: 900, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'Bata Womens Slip on SoftySneaker Casuals for Women', image: 'girl-11.png', price: 600, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
       { category: 'girlShoes', name: 'Aqualite Comfortable & Light Weight Slip-On Casuals for Women', image: 'girl-12.png', price: 800, description: 'Extra Soft, Padded, Comfortable, and Cushioned Memory Foam Foot-Bed Enhances Comfort to the Feet. ' },
     
    //    .. (your home product data...........)
    { category: 'home chores', name: 'Spotzero by Milton Prime Spin Mop with Big Wheels and Stainless Steel ', image: 'home-1.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'Gala Twin Bucket Spin Mop, 2 Microfiber Refills, Floor Cleaning Mop', image: 'home-2.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'AGARO Crest Portable Spot Cleaner, Super Suction Cleaning Machine,', image: 'home-3.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'Jakmister (Anti-Vibration) Unbreakable Plastic 700 W 16000RPM 90 Miles', image: 'home-4.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'ILIFE A80 Pro Robotic Vacuum Cleaner, Dry & Wet, Honeycomb ', image: 'home-5.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'Fulminare Self-Adhesive Aluminium Bathroom Corner Shelf Rack Bathroom  ', image: 'home-6.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'Wonderchef Stainless Steel Coconut Scraper for Kitchen, Vacuum Base', image: 'home-7.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'Base Thickness is 2.8mm for Uniform Heat distribution and avoids', image: 'home-8.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'Kitchenwell Multi-Purpose 360° Rotating Organizer Tray/Kitchen ', image: 'home-9.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'Milton Pro Cook Induction New Granito My Kitchen Set of 2 (Fry Pan 24 cm', image: 'home-10.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
    { category: 'home chores', name: 'Hawkins Contura Hard Anodised Aluminium Inner Lid Pressure Cooker, ', image: 'home-11.png', price: 8600, description: ' Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof,' },
    { category: 'home chores', name: 'AGARO Galaxy 24 Pcs Kitchen Utensils Set, Nylon and Stainless Steel,', image: 'home-12.png', price: 8600, description: 'Nylon head with stainless steel handle is light - wei ght, heat resistant up to 180°C and rust proof, ' },
     
];

function showCategory(category) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product =>
            product.category.toLowerCase() === category.toLowerCase()
        );
        displayProducts(filteredProducts);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    let productRow;

    products.forEach((product, index) => {
        if (index % 4 === 0) {
            productRow = document.createElement('div');
            productRow.classList.add('row');
            productContainer.appendChild(productRow);
        }

        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = product.description;

        productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <button onclick="addToCart('${product.name}', ${product.price}, '${product.description}', '${product.image}')">Add to Cart</button>
                    <button onclick="toggleDescription(this)">More</button>
                `;

        productElement.appendChild(descriptionElement);
        productRow.appendChild(productElement);
    });
}

function toggleDescription(button) {
    const product = button.parentNode;
    const description = product.querySelector('.description');

    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
        button.innerText = 'Less';
    } else {
        description.style.display = 'none';
        button.innerText = 'More';
    }
}

function addToCart(name, price, description, image) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { name, price, description, image };
    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${name} added to cart!`);
}

// Initial display of all products
displayProducts(products);

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

// Update the welcome message with the username
if (username) {
    document.getElementById('welcomeMessage').innerText = 'Welcome, ' + username + '!';
}

