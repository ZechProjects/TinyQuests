/* eslint-disable react-hooks/exhaustive-deps */
import PrimaryButton from "@/components/Button";
import { useWeb3 } from "@/contexts/useWeb3";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProgressBar from "@/components/ProgressBar"; // Make sure the path is correct

export default function Phone() {
  const { address, getUserAddress, sendCUSD, getNFTs } = useWeb3();
  const [signingLoading, setSigningLoading] = useState(false);
  const [tx, setTx] = useState<any>(undefined);

  const titleText = {
    fontSize: "2em",
    fontWeight: "bolder",
  };

  const titleStyle = {
    color: "black",
    backgroundColor: "lightgray",
    padding: "20px",
    borderRadius: "5px",
    borderColor: "black",
    borderWidth: "0px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add drop shadow
  };

  const title2Text = {
    fontSize: "1.5em",
    fontWeight: "bolder",
  };

  const subContainerStyle = {
    color: "black",
    backgroundColor: "lightgray",
    padding: "20px",
    borderRadius: "5px",
    borderColor: "black",
    borderWidth: "0px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add drop shadow
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <>
        <div
          className="h2 text-center justify-center items-center"
          style={titleStyle}
        >
          <img src="jumia-logo.jpg" width="60px"></img>
          <h1 style={titleText}>Save for a Phone</h1>
          <span>
            <b>Quest Sponsor:</b> Jumia
          </span>
          <br />
          <span>
            <b>Prize(s):</b> Monthly - 1 x iPhone 15, <br />
            Weekly - 10 x cUSD20
          </span>
          <br />
          <span>
            <b>Fee:</b> 1%
          </span>
          <br />
          <span>
            <b>Goal:</b> cUSD1,000
          </span>
          <br />
          <span>
            <a href="#">Terms</a>
          </span>
        </div>
        Coming soon
        <br />
        <br />
        <br />
        <hr />
        <h2 style={title2Text}>Active Quest(s)</h2>
        <div style={subContainerStyle}>None</div>
      </>
    </div>
  );
}
