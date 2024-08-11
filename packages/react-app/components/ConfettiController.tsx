import React, { useState, useImperativeHandle, forwardRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiController = forwardRef((props, ref) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useImperativeHandle(ref, () => ({
    startConfetti() {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
    },
  }));

  return <>{showConfetti && <Confetti width={width} height={height} />}</>;
});

export default ConfettiController;
