export const admin = {
  admin: "/admin",
  dashboard: "/admin/dashboard",
  site: "/admin/site",
  projects: "/admin/projects",
  messages: "/admin/messages",
};

export const getAdminRoutesArray = () => {
  let routes:any = admin;
  let arr: any = [];
  for (const name in routes) {
    for (const r in routes) {
      if (name === r && routes[name] !== '/') {
        for (const str in routes[name]) {
          arr.push(routes[name][str])
        }
      }
    }
  }
  return arr;
};