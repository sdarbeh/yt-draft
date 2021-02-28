import { Switch, Route } from 'react-router-dom'
import { client } from '../../../../../utils/routes/client'

// pages
import { NotFound } from '../../other'
import { Main, List, Acquire, Report } from './pages'

export default () => (
  <Switch>
    <Route path={client.contact.main} exact component={Main} />
    <Route path={client.contact.list} exact component={List} />
    <Route path={client.contact.report} exact component={Report} />

    <Route path={'*'} component={NotFound} />
  </Switch>
)