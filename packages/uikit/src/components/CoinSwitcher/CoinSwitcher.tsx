import { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { bnb2CakeImages, cake2BnbImages } from "./constant";
import { SequencePlayer } from "./SequencePlayer";

export const CoinSwitcherWrapper = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;
  z-index: 31;
  width: 150px;
  height: 100px;
  overflow: hidden;
  cursor: pointer;
  transform: scale(0.6) translateX(-40px);
  @media screen and (min-width: 390px) {
    top: -70px;
    left: 20px;
    transform: scale(0.9) translateX(-30px);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    top: -20px;
    left: -10px;
    transform: scale(0.9) translateX(-10px);
  }
`;

export const SequenceWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

export const CoinSwitcher: React.FC<{ isDefaultBnb: boolean; onTokenSwitch: () => void }> = memo(
  ({ isDefaultBnb, onTokenSwitch }) => {
    const [isBnb] = useState(() => isDefaultBnb);
    return <Inner isDefaultBnb={isBnb} onTokenSwitch={onTokenSwitch} />;
  }
);

const BNB_CAKE_IMAGES = bnb2CakeImages();
const CAKE_BNB_IMAGES = cake2BnbImages();

const Inner: React.FC<{ isDefaultBnb: boolean; onTokenSwitch: () => void }> = memo(
  ({ isDefaultBnb, onTokenSwitch }) => {
    const [isBnb, setIsBnb] = useState(() => isDefaultBnb);
    return (
      <CoinSwitcherWrapper>
        <SequenceWrapper className={!isBnb ? "hidden" : undefined}>
          <SequencePlayer
            images={BNB_CAKE_IMAGES}
            onPlayStart={onTokenSwitch}
            onPlayFinish={() => {
              setIsBnb(false);
            }}
          />
        </SequenceWrapper>
        <SequenceWrapper className={isBnb ? "hidden" : undefined}>
          <SequencePlayer
            images={CAKE_BNB_IMAGES}
            onPlayStart={onTokenSwitch}
            onPlayFinish={() => {
              setIsBnb(true);
            }}
          />
        </SequenceWrapper>
      </CoinSwitcherWrapper>
    );
  }
);
