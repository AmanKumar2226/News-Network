import React from "react";
import { Watch } from "react-loader-spinner";
function Spinner() {
  return (
    <div className="loader flex justify-center p-5 items-center">
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Spinner;
