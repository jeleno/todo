import styled from 'styled-components'

export const CircleCheckBoxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.091rem;
    width: 1.091rem;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.blue};
    border-radius: 999px;

    transition: border 0.1s;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span {
    border: 2px solid ${(props) => props.theme['blue-dark']};
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ span {
    background-color: ${(props) => props.theme['purple-dark']};
    border: 0;

    transition: background-color 0.1s;
  }

  &:hover input:checked ~ span {
    background-color: ${(props) => props.theme.purple};
    border: 0;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ span:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  span:after {
    left: 0.438rem;
    top: 0.231rem;
    width: 0.188rem;
    height: 0.438rem;
    border: solid white;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
