const GetStartedSection = ({ onGetStarted }) => (
    <div className="first-section z-[3] relative transition-all duration-1000 opacity-100 max-h-[100vh]">
      <div className="text-base md:text-lg font-normal tracking-[0.011em] leading-[1.381] pb-2">
        Apple Watch Studio
      </div>
      <div className="text-[64px] min-w-[50vw] font-semibold tracking-[-0.009em] leading-[1.0625]">
        <div>Choose a case.</div>
        <div>Pick a band.</div>
        <div>Create your own style.</div>
      </div>
      <div className="mt-[6%]">
        <button
          onClick={onGetStarted}
          className="px-4 py-2 text-base md:text-lg bg-[#0071e3] text-white rounded-3xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
  
  export default GetStartedSection;
  