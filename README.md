
# Map & Chill

## Introduction
*Map & Chill is a Yoga and Massage Locator in the Côte d'Azur (France). It helps customers find the best yoga teachers and massage therapists so they can enjoy a healthy, relaxing break in the French Riviera.*

![enter image description here](https://lh3.googleusercontent.com/WSTf6rm2ulE2PEXj7zt0ZAzO-gQVY4CYkPy3eFN5wOPoDLGQyIw7Effr_q19ZaAJ8bok1DvFr2s)

Map & Chill is a geo-location-based website that lists yoga and massage services in the French Riviera. Map & Chill consists of a lightweight, responsive static landing page built using Bootstrap and the Google Maps and Places API. As you read this document, you will find my complete development process, from UX strategy to deployment.

![enter image description here](https://lh3.googleusercontent.com/yHwTS7JKPwm8w0Q4mVEgwXekp33S4i8HeV0rzhM2iXPW1K2xBcwY1ZbqDr88Snu1qstXFTdd43U)

- [View Map & Chill on GitHub Pages](https://kescardoso.github.io/ms2-mapnchill/)
- [View the Repository on GitHub](https://github.com/kescardoso/ms2-mapnchill)

This project has both educational and entrepreneurial goals.

Thanks for appreciating Map & Chill with me!

[Kes Cardoso](http://www.kescardoso.com)

## Contents table

 1. [UX](#ux)
     - [Who is the target client: website users](#who-is-the-target-client-website-users)
     - [What is the client looking to achieve](#what-is-the-client-looking-to-achieve)
     - [User Stories](#user-stories)
 2. [Features](#features)
     - [Existing Features](#existing-features)
     - [Features Left to Implement](#features-left-to-implement)
 3. [Technologies Used](#technologies-used)
 4. [Testing](#testing)
 5. [Deployment](#deployment)
 6. [Credits](#credits)

## UX

###  Who is the target client: website users

- Residents and expats in the French Riviera looking for yoga, massage and holistic/alternative therapy services;

- Tourists visiting the French Riviera and looking for yoga, massage, and related services;

- Qualified and well-rated service providers (yoga teachers, massage therapists, and related holistic therapies) wishing to include their business in the map listings;

- The above users (residents, tourists, clients, and service providers) are mainly in Nice, but they can also be in the area that extends from Cannes to Monaco, and parts of the Mercantour;

- The website users are French (mainly from Southeast France and from Paris) and international clients (mostly from: Europe and the UK) between 25-55 years old and of all genders;

- The website users are English and French speakers.

- **Client Avatar:** The main client for this website is female between 28-42 years old English-speaker, living, having a second home or regularly visiting the Southeast France (French Riviera) and interested in yoga, massage, sound healing, alternative medicines, hiking, outdoor activities, vegetarian and organic food, eco-friendly lifestyle, holistic and health habits, and spirituality.

### What is the client looking to achieve

- The client wants to locate real and current yoga or massage services in the French Riviera. The client wishes to make use of an online tool that can easily, quickly, and intuitively show visual information that allows direct contact or booking.

- The client desires to quickly identify what services are in close distance to their accommodation or homes, and with a click see what category of services are offered to, therefore, be redirected to the service's homepage for contact or booking information.

- Service category (i.e., yoga types, and massage modalities), quality of services (well-rated, 4 stars and above according to google business ranking), and proximity to home or accommodation address are essential elements in the client's search and decision process.

- Most clients browse from their mobile devices. Therefore, the client needs a mobile-first responsive webpage with an interactive online map, that lays out clear visuals, few texts, and intuitive graphics that help them achieve their goals. As they search the interactive Map, they get local results with pop-up info-boxes containing information about their preferred services. They can check services info and easily access the company's website.

- This website is entirely responsive and user-friendly; it has been carefully optimized and tested for all devices: mobile, tablet, and desktop. Map & Chill displays a simple design: full-width one scrolling page with a format that resembles an app, presenting the interactive Map with map key and instructions to seamlessly and intuitively guide clients into finding the information they are looking for.

### User Stories

Anna is a 38-year-old female English-speaking tourist visiting Villefranche Sur Mer during her summer break. She came with her partner, who is an entrepreneur currently in the region for business, and they have no children. Anna wishes to have a relaxing experience while her partner is meeting his business colleagues, and so, Anna decides to look for a yoga teacher that can come to her private villa three times a week in the morning and she is also interested in booking a massage service either at home or in a spa close to her villa.

Anna uses her mobile phone to do her search, and she is an ideal user for Map & Chill. As a user:

1. She does a primary Google search for yoga and massage services in
    the Côte d'Azur.
    
2. She finds a link to Map & Chill, she clicks on it and starts experimenting with the website.

3. Using Map & Chill, Anna wishes to find in the interactive Map (which is built on Google's Javascript API) the services available nearby.

4. For such, she quickly reads the short instructions and then enters the address of her villa in the Search Box (which is built using Google Places and Autocomplete).

5. Anna quickly sees the available companies nearby, displayed on the Map by their correspondent marker (yoga, massage, sound therapy, and osteopathy).

6. She clicks on a yoga icon and sees an Info Box with the name of the yoga provider, the types of yoga they provide, and a link to their official website.

7. Anna sees detailed information about the yoga provider and uses their contact details and booking information.

8. She then uses Map & Chill again to locate a massage provider.

## Features
 
### Existing Features

1. **Hero Image and Logo:** shows a full width opening presentation with consistent branding and the Map & Chill Logo.

2. **Map Key:** displays and explains the icons (or markers) used on the Map to locate the services: yoga, massage, sound therapy, and osteopathy. It allows user to find precisely what they are looking for on the Map.

3. **Map Instructions:** explains, using text and topics, how to perform a successful search on the Map.

4. **Search Box:** allows the user to enter their home or accommodation address in the French Riviera so they can do a local search of services nearby. The Search Box is linked to the Map's API and uses Google Places and Google Autocomplete.

5. **The Map:** an interactive Map that works with automatic and manual scrolling (for desktop and mobile devices) where users can locate their desired services in the French Riviera.

6. **Footer:** Displays credits and links for contact and donation towards the author.

### Features Left to Implement

1. **More Services:** increasing the number of services available on the Map is an ongoing update feature planned for future versions.

2. **More Services Category:** Acupuncture and Pilates are additional services categories that are planned to be added in future versions to the Map Key and the Map.

3. **Data File:** In this initial development, it was not possible to separate the data (the list of businesses) from the Javascript code file. Further research and fixes are needed: the Google Maps API was not thoroughly fetching and integrating an external JSON file with the Javascript file. For better organization and separation of data and code, a JSON file containing all business listings is planned to be installed and integrated into future versions.

## Technologies Used

1. HTML, CSS, Javascript/JQuery.

2. [Bootstrap](https://getbootstrap.com/) - This project uses the **Bootstrap** Framework to facilitate a grid-system, responsive design, and optimal user experience.

3. [AWS Cloud9](https://www.awseducate.com/) - This project uses **Cloud9 by Amazon** as a development and testing environment.

4. [Google Fonts](https://fonts.google.com/) - This project uses **Google Fonts** to style the website fonts.

5. [Git](https://git-scm.com) - This project uses **Git** for version-control and for tracking changes in source code during development. 

6. [GitHub](https://github.com/) - This project uses **GitHub** as a remote code repository.

7. [GitHub Pages](https://pages.github.com/) - This project uses **GitHub Pages** for deployment.

8. [StackEdit](https://pages.github.com/) - This project uses **StackEdit** as an in-browser Markdown editor for beautiful, stress-free README writing.

9. [GeoJson](http://geojson.io/) this project uses **GeoJson** for optimal Map geolocation and accurate latitude and longitude calculation.

10. [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/tutorial) this project uses **Google Maps Javascript API** for Map installation with Google Search Autocomplete and Places integration.


## Testing

- **Responsiveness** -- The responsiveness of this website was consistently tested during the development process: on GITHUB pages using Chrome developer tools, as well as locally using real mobile devices, tablets, and desktops.

- **Browsers** -- The website was tested and verified using in Chrome, Safari, Firefox, and Opera.

- **Code Validation** -- The following  **validation services**  were used to check the code:
    - [W3C Markup Validator](https://validator.w3.org) was used to validate HTML.
    - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
    - [JSHint](https://jshint.com) was used to validate JavaScript.

- **Real User Input** -- I have asked friends and family to check and use the website on their desktop and mobile devices with positive feedback of proper functioning and design experience.

- **Practical Tests** -- Please, click on the linked titles below to open each test and see a screencast (mp4 file) on your browser.

    - Practical Test 1 [Searching a Business Address](http://www.kescardoso.com/wp-content/uploads/2019/10/MC2.mp4) -- This Screencast shows a search on the Map for a local business address.
    
    - Practical Test 2 [Searching Businesses Near Home Address](http://www.kescardoso.com/wp-content/uploads/2019/10/MC1.mp4) -- This Screencast shows a search on the Map for businesses around a home or accommodation address.

## Deployment

1. This Project was developed and stored in git using Cloud9

2. The Project's source files were regularly pushed to [GitHub repository kescardoso/MS2-mapnchill](https://github.com/kescardoso/ms2-mapnchill)

3. The Project's source file was published from GitHub repository to GitHub pages using GitHub default settings via the `master` branch

4. GitHub Pages was then enabled to publish the site from the `master` branch following this path:
    1. GitHub repository settings page
    2. At GitHub Pages Repository box (on Settings) the master branch was selected from the dropdown menu
    3. The action was saved by clicking the save button

5. The Project's source file is now published as a site on GitHub Pages at [Map & Chill](https://kescardoso.github.io/ms2-mapnchill/)

## Credits

1. **Code**
	- [Google API tutorial, from I Love Javascript Youtube Channel](https://www.youtube.com/channel/UCblsLrhM8zjRXy7lV2DJlqQ)
	- [Google Places Search Box Documentation, from Google](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox)
	- [Google Maps with multiple markers and infoboxes, from CodePen](https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0)
	- [Google Maps Controls, from Google](https://developers.google.com/maps/documentation/javascript/controls)
	- [Adding Controls to the Map, from Google](https://developers.google.com/maps/documentation/javascript/controls#Adding_Controls_to_the_Map)

2. **Media**
	- [Hero image: by Jens Kreuter (Unsplash)](https://unsplash.com/photos/PfK35Iw1JAo)
	- [Yoga Icon: by PhotoIdea3Studio (Flat Icon)](https://www.flaticon.com/free-icon/yoga_1964639)
	- [Massage Icon: by Freepik (Flat Icon)](https://www.flaticon.com/free-icon/spa_1057468)
	- [Sound Therapy Icon: by Freepik (Flat Icon)](https://www.flaticon.com/free-icon/gong_451939)
	- [Osteopathy Icon: by Freepik (Flat Icon)](https://www.flaticon.com/free-icon/loving_354478)

3. **Acknowledgements**

Gratitude to my awesome mentor Seun for her feminine and generous support throughout my coding training and journey. Also, to Code Institute Student Services for their amazing, gentle support. Thank you, from the bottom of my heart.