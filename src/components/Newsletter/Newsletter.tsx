export const Newsletter = () => {
  return (
    <div className="relative  h-[50svh] bg-[url('../../../images/azzedine-rouichi-ijdx54zvv28-unsplash.jpg')] bg-cover bg-center mb-16">
      <div className="grid items-center w-[100%] h-[100%] bg-black opacity-[85%] pl-16">
        <div className="grid grid-rows-[auto_auto_auto] grid-cols-1 gap-6">
          <h4 className="text-4xl text-white">Sign our newsletter</h4>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label className="text-white pb-1">Name</label>
              <input type="text" placeholder="John Doe" className="w-64 rounded placeholder:text-black placeholder:text-sm pl-1"/>
            </div>
            <div className="flex flex-col">
              <label className="text-white pb-1">Email</label>
              <input type="email" placeholder="johndoe@email.com" className="w-64 rounded placeholder:text-black placeholder:text-sm pl-1"/>
            </div>
          </div>
          <button className="w-32 h-8 bg-[#00851f] text-white rounded ">
            Subscribe
          </button>
        </div>
      </div>
      <h5 className="text-white text-sm absolute bottom-0 right-0">
        Photo by{" "}
        <a
          className="underline"
          href="https://unsplash.com/pt-br/@rouichi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Azzedine Rouichi
        </a>{" "}
        at{" "}
        <a
          className="underline"
          href="https://unsplash.com/pt-br/fotografias/ijdx54zvv28?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </h5>
    </div>
  );
};
