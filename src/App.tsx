import { DisplayController } from 'app/controllers';
import { HashRouter as Router } from 'react-router-dom'
// routes
import Client from './app/client/Route'

export default () => {
  return (
    <Router>
      <DisplayController />
      <Client />
    </Router>
  )
}
