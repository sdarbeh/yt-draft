import { Switch, Route } from 'react-router-dom'
import { client } from 'utils/routes/client'

// screens
import { 
  Home, About, Properties, Hiw, Contact, NotFound,
  Advice, Legal, Calculators, Sitemap
} from './screens'

export default () => (
  <Switch>
    <Route path={client.home} exact component={Home} />
    <Route path={client.about.main} component={About} />
    {/* <Route path={client.properties.main} exact component={Properties} /> */}
    <Route path={client.hiw} component={Hiw} />
    <Route path={client.contact.main} component={Contact} />

    <Route path={client.advice.main} component={Advice} />
    <Route path={client.legal.main} component={Legal} />
    <Route path={client.calculators.main} component={Calculators} />
    <Route path={client.sitemap} component={Sitemap} />

    <Route path={'*'} component={NotFound} />
  </Switch>
)