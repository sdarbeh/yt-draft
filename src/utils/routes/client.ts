// client routing
// export const client = {
//   // main
//   home: "/",
//   about: {
//     main: "/about-us",
//     company: "/about-us/company",
//     team: "/about-us/our-team",
//     faqs: "/about-us/faqs",
//   },
//   properties: {
//     main: "/properties",
//     find: "/properties/find-a-home",
//     report: "/properties/report-a-listing",
//   },
//   contact: {
//     main: "/contact",
//     list: "/contact/list-a-property",
//     report: "/contact/report-a-concern",
//     ask: "/contact/ask-a-question",
//   },
//   // other
//   advice: {
//     main: '/advice',
//     glossary: '/advice/real-estate-glossary',
//     buying: '/advice/buying-advice',
//     selling: '/advice/selling-advice',
//   },
//   buying_advice: {
//     buying: '/advice/buying-advice/buying-your-home',
//     closing: '/advice/buying-advice/closing',
//     ownership: '/advice/buying-advice/home-ownership',
//     rent_v_buying: '/advice/buying-advice/renting-vs-buying',
//     afford: '/advice/buying-advice/how-much-can-i-afford',
//     next: '/advice/buying-advice/next-steps',
//   },
//   selling_advice: {
//     sale: '/advice/selling-advice/the-sale',
//     closing: '/advice/selling-advice/beyond-closing',
//     started: '/advice/selling-advice/getting-started',
//     contact: '/advice/selling-advice/contact-us',
//   },
//   calculators: {
//     main: '/calculators',
//     mortage: '/calculators/mortage',
//     afford: '/calculators/affordabilty',
//     refinance: '/calculators/refinance',
//     amortization: '/calculators/amortization',
//   },
//   legal: {
//     main: "/legal",
//     fair_housing: '/legal/fair-housing-act',
//     fraud_alert: '/legal/fraud-alert',
//     terms: '/legal/terms-and-condition',
//     privacy: '/legal/privacy-policy'
//   },
//   sitemap: '/sitemap',
//   // sub
// };

export const client = {
  // main
  home: "/yt-draft/",
  about: {
    main: "/yt-draft/about-us",
    company: "/yt-draft/about-us/company",
    team: "/yt-draft/about-us/our-team",
    faqs: "/yt-draft/about-us/faqs",
  },
  properties: {
    main: "/yt-draft/properties",
    find: "/yt-draft/properties/find-a-home",
    report: "/yt-draft/properties/report-a-listing",
  },
  contact: {
    main: "/yt-draft/contact",
    list: "/yt-draft/contact/list-a-property",
    report: "/yt-draft/contact/report-a-concern",
    ask: "/yt-draft/contact/ask-a-question",
  },
  // other
  advice: {
    main: '/yt-draft/advice',
    glossary: '/yt-draft/advice/real-estate-glossary',
    buying: '/yt-draft/advice/buying-advice',
    selling: '/yt-draft/advice/selling-advice',
  },
  buying_advice: {
    buying: '/yt-draft/advice/buying-advice/buying-your-home',
    closing: '/yt-draft/advice/buying-advice/closing',
    ownership: '/yt-draft/advice/buying-advice/home-ownership',
    rent_v_buying: '/yt-draft/advice/buying-advice/renting-vs-buying',
    afford: '/yt-draft/advice/buying-advice/how-much-can-i-afford',
    next: '/yt-draft/advice/buying-advice/next-steps',
  },
  selling_advice: {
    sale: '/yt-draft/advice/selling-advice/the-sale',
    closing: '/yt-draft/advice/selling-advice/beyond-closing',
    started: '/yt-draft/advice/selling-advice/getting-started',
    contact: '/yt-draft/advice/selling-advice/contact-us',
  },
  calculators: {
    main: '/yt-draft/calculators',
    mortage: '/yt-draft/calculators/mortage',
    afford: '/yt-draft/calculators/affordabilty',
    refinance: '/yt-draft/calculators/refinance',
    amortization: '/yt-draft/calculators/amortization',
  },
  legal: {
    main: "/yt-draft/legal",
    fair_housing: '/yt-draft/legal/fair-housing-act',
    fraud_alert: '/legal/fraud-alert',
    terms: '/yt-draft/legal/terms-and-condition',
    privacy: '/yt-draft/legal/privacy-policy'
  },
  sitemap: '/yt-draft/sitemap',
  // sub
};

export const getClientRoutesArray = () => {
  let routes:any = client;
  let arr: any = [];
  for (const name in routes) {
    for (const r in routes) {
      if (name === r && routes[name] !== '/yt-draft') {
        for (const str in routes[name]) {
          arr.push(routes[name][str])
        }
      }
    }
  }
  return arr;
};

export const appProjectRoute = (id: string) => `${client.properties}/${id}`;
