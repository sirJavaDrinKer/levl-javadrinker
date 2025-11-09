import StyledHeader from "./components/styled-header";

export default function Home() {
  return (
    
    <div className="font-sans min-h-screen pb-20 flex flex-col items-center">
      <div className="h-10"></div>
      <StyledHeader />
      <div className="h-10"></div>

      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Hmm... you&apos;re early.</h1>
        <p className="text-lg text-gray-700">🤷</p><br />
        <p className="text-lg text-gray-700">It seems you&apos;ve found us before we were ready. We&apos;re working hard to get everything set up. In the meantime, feel free to join our community on Discord to stay updated!</p>
      </div>
    </div>
  );
}
