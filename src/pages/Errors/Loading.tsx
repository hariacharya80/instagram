import LoadingAnimation from "../../assets/animation/loading.gif";
function Loading() {
  return (
    <section className="absolute w-screen h-screen flex justify-center items-center">
      <img src={LoadingAnimation} width={"200px"} alt="Loading..." />
    </section>
  );
}

export default Loading;
