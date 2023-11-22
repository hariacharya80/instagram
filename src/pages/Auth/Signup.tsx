import { useState } from "react";
import FullLogo from "../../assets/images/full_logo.png";
import Footer from "../../components/Footer";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="absolute w-full top-0 left-0 flex flex-col items-center">
      <section className="flex flex-col mt-10 min-w-[400px] w-fit">
        <div className="border-[1px] p-8">
          <div className="flex w-full items-center justify-center">
            <img src={FullLogo} alt="Instagram Logo" className="w-44" />
          </div>
          <fieldset>
            <input
              disabled={loading}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={
                loading
                  ? "border-2 cursor-not-allowed bg-slate-300 p-2 my-2 w-full rounded"
                  : "border-2 bg-slate-100 p-2 my-2 w-full rounded"
              }
              type="text"
              placeholder="Email"
            />
          </fieldset>
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
              placeholder="Username"
            />
          </fieldset>
          <fieldset>
            <input
              disabled={loading}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={
                loading
                  ? "border-2 cursor-not-allowed bg-slate-300 p-2 my-2 w-full rounded"
                  : "border-2 bg-slate-100 p-2 my-2 w-full rounded"
              }
              type="password"
              placeholder="Password"
            />
          </fieldset>
          <span className="text-sm text-slate-500 flex gap-1 mb-4">
            By clicking sing up, you agree to our
            <a className=" text-indigo-500 hover:text-indigo-700" href="/about">
              privacy policy.
            </a>
          </span>
          <button
            onClick={() => setLoading((prev) => !prev)}
            className={
              loading
                ? "w-full flex justify-center items-center gap-2 bg-[#5f9ced] text-white p-1 rounded-md cursor-not-allowed transition-colors"
                : "w-full bg-[#1877f2] text-white p-1 rounded-md hover:bg-[#0c50aa] transition-colors"
            }
          >
            {loading && (
              <div className="w-4 animate-spin h-4 rounded-full border-2 border-black border-t-white"></div>
            )}
            <span>{loading ? "Please wait.." : "Sign up"}</span>
          </button>
        </div>
        <div className="border-[1px] flex justify-center items-center my-4 p-8">
          <span className="text-slate-600">
            Already have an account?{" "}
            <a
              className="text-blue-600 hover:text-blue-900 transition-colors"
              href="/"
            >
              Log in
            </a>
          </span>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Signup;
