import "../styles/tailwind.css";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen min-w-full bg-gray-100 text-gray-700 pb-10 overscroll-none">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
