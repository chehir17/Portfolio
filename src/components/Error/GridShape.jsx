import grid01 from '../../assets/images/error/grid-01.svg';

export default function GridShape() {
  return (
    <>
      <div className="absolute right-0 top-0 -z-1 w-full max-w-auto xl:max-w-[450px]">
        <img src={grid01} alt="grid" />
      </div>
      <div className="absolute bottom-0 left-0 -z-1 w-full max-w-auto rotate-180 xl:max-w-[450px]">
        <img src={grid01} alt="grid" />
      </div>
    </>
  );
}
