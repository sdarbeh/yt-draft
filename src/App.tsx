import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// routes
import Client from './app/client/Route'
import { AccessibilityModal } from './app/global/smart';

export default () => {
  return (
    <Router>
      <AccessibilityModal />
      <Client />
    </Router>
  )
}
