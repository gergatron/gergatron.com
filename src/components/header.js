import React from 'react'
import styled from 'styled-components'
import { Link, linkStyle, rainbowAnimation } from './shared-styles'
import { ToggleTheme } from './toggle-theme'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
  ${linkStyle}
`

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  &:hover {
    .dot-com {
      display: contents;
    }
  }
  .site-title {
    font-family: GREY, Inconsolata, monospace;
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    margin-top: ${({ theme }) => theme.spacing[1]};
    margin-bottom: 0.25rem;
    background: linear-gradient(
      var(
        --title-gradient-from,
        ${({ theme }) => theme.colors.primary[200]}
      ),
      var(
        --title-gradient-to,
        ${({ theme }) => theme.colors.primary[500]}
      )
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    .first-name {
      font-weight: 300;
    }
    .last-name {
      font-weight: 800;
    }
    .dot-com {
      display: none;
    }
  }
  p {
    margin-top: -${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSize.xs};
    ${rainbowAnimation}
  }

  button {
    position: absolute;
    right: 0;
    margin-top: 3px;
    background: none;
    border: none;
    img {
      width: 24px;
      margin-top: 3px;
    }
    border-radius: 25%;
    padding: 8px;
    outline: none;
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow.outline};
    }
  }
`

export const Header = ({ title, description }) => {
  return (
    <>
      <StyledHeader>
        <StyledLink to="/" id="top-of-page">
          <p className="site-title">
            <span className="first-name">Gerg</span>
            <span className="last-name">atron</span>
          </p>
          <p>{description}</p>
        </StyledLink>
        <ToggleTheme />
      </StyledHeader>
    </>
  )
}
