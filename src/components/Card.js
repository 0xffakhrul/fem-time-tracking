import React from "react";

const Card = ({ bgTop }) => {
  return (
    <>
      <div class={`${bgTop} min-w-full md:w-auto md:max-w-[16rem] md:min-w-[15rem] rounded-2xl pt-10 bg-no-repeat over bg-[right_1rem_top_-.7rem] bg-[url('assets/images/icon-work.svg')]`}>
        <div
          class={`bg-blue-card hover:brightness-150 p-8 flex flex-col rounded-2xl `}
        >
          <div class="flex items-center justify-between pb-8">
            <span class="title">Work</span>
            <span class="ellipsis-work"></span>
          </div>

          <div class="flex md:flex-col flex-row justify-between items-center md:items-start ">
            <span class="text-5xl font-light pb-4 ">
              <span class="current">5</span>
              <span>hrs</span>
            </span>
            <span class="previous text-Desaturatedblue text-sm pmd:r-12">
              Yesterday - 7hrs
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
