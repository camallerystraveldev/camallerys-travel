import "../src/styles/tailwind.css";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen min-w-full bg-gray-100 text-gray-900">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
