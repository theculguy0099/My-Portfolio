import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from "gsap";
import './preloader.scss';

function LinearProgressWithLabel(props) {
    const el = React.useRef();
    const tl = React.useRef();
    const q = gsap.utils.selector(el);

    React.useEffect(() => {
        tl.current = gsap.timeline()
      .to(q(".square"), {
        opacity: .7
      })
      .to(q(".square"), {
        duration: 1.5, ease: "powerInOut", opacity: 1, repeat: -1, yoyo: true
      });
      }, [q]);
  return (
    <div className="preload">
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <div className="anime">
        <div className="load">
          <svg height="100%" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" version="1.1" viewBox="0 0 857 151" id="lo">
            <g id="kevin">
              <path id="kevin-k" stroke="#10e956" stroke-width="5" d="M40 3 L40 148 L70 148 L70 83 L130 148 L160 148 L100 85 L160 3 L130 3 L70 70 L70 3 Z" fill="none" stroke-linecap="butt" opacity="1" stroke-linejoin="miter"/>
              <path id="kevin-e" stroke="#10e956" stroke-width="5" d="M180 3 L180 148 H250 V125 H205 V85 H250 V60 H205 V25 H250 V3 H180 Z" fill="none" stroke-linecap="butt" opacity="1" stroke-linejoin="miter"/>
              <path id="kevin-v" stroke="#10e956" stroke-width="5" d="M270 3 L320 148 L340 148 L390 3 H360 L330 120 L300 3 Z" fill="none" stroke-linecap="butt" opacity="1" stroke-linejoin="miter"/>
              <path id="kevin-i" stroke="#10e956" stroke-width="5" d="M410 3 L410 148 L440 148 L440 3 H410 Z" fill="none" stroke-linecap="butt" opacity="1" stroke-linejoin="miter"/>
              <path id="kevin-n" stroke="#10e956" stroke-width="5" d="M460 3 L460 148 L490 148 L490 70 L550 148 L580 148 L580 3 L550 3 L550 78 L490 3 Z" fill="none" stroke-linecap="butt" opacity="1" stroke-linejoin="miter"/>
            </g>
          </svg>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <LinearProgressWithLabel value={progress} />
      </div>
    </Box>
  );
}
