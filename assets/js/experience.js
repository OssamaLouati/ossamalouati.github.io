AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineering Intern",
    cardImage: "./assets/images/experience-page/softcentre.png",
    place: "SoftCentre",
    time: "(July, 2022 - September, 2022)",
    desp: `
    As part of the <b>Product development</b> team, my missions were as follows:
    <ul>
    <li><b>Testing and validation </b>the functionality and performance of the marketplace platform's web service and APIs to ensure they met the requirements and standards in favour of <b>Association Nationale des Ovins et Caprins (ANOC)</b>.</li>
    <li><b>Identifying and tracking </b>defects, working closely with the development team to resolve issues and ensure timely delivery of high-quality software.</b> points.</li>
    </ul>
    `,
  },
  {
    title: "Web developer",
    cardImage: "./assets/images/experience-page/rtc.jpg",
    place: "Road To CNC",
    time: "(July, 2022 - Present)",
    desp: `
    As a former <b>CPGE Student and a user</b>, The platform aims to provide:
    <ul>
    <li>A comprehensive and centralized resource for CPGE students in Morocco, to help them prepare for the challenging entrance exam and improve their chances of gaining admission to <b>top engineering schools</b>.</li>
    <li>During the examination period, there were over <b>2000 concurrent users</b>, which accounted for 57% of all CPGE students.</li>
    </ul>
    `,
  },
];

const showCards1 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1" style="height:350px">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "sktime",
    cardImage:
      "./assets/images/experience-page/sktime.jpg",
    description: "A unified framework for Time Series Analysis and Machine Learning.",
  },
];

const showCards2 = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
    (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height:500px ;width:400px">
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// club Section

const clubsection = document.querySelector(".club-section");
const mentor = [
  {
    title: "Head at the Web Cell",
    subtitle: "Club Informatique & Télécom at INPT",
    image: "./assets/images/experience-page/cit.png",
    desp: "CIT club offers free courses given by INPT students in different sectors, mine was the web dev field in which i gave courses in the web development field for both 1st & 2nd year students at INPT.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
    (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="https://citweb.live" target="blank" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  clubsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
