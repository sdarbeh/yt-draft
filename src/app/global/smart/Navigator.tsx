import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getHashPaths, convertPath } from 'utils/helpers/methods'
import { client, getClientRoutesArray } from 'utils/routes/client'

interface p {
  whiteText?: boolean;
  customPaths?: string[]
}

const home = { name: 'YT Properties', path: client.home }

export default ({ whiteText, customPaths }: p) => {
  const [paths, setPaths] = useState<any>([])
  let pathname = getHashPaths()

  useEffect(() => {
    let pathnames = pathname !== '/' ? pathname.split('/') : []
    let notFound = false;

    if (customPaths) {
      pathnames = ['', ...customPaths]
    } else {
      if (!getClientRoutesArray().includes(pathname)) {
        notFound = true
      }
    }

    !notFound ? setPaths(pathsArr(pathnames))
      : setPaths([home, { name: ' › Page Moved or Not Found' }])
  }, [pathname])

  if (paths.length === 0) return null
  const isLast = (i:number) => i === paths.length - 1

  return (
    <Container w={whiteText}>
      {paths.map((p: any, i: number) => (
        p.path ?
          <Link to={p.path} key={i} className={isLast(i) ? 'nav-active' : ''}>
            {p.name}
          </Link>
          :
          <span key={i} className={isLast(i) ? 'nav-active' : ''}>{p.name}</span>
      ))}
    </Container>
  )
}

const pathsArr = (pathnames: string[]) => {
  let arr: any = []
  pathnames.forEach((path: string) => {
    const lastPath = convertPath(pathnames[pathnames.length - 1])
    const prevPath = convertPath(pathnames[pathnames.length - 2])
    const name = convertPath(path)
    let arrow = ` › ${name}`

    switch (name) {
      case '':
        arr.push(home)
        break;
      case prevPath:
        arr.push({ name: arrow, path: `/${path}` })
        break;
      case lastPath:
        arr.push({ name: arrow })
        break;
      default:
        arr.push({ name: arrow, path })
        break;
    }
  })
  return arr
}

interface n {
  w: any;
  theme: any
}

const Container = styled.div`
  text-transform: capitalize;
  color: ${(p: n) => p.w ? p.theme.globalColors.white : null};
  a, span {
    padding-right: 3px;
  }
  a:hover {
    text-decoration: underline;
  }
  .nav-active {
    color: ${p => p.theme.primary};
    font-weight: bold;
    text-decoration: unset;
  }
`