import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { focusOutline } from './shared-styles'
import { GitHub, Spotify, Twitter, YouTube } from './social-icons'

const Wrapper = styled.footer`
  text-align: center;
  position: relative;
  margin: ${({ theme }) => theme.spacing[8]} 0;
  .name {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.fontFamily.mono};
    line-height: ${({ theme }) => theme.lineHeight.none};
    margin: ${({ theme }) => theme.spacing[8]} 0;
  }
  hr {
    margin: ${({ theme }) => theme.spacing[10]} 0;
    opacity: 0.5;
    color: var(
      --colour-secondary,
      ${({ theme }) => theme.colors.gray[300]}
    );
  }
  svg {
    margin: 0 ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[6]};
    &:hover {
      transform: translateY(-2px);
      transition: transform 0.35s;
    }
  }
  a {
    display: inline-block;
    ${focusOutline}
  }
  .sign-off {
    margin-top: ${({ theme }) => theme.spacing[6]};
    margin-bottom: ${({ theme }) => theme.spacing[16]};
    ${down('sm')} {
      margin-bottom: ${({ theme }) => theme.spacing[24]};
    }
  }
`

export const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Account"
      >
        <Twitter />
      </a>
      <a
        href="https://github.com/gregrossdev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Account"
      >
        <GitHub />
      </a>
      <a
        href="https://open.spotify.com/user/gergatron"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify Account"
      >
        <Spotify />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube Account"
      >
        <YouTube />
      </a>

      <p className="sign-off">
        {`Built with Gatsby · Hosted on TBD · ${new Date().getFullYear()}`}
      </p>
    </Wrapper>
  )
}
