import { ReactComponent as StarIcon } from "../assets/icon-star.svg";

const RatedComponent = (props) => {
  return (
    <>
      <div
        className={`bg-[#F7F2F7] p-[10px] rounded-lg font-bold flex flex-col gap-[11px] lg:flex-row lg:gap-[30px] lg:w-fit lg:pl-[30px] lg:py-[20px] ${props._style} w-[320px]`}
      >
        <div className="flex gap-2 justify-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className="text-center text-[0.8rem] text-[#501F50]">
          Rated 5 Stars in {props.title}
        </p>
      </div>
    </>
  );
};

export default RatedComponent;
