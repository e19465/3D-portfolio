import PropTypes from "prop-types";
import "./styles.css";

// Define linear gradients
const dangerGradient =
  "linear-gradient(135deg, #6C0D0D, #B84A3E, #DAAE64, #E8C559, #FFD67A)";
const successGradient =
  "linear-gradient(135deg, #2F246E, #415C99, #00A0E5, #4BC4FF, #82DFFF)";

const Alert = ({ type, text }) => {
  const backgroundGradient =
    type === "danger" ? dangerGradient : successGradient;

  return (
    <div className="absolute top-20 right-10 p-2 overflow-hidden">
      <div
        className="p-2 text-indigo-100 overflow-hidden relative h-auto leading-none lg:rounded-full flex flex-col items-center lg:inline-flex shadow-xl"
        style={{
          background: backgroundGradient,
        }}
      >
        <div className="flex p-2">
          <p
            className={`${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
        <div className="w-full absolute bottom-0 h-2 mt-1 bg-white flex justify-end">
          <div className="h-full bg-white animate-bar"></div>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Alert;
