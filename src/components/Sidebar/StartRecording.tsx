import { Button } from '@material-ui/core';
import React from 'react';

interface IProps {
  start: () => void
}

const StartRecording: React.FC<IProps> = ({ start }) => (
  <Button fullWidth variant='contained' color='secondary' onClick={start}>
    <span aria-label='microphone' role='img'>🎤</span>&nbsp;Enable Recording
  </Button>
);

export default StartRecording;
