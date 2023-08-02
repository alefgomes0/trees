export const Idk = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-1 bg-[#e3ede6] gap-8 h-[calc(100vh-120px)] items-center">
      <div className="col-start-1 col-end-2 w-[500px] h-[500px] ml-16 rounded-[50%] bg-[url('../../../images/undraw_nature_m5ll.png')] bg-cover bg-center"></div>
      <div className="flex flex-col mr-16  gap-6 self-start mt-[64px]">
        <h2 className="font-[#031206] text-5xl opacity-80">
          More wildfires are ravaging the world — and they are getting worse
        </h2>
        <h4 className="font-[#031206] text-lg leading-8 opacity-50">
          With average global temperatures on the rise, local and seasonal
          variations mean that droughts and heatwaves are causing more severe
          and more frequent wildfires. But you can help to ease the problem. We
          work with people across the world to oppose the wrecking damages of
          wildfires. Your generosity will help us bring a{" "}
          <span className="text-[#00851f] font-bold opacity-90">greener</span> future
          for everyone.
        </h4>
        <button className="text-[#dde9e0] w-[200px] h-auto py-2 bg-[#00851f] rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.3)_inset]">
          JOIN TODAY
        </button>
      </div>
    </div>
  );
};
