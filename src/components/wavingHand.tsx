import React from 'react';
import styled from 'styled-components';
import waveAnimation from './animations/waveAnimation';

const WavingEmoji = styled.span`
  animation-name: ${waveAnimation};
  animation-duration: 2.4s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
  font-size: 2.3em;
`;

const WavingHand = (): JSX.Element => (
  <WavingEmoji>
    <span aria-label="waving hand" role="img">
      👋
    </span>
  </WavingEmoji>
);

export default WavingHand;