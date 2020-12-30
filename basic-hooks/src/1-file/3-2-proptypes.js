import PropTypes from "prop-types";
import User from "./3-1-no-propTypes";
import PropTypes from "prop-types";

User.propTypes = {
  male: PropTypes.bool.isRequired,
  age: PropTypes.number,
  type: PropTypes.oneOf(["gold", "silver", "bronze"]),
  onChangeName: PropTypes.func,
  onChangeTItle: PropTypes.func.isRequired,
};

export default function User({ type, age, male, onChangeName, onChangeTItle }) {
  function onClick1() {
    const msg = `type: ${type}, age: ${age ? age : "알 수 없음"}`;
    log(msg, { color: type === "gold" ? "red" : "black" });
  }

  function onClick2(name, title) {
    if (onChangeName) {
      onChangeName(name);
    }
    onChangeTitle(title);
    male ? gomalePage() : goFemalePage();
  }

  return null;
}

function gomalePage() {}
function goFemalePage() {}
