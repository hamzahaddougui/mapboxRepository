import TestMat from "../src/components/TestMat";
import CheckyButtonContainer from "../src/common/CheckyButton/CheckyButtonContainer";

const Test = () => {
  const options = [
    { label: "Hey", name: "hey" },
    { label: "Hey1", name: "hey1" },
    { label: "Hey3", name: "hey2" },
  ];

  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <CheckyButtonContainer onClick={handleClick} checkedValues={["hey1"]} options={options} />
    </div>
  );
};

export default Test;
