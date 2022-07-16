import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponseContainer,
  Heading,
  DirectionDescription,
  GradientDirectionsList,
  ColorPickerContainer,
  CustomInputColorContainer,
  ColorValue,
  CustomInput,
  GeneratorButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323, #014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput},${toColorInput}`,
    })
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      gradientValue,
      fromColorInput,
      toColorInput,
      activeGradientDirection,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponseContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionDescription>Choose Direction</DirectionDescription>
          <GradientDirectionsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionsList>
          <DirectionDescription>Pick the Colors</DirectionDescription>
          <ColorPickerContainer>
            <CustomInputColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </CustomInputColorContainer>
            <CustomInputColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColor}
              />
            </CustomInputColorContainer>
          </ColorPickerContainer>
          <GeneratorButton onClick={this.onClickGenerate}>
            Generates
          </GeneratorButton>
        </ResponseContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
