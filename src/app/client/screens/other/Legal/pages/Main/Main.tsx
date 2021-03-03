import React from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../../../../../../utils/routes/client'

export default () => {
  return (
    <div className="legal-content">
      <div>
        <Link className="legal-s-t" to={client.legal.terms}>Terms & Conditions</Link>
        <p className="legal-s-d">YT Properties LLC Terms & Conditions</p>
      </div>
      <div>
        <Link className="legal-s-t" to={client.legal.privacy}>Privacy Policy</Link>
        <p className="legal-s-d">Privacy Statement (YTP DOMAIN)</p>
      </div>
      <div>
        <Link className="legal-s-t" to={client.legal.fair_housing}>Fair Housing</Link>
        <p className="legal-s-d">YT Properties Fair Housing Act</p>
      </div>
      <div>
        <Link className="legal-s-t" to={client.legal.fraud_alert}>Real Estate Fraud</Link>
        <p className="legal-s-d">YT Properties LLC Fraud Alert</p>
      </div>
    </div>
  )
}