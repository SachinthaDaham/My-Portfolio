import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      border-radius: 10px;
      transition: transform 180ms var(--easing), box-shadow 180ms var(--easing), color 180ms var(--easing);

      &:hover,
      &:focus {
        transform: translateY(-3px);
        box-shadow: 0 0 0 2px rgba(105,169,255,0.18), 0 10px 18px -12px rgba(0,0,0,0.6);
        color: var(--green);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      <li>
        <a href="https://wa.me/94764220899" aria-label="Whatsapp" target="_blank" rel="noreferrer">
          <Icon name="Whatsapp" />
        </a>
      </li>
      <li>
        <a href="https://web.facebook.com/dahams.sachintha/" aria-label="Facebook" target="_blank" rel="noreferrer">
          <Icon name="Facebook" />
        </a>
      </li>
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
