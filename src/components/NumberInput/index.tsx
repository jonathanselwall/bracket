import {
  InputWrapper,
  Input,
  InputControlWrapper,
  InputControlButton,
} from './styles'

import ChevronUpIcon from '../../icons/chevron-up.svg'
import ChevronDownIcon from '../../icons/chevron-down.svg'

interface NumberInputProps {
  value: number
}

const NumberInput = ({ value }: NumberInputProps) => {
  return (
    <InputWrapper>
      <Input type="number" value={value} />
      <InputControlWrapper>
        <InputControlButton>
          <ChevronUpIcon />
        </InputControlButton>

        <InputControlButton>
          <ChevronDownIcon />
        </InputControlButton>
      </InputControlWrapper>
    </InputWrapper>
  )
}

export default NumberInput
