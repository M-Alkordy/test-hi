const nav = document.getElementById("navbar");
const navItems = document.querySelectorAll(".nav-items li a");
const ulLinks = document.querySelector(".nav-items");
const links = document.querySelectorAll(".nav-items a");
const LanguagesTranslate = JSON.parse(localStorage.getItem("translations"));
const languageSelector = document.querySelector(".select-btn");
const selectOptions = document.querySelector(".options");
const select = document.querySelector(".select-input");
const options = document.querySelector(".select-options");
const hero = document.querySelector("#hero");
const about = document.querySelector("#about");
const servicesSection = document.querySelector("#services");
const contact = document.querySelector("#contact");
const menu = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const servicesOptions = document.querySelector(".select-services-options");
const supportBtn = document.querySelector("#support-btn");
const salesBtn = document.querySelector("#sales-btn");
const mobileLink = document.querySelectorAll(".nav-items-mobile li a");
const buttom = document.querySelector(".form .buttom");
const selectTitle = document.querySelector(".form .selectTitle");
let selectedFormId=0;
let SelectDataId=0;
const services = [
  {
    "id": 1,
    "en_name": "Car transportation",
    "ar_name": "نقل السيارات",
    "en_title": "Car transportation services",
    "ar_title": "خدمات نقل السيارات",
    "en_description": "High Star Logistics Company provides logistics services, which is considered one of the distinguished car transport companies in the Kingdom of Saudi Arabia and the Arabian Gulf, and it is also considered one of the least expensive car shipping companies in Saudi Arabia.",
    "ar_description":
      "تــقــدم شــركــة الــنــجـم الـعـالي لـلـخـدمــات الـلوجستيـة الـتــي تـعـتـبـر مـن شـركــات نـقـل الـسـيـارات الـممـيـزة فــي الـممـلـكـة العـربـيـة السعودية والخليج ، كما أنها تعتبر من ارخص شـركـات شـحـن الـسـيـارات داخـل السـعودية.",
    "image": "./../assets/images/Services/02.png"
  },
  {
    "id": 2,
    "en_name": "Livestock",
    "ar_name": "نقل المواشي",
    "en_title": "Livestock transportation services",
    "ar_title": "خدمات نقل المواشي",
    "en_description": "Of course, transporting live animals requires special care. Here we have many instructions and rules that we follow when transporting livestock. In addition to the general traffic safety rules for transporting livestock, as well as the chapter on animal welfare and hygiene during its transport. Therefore, livestock are always transported using special vehicles designated for this transport.",
    "ar_description":
      "بطبيعة الحال يتطلب نقل الحيوانات الحية عناية خاصة. و نحن هنا لدينا تعليمات وقواعد عديدة نتبعها في نقل المواشي. باÄضافة إلى قواعد سلامة المرور العامة لنقل المواشي و كذلك باب إحسان بالحيوان والنظافة الصحية به أثناء نقله . لهذا نقوم بنقل المواشي دائمÈ باستعمال مركبات خــاصــة مـخـصـصـــة لـهــذا الـنـقــل.",
    "image": "./../assets/images/Services/03.png"
  },
  {
    "id": 3,
    "en_name": "goods",
    "ar_name": "نقل البضائع",
    "en_title": "Goods transportation services",
    "ar_title": "خدمات نقل البضائع",
    "en_description": "We transport goods from one place to another in cities and from one city to another using trucks and heavy transport vehicles (trailers). One of the advantages of land shipping is the ability to transport a large number of shipments, which may reach 50 tons with ease. And with a GPS tracking system for all vehicles.",
    "ar_description":
      "نقوم فيه بنقل البضائع من مكان إلى آخر داخل المدن و من مدينة الى مدينة باستخدام الشاحنات وسيارات النقل الثقيل (التريلات) . من مميزات الشحن البري القدرة على نقل عدد كبير من الشحنات قد تصل إلى ٥٠ طن بكل سهولة. وبنظام التتبع Gps لكل المركبات.",
    "image": "./../assets/images/Services/04.png"
  },
  {
    "id": 4,
    "en_name": "Dry goods",
    "ar_name": "النقل الجاف",
    "en_title": "Dry transportation services",
    "ar_title": "خدمات النقل الجاف",
    "en_description": "We provide dry transportation services 24 hours a day, 7 days a week. We also provide full documentation of the transportation of products, including receipt, delivery, inspection, and insurance of the goods according to the customer's desire. We also serve our customers by tracking their loads and keeping them up to date.",
    "ar_description":
      "نقدم خدمات النقل الجاف على مدار الساعة وطوال أيام الأسبوع.وكذلك التوثيق التام عن نقل المنتجات من استلام و تسليم و فحص وتأمين على البضائع حسب رغبة العميل.وكذلك نخدم عملاءنا بتتبع حمولاتهم والاطلاع عليها أول بأول.",
    "image": "./../assets/images/Services/05.png"
  },
  {
    "id": 5,
    "en_name": "vehicles with drivers",
    "ar_name": "تأجير سيارات نقل مع السائقين",
    "en_title": "Renting transport vehicles with drivers",
    "ar_title": "تأجير سيارات النقل مع السائقين",
    "en_description": "The company provides buses and lorries for daily, monthly or annual rent to companies or institutions with a trained driver, who has sufficient knowledge of all routes and directions. And also, at very special prices .",
    "ar_description":
      "تقدم الشركة توفير باصات و دينات للايجار الـيـومــي والـشـهـري او الـسـنـوي للشركات او الــمــؤســســات مـــع ســــائـق مــــدرب، و عـلـى عــلـم كــافـي بـكـافـة الـطــرق و الاتـجـاهـات. وكـذلك بـأسعـار خـاصـة جدا.",
    "image": "./../assets/images/Services/06.png"
  },
  {
    "id": 6,
    "en_name": "Customs clearance",
    "ar_name": "خدمة التخليص الجمركي",
    "en_title": "Customs clearance service",
    "ar_title": "خدمة التخليص الجمركي",
    "en_description": "We provide our customers with customs clearance services through an advanced electronic system and a staff with competence and experience in the field. So that transactions are completed as quickly as possible",
    "ar_description":
      "نقدم لعملاءنا خدمات التخليص الجمركي من خلال نظام الكتروني متطور وبطاقم ذو كفاءة وخبرة في المجال . بحيث يتم انجاز المعاملات بأسرع وقت",
    "image": "./../assets/images/Services/07.png"
  },
  {
    "id": 7,
    "en_name": "Frozen Goods",
    "ar_name": "النقل البارد والمجمد",
    "en_title": "Refrigerated and frozen transportation services",
    "ar_title": "خدمات النقل البارد و المجمد",
    "en_description": "We offer refrigerated and frozen transportation. Providing refrigerated and frozen transportation services to facilities in a professional manner and with qualified and approved vehicles for transporting food, medicines and medical supplies.",

    "ar_description":
      "نـقـدم الـنـقــل الـمـبــرد والـمـجـمـد, و تــقـديـم خدماتالـنـقـل الـمـبـرد والـمـجـمـد للــمـنـشــآت بشـكل احتـرافي و بمركبات مؤهلةومعتمدة لنقل الاغذية و الادوية و المستلزمات الطبية .",
    "image": "./../assets/images/Services/01.png"
  }
]
// ================================= Close Mobile Navbar ========================================
mobileLink.forEach((e) =>
{
  e.addEventListener("click", () =>
  {
      document
        .querySelector("#mobile-navbar")
        .style.setProperty("display", "none", "important");
      document
        .querySelector(".overlay")
        .style.setProperty("display", "none", "important");
  })
})
// //=============================== change style Navbar On Scroll ================================
window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
});
supportBtn.addEventListener("click", () => {
  const lng = localStorage.getItem("lang") ?localStorage.getItem("lang") : "en"
  salesBtn.classList.remove("btn-primary")
  supportBtn.classList.add("btn-primary")
  select.classList.add("opacitySelect")
  buttom.classList.add("up")
  selectTitle.innerHTML=(lng == "en")? "service" : "الخدمة المطلوبة"
});
salesBtn.addEventListener("click", () => {
  supportBtn.classList.remove("btn-primary")
  salesBtn.classList.add("btn-primary")
  select.classList.remove("opacitySelect")
  buttom.classList.remove("up")
});
// //======================================== Toggle Navbar ======================================
closeIcon.addEventListener("click", () =>
{
  document.querySelector("#mobile-navbar").style.setProperty("display", "none", "important");
  document
    .querySelector(".overlay")
    .style.setProperty("display", "none", "important");
});
menu.addEventListener("click", () => {
  document.querySelector("#mobile-navbar").style.setProperty("display", "flex", "important");
    document
      .querySelector(".overlay")
      .style.setProperty("display", "block", "important");
});
//================================= Active Items On Scroll ========================================
const removeClass = (links) => {
  links.forEach((e) => {
    e.classList.remove("link-active");
  });
};
window.addEventListener("scroll", () => {
  if (
    window.scrollY >= hero.offsetTop &&
    window.scrollY < about.offsetTop - 400
  ) {
    removeClass(links);
    links[0].classList.add("link-active");
  } else if (
    window.scrollY >= about.offsetTop - 400 &&
    window.scrollY < servicesSection.offsetTop - 300
  ) {
    removeClass(links);
    links[1].classList.add("link-active");
  } else if (
    window.scrollY >= servicesSection.offsetTop - 400 &&
    window.scrollY < contact.offsetTop - 300
  ) {
    removeClass(links);
    links[2].classList.add("link-active");
  } else {
    removeClass(links);
    links[3].classList.add("link-active");
  }
});
// =============================== Select drop down =====================================
select.addEventListener("click", () => {
  options.classList.toggle("toggle-options");
});
// ================================= Translations =======================================
/* Show & Hide Select Language */
languageSelector.addEventListener("click", () => {
  selectOptions.classList.toggle("hide_lang_options");
  if (selectOptions.classList.contains("hide_lang_options")) {
    document.querySelector(".arrowDown").style.rotate = "";
  } else {
    document.querySelector(".arrowDown").style.rotate = "180deg";
  }
});
/* SetUp Language & store In Localstorage*/
function handleLanguage(lng)
{
  localStorage.setItem("lang", lng);
  setLanguage(lng);
  getServicesTitles();
  getServicesData(SelectDataId);
  getServicesSelect();
  SelectService(selectedFormId);
  languageSelector.click();
}
/* SetUp Language On Load Project */
window.onload = (e) => {
  const language = localStorage.getItem("lang") ? localStorage.getItem("lang"): "en";
  setLanguage(language);
}

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.innerHTML = LanguagesTranslate[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
  if (language == "en") {
    document.getElementById("stylesheet").href = "./assets/css/style.css";
    ulLinks.style.direction = "ltr";
    selectOptions.style.dispaly = "none";
  } else {
    document.getElementById("stylesheet").href = "./assets/css/style-ar.css";
    ulLinks.style.direction = "rtl";
    document.getElementById("name-input").placeholder = "الاسم";
    document.getElementById("number-input").placeholder = "الرقم";
    document.getElementById("email-input").placeholder = "البريد الإلكتروني";
    document.getElementById("message-input").placeholder = "الرسالة";
    selectOptions.style.dispaly = "none";
  }
};
// =============================  GET SERVICES DATA =============================
/* async function getData()
{
 await fetch("./../../services.json")
    .then((response) => response.json())
    .then((data) =>  localStorage.setItem("servicesData" , JSON.stringify(data)));
} 
getData();
let servicesData = JSON.parse(localStorage.getItem("servicesData")) */


