import React, {useState} from 'react';
import WheelComponent from "react-wheel-of-prizes";
import Confetti from 'react-confetti';
import './spinner.css'

const Spinner = () => {

  const [points, setPoints] = useState(true);
  const [show, setShow] = useState(true);
  const [hadiah, setHadiah] = useState("")
  const segments = [
    "Rp 20.000",
    "Rp 5.000",
    "Rp 5.000",
    "NMAX",
    "Rp 10.000",
    "Rp 15.000",
    "Rp 10.000",
    "Rp 20.000"
  ];

const winningsegment = [
    "Rp 20.000",
    "ZONK",
    "Rp 5.000",
    "Rp 10.000",
    "Rp 5.000",
    "Rp 15.000",
];

var randomwin = winningsegment[Math.floor(Math.random()*winningsegment.length)];

  const segColors = [
    "#362CA7",
    "#EE4040",
    "#362CA7",
    "#2E2E2E",
    "#20A73E",
    "#2E2E2E",
    "#20A73E",
    "#2E2E2E"
  ];
  const onFinished = (winner) => {
    console.log(winner)
    setShow(false)
    setHadiah(winner)
};

  const ponitschek = () => {
    if (!points) {
      alert("get more points");
    } else {
    }
  };

  return (
    <div className="wheel-box">
    {!show &&(
        <div>
            <Confetti/>
            {/* <div>
                {hadiah}
            </div> */}
        </div>
    )}
    {/* {show && ( */}
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment={randomwin}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        size={290}
        upDuration={500}
        buttonText="Spin"
        isOnlyOnce={points}
      />
    {/* )} */}
    </div>
  )
}

export default Spinner