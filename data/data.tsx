export const anim: any = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};

export const program = [
  {
    time: "9:00",
    title: "Փեսայի տուն",
    address: "https://www.google.com/maps/place/22+Baghramyan+St,+Vagharshapat/data=!4m2!3m1!1s0x406a94c45758b30f:0x643068ff2804c605?sa=X&ved=1t:242&ictx=111",
  },
  {
    time: "11:00",
    title: "Հարսնացուի տուն",
    address: "Սևան գ Ծաղկունք",
  },
  {
    time: "14:30",
    title: "Պսակադրություն",
    address: "https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B9+%D0%A0%D0%B8%D0%BF%D1%81%D0%B8%D0%BC%D0%B5/data=!4m2!3m1!1s0x0:0x5edc387da55a163a?sa=X&ved=1t:2428&hl=ru-AM&ictx=111",
  },
  {
    time: "17:00",
    title: "Հարսանյաց սրահ",
    address: "https://www.google.com/maps/place/AREV+HALL+ARMAVIR/data=!4m2!3m1!1s0x0:0x1d5d51fe5f536a7f?sa=X&ved=1t:2428&hl=ru-AM&ictx=111",
  },
];

export const text={
  title:"Դուք հրավիրված եք \n Նվերի և Գոհարի \n հարսանիքին",
  firstwho:"Նվեր և Գոհար",
  firstTxt:"Գեղեցիկ օր և մենք \n կդառնանք ամուսիններ",
  title1:"Սիրելի՛ ընկերներ և  բարեկամներ",
  descr1:"Սիրով հրավիրում ենք \n Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան օրվան",
  day:"25/07/2026",
  txtEnd:"Խնդրում ենք նախապես տեղեկացնել \n Ձեր մասնակցության մասին \n մինչև Հուլիսի 20-ը \n Սիրո՛վ սպասում ենք"
}

export const rsvp = 'https://script.google.com/macros/s/AKfycbx0XFs00VxRSe64JTdU0VFhOuvJj4nUK-hV90cuZMzK4UoZk2NYq_EYbH18tiS13l5t3A/exec'