import React from "react";
import { Link, withRouter } from "react-router-dom";
import strSimilarity from 'string-similarity'

import { Moved } from "./index";
import { MainContent, PopularLinks, Prediction } from "../NotFoundStyle";
import { convertPath } from "utils/helpers/methods";
import { getClientRoutesArray, client } from "utils/routes/client";

export default withRouter(({ location }: any) => {
  const { bestMatch } = strSimilarity.findBestMatch(location.pathname, getClientRoutesArray())
  const prediction = convertPath(bestMatch.target.split('/').slice(-1)[0])

  return (
    <MainContent>
      <div className="nf-body">
        {bestMatch.rating >= 0.6 && bestMatch.rating !== 1.0 && (
          <Prediction>
            <span>Are you looking for &nbsp;</span>
            <Link to={bestMatch.target}>
              {prediction}
            </Link>
          </Prediction>
        )}
        <Moved />
      </div>
      <PopularLinks>
        <p className="np-title">Popular Links</p>
        <div className="np-content">
          <div>
            <p className="np-ct">Find a Home</p>
            <Link to={client.properties.main}>Search for Real Estate</Link>
            <Link to={client.advice.buying}>Buying Advice</Link>
            <Link to={client.advice.glossary}>Real Estate Glossary</Link>
          </div>
          <div>
            <p className="np-ct">Cash For Your House</p>
            <Link to={client.contact.list}>List a property</Link>
            <Link to={'*'}>What To Expect</Link>
            <Link to={client.calculators.main}>Mortgage Calculators</Link>
          </div>
          <div>
            <p className="np-ct">Calculators</p>
            <Link to={client.calculators.mortage}>Mortage</Link>
            <Link to={client.calculators.afford}>Affordabilty</Link>
            <Link to={client.calculators.refinance}>Refinance</Link>
            <Link to={client.calculators.amortization}>Amortization</Link>
          </div>
          <div>
            <p className="np-ct">YT Properties</p>
            <Link to={client.about.company}>Why TYP?</Link>
            <Link to={'*'}>Getting Started</Link>
          </div>
        </div>
      </PopularLinks>
    </MainContent>
  )
})