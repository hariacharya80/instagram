function Footer() {
  return (
    <section className="flex align-bottom py-4 justify-center">
      <p className="text-slate-500 w-1/2 text-center text-sm">
        Open Source Instagram Clone with{" "}
        <span className="text-rose-500">&hearts;</span>{" "}
        <a
          href="https://www.hari-acharya.com.np"
          target="_blank"
          className="hover:cursor-pointer hover:text-rose-600 transition-colors"
        >
          Hari Acharya
        </a>{" "}
        -{" "}
        <span
          onClick={() => {
            window.open(
              "https://www.github.com/hariacharya80/instagram",
              "_blank"
            );
          }}
          className="hover:cursor-pointer hover:text-slate-800"
        >
          View on GitHub
        </span>
      </p>
    </section>
  );
}

export default Footer;
