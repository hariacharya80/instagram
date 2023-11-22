import PhoneScreenShot from "../../assets/images/phone.png";
import FullLogo from "../../assets/images/full_logo.png";
import Footer from "../../components/Footer";
function Login() {
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
                  className="border-2 bg-slate-200 p-2 my-2 w-full rounded"
                  type="text"
                  placeholder="Username or Email"
                />
              </fieldset>
              <fieldset>
                <input
                  className="border-2 bg-slate-200 p-2 my-2 w-full rounded"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button className="w-full bg-[#1877f2] text-white p-1 rounded-md hover:bg-[#0c50aa] transition-colors">
                Log in
              </button>
              <span className="text-sm text-slate-500 flex gap-1 mt-2">
                Can't remember password?
                <a className="hover:text-slate-700" href="/reset">
                  Forgot password
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
