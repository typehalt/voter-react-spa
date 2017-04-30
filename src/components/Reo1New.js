import React from 'react';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import ChineseName from './Form/ChineseName';
import EnglishName from './Form/EnglishName';
import IdNumber from './Form/IdNumber';
import Gender from './Form/Gender';

import {grey400} from 'material-ui/styles/colors';

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class Reo1New extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 4,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 4 ? '製作供上載的表格' : '下一步'}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="返回"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div>
        <h1>新登記直選及超級區議會選民</h1>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>中文姓名</StepLabel>
            <StepContent>
              <p>
                首先，要填中文名，你叫咩名呢?
              </p>
              <p>
                <small style={{color: grey400}}>本人在香港身分證所載的姓名</small>
              </p>
              <ChineseName />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>英文姓名</StepLabel>
            <StepContent>
              <p>
                咁英文名呢?
              </p>
              <p>
                <small style={{color: '#999'}}>本人在香港身分證所載的姓名</small>
              </p>
              <EnglishName />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>身份證號碼及性別</StepLabel>
            <StepContent>
              <Gender />
              <IdNumber />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>住址</StepLabel>
            <StepContent>
              <p>
                <small style={{color: '#999'}}>本人在香港的住址</small>
              </p>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>聯絡資料及選項</StepLabel>
            <StepContent>
              <p>
                可選填，但請盡量提供至少一項聯絡資料，以便選舉事務處核對資料核對資料及防止種票。
              </p>
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}

export default Reo1New;
