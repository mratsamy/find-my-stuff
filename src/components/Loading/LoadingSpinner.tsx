import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export function LoadingSpinner() {
  return (
    <Loader
      type="TailSpin"
      color="dodgerblue"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
