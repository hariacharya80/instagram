import InstagramLogo from "../assets/images/instagram.png";
function Loading() {
  return (
    <section className="absolute w-screen h-screen flex flex-col gap-10 items-center justify-center">
      <img src={InstagramLogo} width={"100px"} alt="Loading..." />
      <div className="w-4 h-4 border-2 border-rose-500 border-t-white animate-spin rounded-full p-2"></div>
    </section>
  );
}

export default Loading;
