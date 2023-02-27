import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";
function Homepages() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white ">
      <h1 className="text-5xl font-bold mb-20">ChatGPT </h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col  items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />
            <h2>Example</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me" </p>
            <p className="infoText">
              "What is a different between cat and a dog"{" "}
            </p>
            <p className="infoText">"what is the color of a sun?" </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col  items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Change the ChatGPT model to use" </p>
            <p className="infoText">
              "Messages are stored in Firebase's firestore" 
            </p>
            <p className="infoText">"Hot Toast Notifications when ChatGPT is thinking" </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col  items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitation</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"May ocassionally generate incorrect information " </p>
            <p className="infoText">
              "May occasionally produce harmfull instruction or biased content"
            </p>
            <p className="infoText">"Limited knowledge of world and events after 2021" </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepages;
