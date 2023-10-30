const lastCourses = [
  {
    id: 1,
    title: "آموزش ساخت شبکه اجتماعی با MERN",
    teacher: "معصومی",
    price: 160000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D8%B3%D8%A7%D8%AE%D8%AA_%D8%B4%D8%A8%DA%A9%D9%87_%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C_%D8%A8%D8%A7_mern.jpg",
    time: "19:33:00",
  },
  {
    id: 2,
    title: "آموزش ساخت وب سایت خبری با React Node MySQL",
    teacher: "معصومی",
    price: 777000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%88%D8%A8_%D8%B3%D8%A7%DB%8C%D8%AA_%D8%AE%D8%A8%D8%B1%DB%8C_%D8%A8%D8%A7_react_node_mysql.jpg",
    time: "19:15:00",
  },
  {
    id: 3,
    title: "آموزش پروژه محور TailwindCSS",
    teacher: "خسروجردی",
    price: 499000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%BE%D8%B1%D9%88%DA%98%D9%87_%D9%85%D8%AD%D9%88%D8%B1_tailwindcss.jpg",
    time: "10:51:00",
  },
  {
    id: 4,
    title: "آموزش رایگان HTML برای برنامه نویسان",
    teacher: "مدائنی",
    price: null,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86_html_%D8%A8%D8%B1%D8%A7%DB%8C_%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87_%D9%86%D9%88%DB%8C%D8%B3%D8%A7%D9%86.jpg",
    time: "0:22:00",
  },
  {
    id: 5,
    title: "آموزش Blazor WebAssembly پیشرفته ( پروژه محور )",
    teacher: "مدائنی",
    price: 850000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_blazor_webassembly_%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87_(_%D9%BE%D8%B1%D9%88%DA%98%D9%87_%D9%85%D8%AD%D9%88%D8%B1_).jpg",
    time: "2:35:00",
  },
  {
    id: 6,
    title: "آموزش فلاتر از مقدماتی تا پیشرفته به همراه پروژه عملی",
    teacher: "عباسی صائب",
    price: 300000,
    image:
      "https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%81%D9%84%D8%A7%D8%AA%D8%B1_%D8%A7%D8%B2_%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C_%D8%AA%D8%A7_%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87_%D8%A8%D9%87_%D9%87%D9%85%D8%B1%D8%A7%D9%87_%D9%BE%D8%B1%D9%88%DA%98%D9%87_%D8%B9%D9%85%D9%84%DB%8C.jpg",
    time: "24:27:00",
  },
  {
    id: 7,
    title: "مقایسه اجمالی زبان های پایتون و Swift",
    teacher: "امرائی",
    price: null,
    image:
      "https://toplearn.com/img/course/400x286/%D9%85%D9%82%D8%A7%DB%8C%D8%B3%D9%87_%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C_%D8%B2%D8%A8%D8%A7%D9%86_%D9%87%D8%A7%DB%8C_%D9%BE%D8%A7%DB%8C%D8%AA%D9%88%D9%86_%D9%88_swift.jpg",
    time: "1:29:00",
  },
  {
    id: 8,
    title: "آموزش موشنری ۲",
    teacher: "اقارضی درمنی",
    price: 900000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%85%D9%88%D8%B4%D9%86%D8%B1%DB%8C_%DB%B2.jpg",
    time: "8:39:00",
  },
  {
    id: 9,
    title: "سینما فوردی (موشنری)",
    teacher: "اقارضی درمنی",
    price: null,
    image:
      "https://toplearn.com/img/course/%D8%B3%DB%8C%D9%86%D9%85%D8%A7_%D9%81%D9%88%D8%B1%D8%AF%DB%8C_(%D9%85%D9%88%D8%B4%D9%86%D8%B1%DB%8C).jpg",
    time: "19:53:00",
  },
  {
    id: 10,
    title: "طراحی سایت فروشگاهی مشابه دیجی کالا بدون کدنویسی (متخصص وردپرس 3)",
    teacher: "معروفی",
    price: 495000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C_%D8%B3%D8%A7%DB%8C%D8%AA_%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87%DB%8C_%D9%85%D8%B4%D8%A7%D8%A8%D9%87_%D8%AF%DB%8C%D8%AC%DB%8C_%DA%A9%D8%A7%D9%84%D8%A7_%D8%A8%D8%AF%D9%88%D9%86_%DA%A9%D8%AF%D9%86%D9%88%DB%8C%D8%B3%DB%8C_(%D9%85%D8%AA%D8%AE%D8%B5%D8%B5_%D9%88%D8%B1%D8%AF%D9%BE%D8%B1%D8%B3_3).jpg",
    time: "15:19:00",
  },
  {
    id: 11,
    title: "ساخت ویدیو چت با WebRTC",
    teacher: "میرزایی کلخوران",
    price: 120000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%B3%D8%A7%D8%AE%D8%AA_%D9%88%DB%8C%D8%AF%DB%8C%D9%88_%DA%86%D8%AA_%D8%A8%D8%A7_webrtc.jpg",
    time: "07:28:00",
  },
  {
    id: 12,
    title: "آموزش مدلسازی پایه و ماشین لرنینگ با پایتون",
    teacher: "ساوه دربندسری",
    price: 850000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%85%D8%AF%D9%84%D8%B3%D8%A7%D8%B2%DB%8C_%D9%BE%D8%A7%DB%8C%D9%87_%D9%88_%D9%85%D8%A7%D8%B4%DB%8C%D9%86_%D9%84%D8%B1%D9%86%DB%8C%D9%86%DA%AF_%D8%A8%D8%A7_%D9%BE%D8%A7%DB%8C%D8%AA%D9%88%D9%86.jpg",
    time: "01:29:00",
  },
  {
    id: 13,
    title: "آموزش صفر تا صد ReactJs",
    teacher: "قربانی",
    price: 800000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D8%B5%D9%81%D8%B1_%D8%AA%D8%A7_%D8%B5%D8%AF_ReactJs.jpg",
    time: "65:00:00",
  },
  {
    id: 14,
    title: "آموزش معماری تمیز همراه با پیاده سازی اصول SOLID در ASP.NET Core",
    teacher: "مدائنی",
    price: 700000,
    image:
      "https://toplearn.com/img/course/400x286/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%85%D8%B9%D9%85%D8%A7%D8%B1%DB%8C_%D8%AA%D9%85%DB%8C%D8%B2_%D9%87%D9%85%D8%B1%D8%A7%D9%87_%D8%A8%D8%A7_%D9%BE%DB%8C%D8%A7%D8%AF%D9%87_%D8%B3%D8%A7%D8%B2%DB%8C_%D8%A7%D8%B5%D9%88%D9%84_solid_%D8%AF%D8%B1_asp.net_core.jpg",
    time: "18:33:00",
  },
  {
    id: 15,
    title: "حل 100 چالش برنامه‌نویسی در سی‌شارپ",
    teacher: "زارعی",
    price: 260000,
    image:
      "https://toplearn.com/img/course/%D8%AD%D9%84_100_%DA%86%D8%A7%D9%84%D8%B4_%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87%E2%80%8C%D9%86%D9%88%DB%8C%D8%B3%DB%8C_%D8%AF%D8%B1_%D8%B3%DB%8C%E2%80%8C%D8%B4%D8%A7%D8%B1%D9%BE.jpg",
    time: "07:15:00",
  },
  {
    id: 16,
    title: "اتصال یونیتی به دیتابیسmysqlاز طریق اینترنت",
    teacher: "پلارک",
    price: null,
    image:
      "https://toplearn.com/img/course/%D8%A7%D8%AA%D8%B5%D8%A7%D9%84_%DB%8C%D9%88%D9%86%DB%8C%D8%AA%DB%8C_%D8%A8%D9%87_%D8%AF%DB%8C%D8%AA%D8%A7%D8%A8%DB%8C%D8%B3mysql%D8%A7%D8%B2_%D8%B7%D8%B1%DB%8C%D9%82_%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA.jpg",
    time: "02:57:00",
  },
];
export default lastCourses;
