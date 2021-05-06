import Cookies from "js-cookie";

import { theme_cookie, font_cookie } from "../constants/app";
// all methods thats not relating to texts

/// ------------------------- Clears all app cookies
export const clearCookies = () => {
  // removes token, theming and user font size
  Cookies.remove(theme_cookie);
  Cookies.remove(font_cookie);
};

export const getHashPaths = () => {
  const { hash } = window.location
  return hash.replace('#', '')
}

export const convertPath = (path: string) => path.split('-').join(' ')

export const strDistance = (s1: string, s2: string) => {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
};

export const getDomRefs = (ref: any) => {
  if (ref && ref.current) {
    const node = ref.current;
    const parent = node.parentNode;

    return {
      node: {
        element: node,
        height: node.offsetHeight,
        width: node.offsetWidth,
      },
      parent: {
        element: parent,
        height: parent.offsetHeight,
        width: parent.offsetWidth,
      },
    };
  }
  return undefined
};

// ----------- OBJECTS
export const objToArr = (obj: any) => {
  return Object.keys(obj).map(key => [key, obj[key]]);
}


export const isObjEmpty = (obj: any) => Object.keys(obj).length === 0;

export const objKeysHasLength = (obj: any) => {
  if (!obj) return false

  const invalid: string[] = []

  for (const key in obj) {
    const field = obj[key]

    if (!field || field.length === 0) {
      invalid.push(key)
    }
  }

  return invalid.length > 0 ? false : true
}

interface GetWindowSearch {
  returnString?: boolean
}

export const getWindowSearch = ({ returnString }: GetWindowSearch) => {
  const { search } = window.location
  const query = search.substring(1)

  if (returnString) {
    return query
  }

  return Object.fromEntries(new URLSearchParams(query)) as object
}

export const formatBytes = (bytes: number) => {
  const decimals = 2
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const blobToData = (blob: Blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}

export const vibrate = (number?: number) => window.navigator.vibrate(number ? number : 150)