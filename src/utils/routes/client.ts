// client routing
export const client = {
  // main
  home: "/",
  about: {
    main: "/about-us",
    company: "/about-us/company",
    team: "/about-us/our-team",
    faqs: "/about-us/faqs",
  },
  properties: {
    main: "/properties",
    find: "/properties/find-a-home",
    report: "/properties/report-a-listing",
  },
  contact: {
    main: "/contact",
    list: "/contact/list-a-property",
    report: "/contact/report-a-concern",
    ask: "/contact/ask-a-question",
  },
  // other
  advice: {
    main: "/advice",
    glossary: "/advice/real-estate-glossary",
    buying: "/advice/buying-advice",
    selling: "/advice/selling-advice",
  },
  buying_advice: {
    buying: "/advice/buying-advice/buying-your-home",
    closing: "/advice/buying-advice/closing",
    ownership: "/advice/buying-advice/home-ownership",
    rent_v_buying: "/advice/buying-advice/renting-vs-buying",
    afford: "/advice/buying-advice/how-much-can-i-afford",
    next: "/advice/buying-advice/next-steps",
  },
  selling_advice: {
    sale: "/advice/selling-advice/the-sale",
    closing: "/advice/selling-advice/beyond-closing",
    started: "/advice/selling-advice/getting-started",
    contact: "/advice/selling-advice/contact-us",
  },
  calculators: {
    main: "/calculators",
    mortage: "/calculators/mortage",
    afford: "/calculators/affordabilty",
    refinance: "/calculators/refinance",
    amortization: "/calculators/amortization",
  },
  legal: {
    main: "/legal",
    fair_housing: "/legal/fair-housing-act",
    fraud_alert: "/legal/fraud-alert",
    terms: "/legal/terms-and-condition",
    privacy: "/legal/privacy-policy",
  },
  sitemap: "/sitemap",
  // sub
};

export const getClientRoutesArray = () => {
  let routes: any = client;
  let arr: any = [];
  for (const name in routes) {
    for (const r in routes) {
      if (name === r && routes[name]) {
        
        if (name === 'sitemap') {
          arr.push(routes.sitemap);
        } else {
          for (const str in routes[name]) {
            arr.push(routes[name][str]);
          }
        }

      }
    }
  }
  return arr;
};

export const appProjectRoute = (id: string) => `${client.properties}/${id}`;
