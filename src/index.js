const siteContent = { // DO NOT CHANGE THIS OBJECT
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2021",
    },
    "images": {
        "logo-img": "http://localhost:9000/img/logo.png",
        "cta-img": "http://localhost:9000/img/cta.png",
        "accent-img": "http://localhost:9000/img/accent.png",
    },
};

console.log('project wired!')

// nav
const navElem = document.querySelectorAll("nav a");

// navElem = document.getElementById("#");
// navElem.classList.add("italic");

// for (let i = 0; i < navElem.length; i++) {
//     navElem[i] = document.getElementById(navElem)

// }
navElem.forEach(navElem => navElem.classList.add('italic')); // if you need to add classes to multiple

navElem[0].textContent = "Services";
navElem[1].textContent = "Product";
navElem[2].textContent = "Vision";
navElem[3].textContent = "Features";
navElem[4].textContent = "About";
navElem[5].textContent = "Contact";


// images 

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = "http://localhost:9000/img/cta.png"

// logo img
const headerImg = document.querySelector("#logo-img");
headerImg.src = "http://localhost:9000/img/logo.png"

// middle img
const middleImg = document.querySelector("#middle-img");
middleImg.src = "http://localhost:9000/img/accent.png";


// cta

const headerElem = document.querySelector("h1");
headerElem.textContent = "DOM Is Awesome";

const headerButton = document.querySelector("button");
headerButton.textContent = "Get Started";


// main content

const mainElem = document.querySelectorAll("h4");
mainElem[0].textContent = "Features";
mainElem[1].textContent = "About";
mainElem[2].textContent = "Services";
mainElem[3].textContent = "Product";
mainElem[4].textContent = "Vision";
mainElem[5].textContent = "Contact";


const aboutElem = document.querySelectorAll("p");
aboutElem[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
aboutElem[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
aboutElem[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
aboutElem[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
aboutElem[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
aboutElem[5].textContent = "123 Way 456 Street Somewhere, USA";
aboutElem[6].textContent = "1 (888) 888-8888";
aboutElem[7].textContent = "sales@greatidea.io";

// const contactElem = document.querySelector("h4")
// contactElem[0].textContent = "Contact"

// const contactInfo = document.querySelectorAll("p")
// contactInfo[0].textContent = "123 Way 456 Street Somewhere, USA";
// footer 
const footerElem = document.querySelector("footer a");
footerElem.classList.add('bold'); // if you just need to add one class

footerElem.textContent = "Copyright Great Idea! 2021";







// const aboutElem = document.querySelector("h4:nth-of-type(1)");
// console.log(aboutElem)
// aboutElem.textContent = "About";

// const aboutContentElem = document.querySelector("p:nth-of-type(1)");
// aboutContentElem.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const servicesElem = document.querySelector("h4");
// servicesElem.textContent = "Services"

// const servicesContentElem = document.querySelector("p");
// servicesContentElem.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const productElem = document.querySelector("h4");
// productElem.textContent = "Product"

// const productContentelem = document.querySelector("4");
// productContentelem.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";