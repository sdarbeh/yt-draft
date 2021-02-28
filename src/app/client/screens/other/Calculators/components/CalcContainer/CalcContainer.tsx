import React, { useState } from "react";
import { calculatorIcon } from "../../../../../../../assets/icons/widgets";

// items
import { PageTitle } from "../../../../../../global/smart";
import { CenteredDiv } from "../../../../../../global/basic";
import { FormButton } from "../../../../../../global/form";
import { Container, Calc, Results } from './CalcContainerSttyle'

interface p {
  pageTitle: string;
  title: string;
  children: any;
  results?: any;
}

export default ({pageTitle, title, results, children, ...r}: p) => {
  return (
    <Container {...r}>
      <Calc>
        <PageTitle title={pageTitle} />
        <div className="calc-c-t">
          <h1>{title}</h1>
        </div>
        <form action="">
          {children}
          <div className="calc-btns">
            <button className="calc-reset">Reset</button>
            <div>
              <FormButton text={'Calculate'} />
            </div>
          </div>
        </form>
      </Calc>
      <Results>
        {results ? results : (
          <CenteredDiv className="no-results">
            <p>Your results will appear here</p>
            <span>Fill out the {title} and click "CALCULATE"</span>
            <div className="calc-icon">
              <CenteredDiv>{calculatorIcon}</CenteredDiv>
            </div>
          </CenteredDiv>
        )}
      </Results>
    </Container>
  )
}


