// items
import { NotFound } from 'app/client/screens'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { client } from '../../../../../../utils/routes/client'

import { SMain, Sale, SClosing, Started, Contact } from '../../components'

export default () => {
  return (
    <Switch>
      <Route path={client.advice.selling} exact component={SMain} />
      <Route path={client.selling_advice.sale} exact component={Sale} />
      <Route path={client.selling_advice.closing} exact component={SClosing} />
      <Route path={client.selling_advice.started} exact component={Started} />
      <Route path={client.selling_advice.contact} exact component={Contact} />
      <Route path={'*'} component={() => <NotFound simpleNoLinks />} />
    </Switch>
  )
}