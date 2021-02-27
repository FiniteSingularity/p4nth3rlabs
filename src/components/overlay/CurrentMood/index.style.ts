import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const dropDownBounce = keyframes`
  0% { 
    transform: translateY(-400%); 
  }
  10% { 
    transform: translateY(0); 
  }
  30% { 
    transform: translateY(-100px); 
  }
  50% { 
    transform: translateY(0); 
  }
  57% { 
    transform: translateY(-7px); 
  }
  64% { 
    transform: translateY(0); 
  }
  100% { 
    transform: translateY(0); 
  }
`;

const BannerContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const PantherContainer = styled(motion.div)`
  animation: ${dropDownBounce} 0.5s ease-in-out;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50px;
  z-index: 1;
`;

const CurrentMoodContainer = styled.div`
  width: 200px;
  position: absolute;
  right: 24px;
  bottom: 24px;
`;

export { CurrentMoodContainer, BannerContainer, PantherContainer };
