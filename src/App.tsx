import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { client } from './utils/routes/client';
// routes
import Client from './app/client/Route'
import { AccessibilityModal } from './app/global/smart';

export default () => {
  return (
    <Router>
      <AccessibilityModal />
      <Switch>
        <Route path={client.home} component={Client} />
      </Switch>
    </Router>
  )
}
