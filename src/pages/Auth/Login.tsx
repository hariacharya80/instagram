import PhoneScreenShot from "../../assets/images/phone.png";
import FullLogo from "../../assets/images/full_logo.png";
import Footer from "../../components/Footer";
import { useState } from "react";
function Login() {
  const [loading, setLoading] = useState(false);
  // const [validation, setValidation] = useState({
  //   err: false,
  //   on: "",
  //   msg: "",
  // });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <section className="absolute w-screen h-screen left-0 top-0 flex flex-col justify-center">
        <div className="flex mt-10 justify-center items-center gap-2 w-screen">
          <div className="hidden md:block">
            <img
              src={PhoneScreenShot}
              width={"400px"}
              alt="Instagram on iPhone"
            />
          </div>
          <section className="flex flex-col min-w-[400px] w-fit">
            <div className="border-[1px] p-8">
              <div className="flex w-full items-center justify-center">
                <img src={FullLogo} alt="Instagram Logo" className="w-44" />
              </div>
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
                  placeholder="Username or Email"
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
                <span>{loading ? "Please wait.." : "Sign in"}</span>
              </button>
              <span className="text-sm text-slate-500 flex gap-1 mt-2">
                Can't remember password?
                <a className="hover:text-slate-700" href="/reset">
                  Forgot
                </a>
              </span>
            </div>
            <div className="border-[1px] flex justify-center items-center my-4 p-8">
              <span className="text-slate-600">
                Don't have an account?{" "}
                <a
                  className="text-blue-600 hover:text-blue-900 transition-colors"
                  href="/signup"
                >
                  Sign up
                </a>
              </span>
            </div>
          </section>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Login;
