import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getQuake, selectQuake, QuakeModel } from "./";

export function Quake() {
  const quake: QuakeModel | null = useAppSelector(selectQuake);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuake());
  }, [dispatch]);

  if (!quake) return <h1>Loading...</h1>;

  return (
    <div className="lg:w-2/4">
      <div className="flex justify-center">
        <img src={quake.shakemap} className="lg:w-1/3 w-full" alt="gempa" />
      </div>

      {/* data */}
      <div className="bg-white rounded-t-lg">
        <div className="grid grid-cols-3 px-4">
          <div className="p-2 text-white bg-blue-800 m-2 rounded">
            <span style={{ fontSize: "35px" }} className="material-icons">
              schedule
            </span>
            <h3 className="text-xs">{quake.jam}</h3>
          </div>
          <div className="p-2 text-white bg-blue-800  m-2 rounded">
            {" "}
            <span style={{ fontSize: "35px" }} className="material-icons">
              show_chart
            </span>
            <h3 className="text-xs">{quake.magnitude}</h3>
          </div>
          <div className="p-2 text-white bg-blue-800  m-2 rounded">
            <span style={{ fontSize: "35px" }} className="material-icons">
              sensors
            </span>
            <h3 className="text-xs">{quake.kedalaman}</h3>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-amber-500">{quake.wilayah}</h1>

          <h3>{quake.tanggal}</h3>
        </div>
        <hr style={{ width: "90%" }} className="mx-auto my-2" />
        <div className="grid  grid-cols-2">
          <div>
            <h1 className="text-gray-400">Lintang</h1>
            <h1 className="text-lg">{quake.lintang}</h1>
          </div>
          <div>
            <h1 className="text-gray-400">Bujur</h1>
            <h1 className="text-lg">{quake.bujur}</h1>
          </div>
        </div>
        <div className="p-2 m-4 bg-blue-800 text-white rounded">
          <h2 className="text-sm">{quake.potensi}</h2>
        </div>
      </div>
    </div>
  );
}
