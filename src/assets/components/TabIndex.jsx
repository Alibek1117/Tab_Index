import { useState } from "react";
import Modal from "./Modal";


const TabIndex = () => {
  const [contName, setContName] = useState("Positive");
  const [showModal, setShowModal] = useState(true)

  const handleTabClick = (tabName) => {
    setContName(tabName);
  };

  const handleInput = (e) => {
    e.preventDefault();
    const tabIndex = parseInt(e.target.children[0].value); // Convert the value to a number
    // console.log("ssss",tabIndex);
    switch (tabIndex) {
      case 1:
        setContName("Positive");
        break;
      case 2:
        setContName("Negative");
        break;
      case 3:
        setContName("Neutral");
        break;
      default:
        // alert("Not Found");
        setShowModal(false)
        break;
    }
  };

  const closeBtn = ()=>{
    setShowModal(true)
  }

  return (
    <div className="big__div">
      <div className="card">
        <form onSubmit={handleInput} className="top">
          <input name="tabIndex" type="text" placeholder="Enter tab index" />
          <button type="submit" className="btn">
            Change tab
          </button>
        </form>
        <div className="middle">
          {/* Use handleTabClick to set the 'contName' state */}
          <span
            onClick={() => handleTabClick("Positive")}
            className={`spn ${contName === "Positive" ? "active" : ""}`}
          >
            POSITIVE
          </span>
          <span
            onClick={() => handleTabClick("Negative")}
            className={`spn ${contName === "Negative" ? "active" : ""}`}
          >
            NEGATIVE
          </span>
          <span
            onClick={() => handleTabClick("Neutral")}
            className={`spn ${contName === "Neutral" ? "active" : ""}`}
          >
            NEUTRAL
          </span>
        </div>
        <p>{contName} content</p>
      </div>
      {!showModal && <Modal closeModal ={closeBtn}/>}
    </div>
  );
};

export default TabIndex;
