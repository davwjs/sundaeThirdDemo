import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import VideoOne from "../Video/1.mp4";

const VideoSection = styled.section`
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  max-height: 1100px;
  position: absolute;
  overflow: hidden;
  display: flex;

  @media screen and (max-width: 1356px) {
    object-fit: cover;
    height: 100vh;
  }

  @media screen and (max-width: 1156px) {
    object-fit: cover;
    height: 80vh;
  }

  @media screen and (max-width: 960px) {
    object-fit: cover;
    height: 90vh;
  }

  @media screen and (max-width: 755px) {
    object-fit: cover;
    height: 100vh;
  }

  @media screen and (max-width: 560px) {
    object-fit: cover;
    height: 100vh;
  }

  @media screen and (max-width: 414px) {
    object-fit: cover;
    height: 100vh;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
`;

const VideoSlide = styled.div`
  position: absolute;

  z-index: 1;
  width: 100%;
  height: 100%;
`;

const VideoSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0beg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const VideoImage = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const VideoContent = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #ffffff;
`;
const Video = () => {
  return (
    <VideoSection>
      <VideoWrapper>
        <VideoSlide>
          <VideoSlider>
            <VideoImage role="presentation" crossOrigin="anonymous" playsinline preload="auto" autoPlay loop muted tabIndex="-1" src={VideoOne} />
            <VideoContent />
          </VideoSlider>
        </VideoSlide>
      </VideoWrapper>
    </VideoSection>
  );
};

export default Video;
