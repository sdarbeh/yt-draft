import { CenteredDiv } from "app/global/basic";
import { PageTitle } from "app/global/smart";
import { calculatorIcon } from "assets/icons/widgets";
import { Calc, Container, Results } from "./CalcContainerSttyle";


interface p {
  pageTitle: string;
  title: string;
  children: any;
  results?: any;
}

export default ({ pageTitle, title, results, children, ...r }: p) => {
  return (
    <Container {...r}>
      <Calc>
        <PageTitle title={pageTitle} />
        <div className="calc-c-t">
          <h1>{title}</h1>
        </div>
        {children}
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


