import React from 'react'

function Pagination(props) {
    let {pageNum, onNext, onPrev} = props

  return (
    <div className="flex justify-center items-center  my-4 ">
      <div
        onClick={onPrev}
        className="border-2 border-r-0 p-2 rounded-l-xl border-red-400"
      >
        Previous
      </div>
      <div className="border-2 p-2 border-red-400 border-r-0">{pageNum}</div>
      <div
        onClick={onNext}
        className="border-2 p-2 rounded-r-xl border-red-400"
      >
        Next
      </div>
    </div>
  );
}

export default Pagination