AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Science Intern",
    cardImage: "./assets/images/experience-page/sysnav.png",
    place: "SYSNAV",
    time: "(July, 2021 - Present)",
    desp: `
    As part of the <b>Traffic Security</b> team, my missions were as follows:
    <ul>
    <li><b>Retrieval, Processing and Visualization</b> of data from the <b>ELK Stack</b>.</li>
    <li><b>Exploratory Data Analysis</b> of hundreds of millions of <b>Spatio-Temporal Data</b> points.</li>
    <li>Study of <b>Statistical Forcasting</b> algorithms (parameterized and non parameterized).</li>
    <li><b>Fine-Tuning</b> these algorithms for performance metrics Forecasting.</li>
    <li><b>Deployment</b> of a platform (DashBoard) for <b>Monitoring, Visualisation and Forecasting</b>.</li>
    </ul>
    `,
  },
  {
    title: "Website Administrator",
    cardImage: "./assets/images/experience-page/automatants.png",
    place: "Automatants - Association d'IA de CentraleSupélec",
    time: "(January, 2020 - December, 2020)",
    desp: `
    On the campus of the <b>University of Paris Saclay</b>, I was responsible for:
    <ul>
    <li><b>Maintaining & Developping</b> the association's website.</li>
    <li>Co-organising the association's annual event <b>Soirée de l'IA</b>.</li>
    <li>Organising a <b>Lecture & Tutorial</b> about <b>CNN architectures</b>.</li>
    <li>Organising a <b>Workshop</b> about the use of the <b>Google Colab</b>.</li>
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

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Huawei European University Challenge 2020",
    subtitle: "Finalist",
    image: "./assets/images/experience-page/huawei.png",
    desp: "I participated alongside other great members of the Automatants Association to this DataThon where we learned a lot about optical modeling and used state of the art Deep Learning architectures to perform this task.",
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
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
