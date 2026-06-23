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
    address: "Էջմիածին",
  },
  {
    time: "11:00",
    title: "Հարսնացուի տուն",
    address: "Սևան գ Ծաղկունք",
  },
  {
    time: "14:30",
    title: "Պսակադրություն",
    address: "Ս․ Հռիփսիմե ",
  },
  {
    time: "17:00",
    title: "Հարսանյաց սրահ",
    address: "Արև Ռեստորանային Համալիր",
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