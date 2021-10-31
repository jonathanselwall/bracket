import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
`

export const Input = styled.input`
  width: 100%;
  appearance: none;
  flex: 1;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  background-color: var(--color-bg-number-input);
  border: none;
  text-align: center;
  color: var(--color-white);
`

export const InputControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputControlButton = styled.button`
  display: inline-flex;
  flex: 1;
  text-align: center;
  align-items: center;

  background-color: #25272a;
  border: none;
  margin: 0;

  color: var(--color-white);
  line-height: 1;
  cursor: pointer;
  appearance: none;
  opacity: 0.4;

  &:hover,
  &:focus-visible {
    opacity: 1;
  }
`
