export default function Review() {
  return (
    <section className="text-black flex flex-col items-center h-full">
      <h1 className="mt-[49px] text-[36px] font-[Open_Sans] font-normal leading-[normal]">
        Prompt Review
      </h1>

      <section className="flex flex-col mt-[58px]">
        <button className="">Back</button>
        <div className="flex flex-col mt-[62px]  bg-gray-300  rounded-4xl">
          <textarea className="w-[1080px] h-[326px]  p-[40px]" />
          <button>Edit Prompt Area</button>
        </div>
      </section>
      <button className="mt-[80px] w-[245px] h-[60px] bg-gray-300 ">
        Generate Prompt
      </button>
    </section>
  );
}
