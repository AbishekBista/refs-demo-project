import { useRef } from "react";

export default function AddProjectPage({ onAddProject, onCancelProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  return (
    <div className="flex flex-col items-center justify-evenly h-1/3 w-full">
      <div className="w-3/4 flex flex-row justify-end items-stretch gap-5">
        <button onClick={onCancelProject}>Cancel</button>
        <button
          className="bg-black text-white py-2 px-6 rounded"
          onClick={() =>
            onAddProject({
              title: titleRef.current.value,
              description: descriptionRef.current.value.split("\n"),
              date: dateRef.current.value,
              tasks: [],
            })
          }
        >
          Save
        </button>
      </div>

      <div className="w-3/4 flex flex-col">
        <label className="font-semibold text-amber-700">TITLE</label>
        <input
          className=" bg-stone-300 mb-5 p-2 rounded"
          ref={titleRef}
          required
        />

        <label className="font-semibold text-amber-700">DESCRIPTION</label>
        <textarea
          className=" bg-stone-300 mb-5 p-2 rounded"
          ref={descriptionRef}
          required
        ></textarea>

        <label className="font-semibold text-amber-700">DUE DATE</label>
        <input
          className=" bg-stone-300 mb-5 p-2 rounded"
          type="date"
          ref={dateRef}
          required
        />
      </div>
    </div>
  );
}