function getServicesTitles()
{
  const lng = localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : "en";
  document.querySelector(".services-bar").innerHTML = services
    .map((el, index) => {
      return `
      <div id=${
        el.id % 2 === 0 ? "even" : "odd"
      } class="swiper-slide slide${index}" onClick="getServicesData(${
        el.id
      })"><div><h4>${lng == "en" ? el.en_name : el.ar_name}</h4></div></div>
      `;
    })
    .join("");
  document.querySelector(".slide0").click();
  document.querySelector(".slide0").classList.add("service_active");
}
getServicesTitles()

function getServicesData(id)
{
  SelectDataId=id
  if (id!=0) {
    const lng = localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : "en";
  document.querySelectorAll(".services-bar div")
    .forEach((el) => el.classList.remove("service_active"))
  document.querySelector(`.slide${id - 1}`).classList.add("service_active");
  
  let servicess = services.find((el) => el.id == id)
  document.querySelector(".service-content").innerHTML = `
        <div class="serve-info">
              <h2>${lng == "en" ? servicess.en_title : servicess.ar_title}</h2>
              <p>${
                lng == "en" ? servicess.en_description : servicess.ar_description
              }</p>
            </div>
            <div class="serve-image">
              <img src=${servicess.image} alt="" id=${`services-img${id}`}>
            </div>
    `;
    
  if (lng == "ar")
  {
      document.getElementById(`services-img${id}`).style.transform ="rotateY(180deg)";
  }
  }
}
function getServicesSelect()
{
  const lng = localStorage.getItem("lang") ?localStorage.getItem("lang") : "en"
  servicesOptions.innerHTML = services.map((el) =>
  {
    return `
    <li onclick="SelectService(${el.id})">${lng == "en" ? el.en_name : el.ar_name}</li>
    `;
  }).join("")
}

function SelectService(id) {
  selectedFormId = id;
  if (id!=0) {
    const lng = localStorage.getItem("lang") ?localStorage.getItem("lang") : "en"
  let title = services.find(element =>{return element.id == id})
  selectTitle.innerHTML=(lng == "en")? title.en_name : title.ar_name
  options.classList.toggle("toggle-options");
  }
}

