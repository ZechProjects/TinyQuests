/* eslint-disable react-hooks/exhaustive-deps */
import PrimaryButton from "@/components/Button";
import { useWeb3 } from "@/contexts/useWeb3";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import ProgressBar from "@/components/ProgressBar";
import ConfettiController from "@/components/ConfettiController";
import Modal from "@/components/Modal"; // Ensure the correct path

interface ConfettiControllerRef {
  startConfetti: () => void;
}

export default function Car() {
  const {
    address,
    getUserAddress,
    sendCUSD,
    mintMinipayNFT,
    getNFTs,
    signTransaction,
  } = useWeb3();
  const [cUSDLoading, setCUSDLoading] = useState(false);
  const [newQuestLoading, setNewQuestLoading] = useState(false);
  const [signingLoading, setSigningLoading] = useState(false);
  const [userOwnedNFTs, setUserOwnedNFTs] = useState<string[]>([]);
  const [tx, setTx] = useState<any>(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getUserAddress();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const tokenURIs = await getNFTs();
      setUserOwnedNFTs(tokenURIs);
    };
    if (address) {
      getData();
    }
  }, [address]);

  async function startNewQuest() {
    if (address) {
      setNewQuestLoading(true);
      try {
        const tx = await sendCUSD(address, "0.1");
        setTx(tx);
      } catch (error) {
        console.log(error);
      } finally {
        setNewQuestLoading(false);
      }
    }
  }

  const confettiRef = useRef<ConfettiControllerRef>(null);

  async function sendingCUSD() {
    if (address) {
      if (confettiRef.current) {
        confettiRef.current.startConfetti();
        handleOpenModal();
      }
      //setSigningLoading(true);
      try {
        const tx = await sendCUSD(address, "0.1");
        setTx(tx);
      } catch (error) {
        console.log(error);
      } finally {
        setSigningLoading(false);
      }
    }
  }

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
          <img src="carmart.png" width="60px"></img>
          <h1 style={titleText}>Save for a Car</h1>
          <span>
            <b>Quest Sponsor:</b> Carmart.ng
          </span>
          <br />
          <span>
            <b>Prize(s):</b> Monthly - 1 x Toyota Corolla, <br />
            Weekly - 10 x cUSD100
          </span>
          <br />
          <span>
            <b>Fee:</b> 1%
          </span>
          <br />
          <span>
            <b>Goal:</b> cUSD5,000
          </span>
          <br />
          <span>
            <a href="#">Terms</a>
          </span>
        </div>

        <div className="w-full px-3 mt-7">
          <PrimaryButton
            loading={newQuestLoading}
            onClick={startNewQuest}
            title="Start New Quest"
            widthFull
          />
        </div>

        <br />

        <h2 style={title2Text}>Active Quest(s)</h2>

        <div style={subContainerStyle}>
          <ProgressBar currentValue={1000} maxValue={5000} />

          <div className="w-full px-3 mt-7">
            <PrimaryButton
              loading={signingLoading}
              onClick={sendingCUSD}
              title="Deposit 10 cUSD"
              widthFull
            />
          </div>
        </div>

        <Modal
          show={isModalOpen}
          onClose={handleCloseModal}
          title="Message Modal"
        >
          <p>You have won a prize!</p>
        </Modal>

        <ConfettiController ref={confettiRef} />
      </>
    </div>
  );
}
