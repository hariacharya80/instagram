import { useState } from "react";
import FullLogo from "../../assets/images/full_logo.png";
import Footer from "../../components/Footer";

function Reset() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <section className="absolute w-full top-0 left-0 flex flex-col items-center">
      <section className="flex flex-col mt-10 min-w-[400px] w-fit">
        <div className="border-[1px] p-8">
          <div className="flex w-full items-center justify-center">
            <img src={FullLogo} alt="Instagram Logo" className="w-44" />
          </div>
          <p className="text-slate-500 text-sm mt-4 w-full text-center">
            Please provide your information to reset password.
          </p>
          <fieldset>
            <input
              disabled={loading}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className={
                loading
                  ? "border-2 cursor-not-allowed bg-slate-300 p-2 my-2 w-full rounded"
                  : "border-2 bg-slate-100 p-2 my-2 w-full rounded"
              }
              type="text"
              placeholder="Email or Username"
            />
          </fieldset>
          <button
            onClick={() => setLoading((prev) => !prev)}
            className={
              loading
                ? "w-full flex justify-center items-center gap-2 my-2 bg-[#5f9ced] text-white p-1 rounded-md cursor-not-allowed transition-colors"
                : "w-full bg-[#1877f2] text-white p-1 my-2 rounded-md hover:bg-[#0c50aa] transition-colors"
            }
          >
            {loading && (
              <div className="w-4 animate-spin h-4 rounded-full border-2 border-black border-t-white"></div>
            )}
            <span>{loading ? "Please wait.." : "Reset password"}</span>
          </button>
          <span className="text-sm text-slate-500 flex gap-1 mb-4">
            Remember password?
            <a className=" text-indigo-500 hover:text-indigo-700" href="/">
              Login
            </a>
          </span>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Reset;
