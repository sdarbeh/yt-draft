import { Switch, Route } from 'react-router-dom'
import { client } from 'utils/routes/client'

// pages
import { NotFound } from '../index'
import { Main, List, Ask, Report } from './pages'

export default () => (
  <Switch>
    <Route path={client.contact.main} exact component={Main} />
    <Route path={client.contact.list} exact component={List} />
    <Route path={client.contact.ask} exact component={Ask} />
    <Route path={client.contact.report} exact component={Report} />
    <Route path={'*'} component={NotFound} />
  </Switch>
)