// items
import { NotFound } from 'app/client/screens'
import { Route, Switch } from 'react-router-dom'
import { client } from 'utils/routes/client'
import {  Buying, BClosing, Ownership, RentVBuy, Afford, Next } from '../../components'

export default () => {
  return (
    <Switch>
      {/* <Route path={client.advice.buying} exact component={BMain} /> */}
      <Route path={client.buying_advice.buying} exact component={Buying} />
      <Route path={client.buying_advice.closing} exact component={BClosing} />
      <Route path={client.buying_advice.ownership} exact component={Ownership} />
      <Route path={client.buying_advice.rent_v_buying} exact component={RentVBuy} />
      <Route path={client.buying_advice.afford} exact component={Afford} />
      <Route path={client.buying_advice.next} exact component={Next} />
      <Route path={'*'} component={() => <NotFound simpleNoLinks />} />
    </Switch>
  )
}