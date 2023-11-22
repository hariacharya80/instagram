import { Dispatch, SetStateAction } from "react";

interface TopMessageProps {
  text: string;
  showMessage: Dispatch<SetStateAction<boolean>>;
}
function TopMessage({ text, showMessage }: TopMessageProps) {
  return (
    <div className="z-50 absolute left-0 top-0 w-screen p-4 bg-rose-600 text-white flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold">Warning Visitors!</h1>
      <p className="xl:w-1/2 mb-3 mt-5">{text}</p>
      <div className="flex flex-col md:flex-row  w-1/2 justify-center items-center gap-2">
        <button
          className="bg-white w-full text-black p-2 rounded hover:bg-black hover:text-white transition-colors"
          onClick={() => showMessage(false)}
        >
          I understand
        </button>
        <button
          onClick={() => {
            localStorage.setItem("warningAccepted", "");
            window.open("https://www.instagram.com/", "_blank");
          }}
          className="bg-black w-full text-white hover:bg-slate-700 transition-colors p-2 rounded"
        >
          Visit Real Instagram
        </button>
      </div>
    </div>
  );
}

export default TopMessage;
