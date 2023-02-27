function Homepages() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white ">
      <h1 className="text-5xl font-bold mb-20">ChatGPT </h1>
      <div>
        <div>
          <div className="flex flex-col  items-center justify-center mb-5">
            {/* sunicon */}
            <h2>Example</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me" </p>
            <p className="infoText">"What is a different between cat and a dog" </p>
            <p className="infoText">"what is the color of a sun?" </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepages;
