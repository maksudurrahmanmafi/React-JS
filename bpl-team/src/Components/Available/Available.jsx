import { use } from "react";
import personImg from "../../assets/user.jpg";
import flag from "../../assets/Group.jpg";

const Available = ({ playerPromise }) => {
  const result = use(playerPromise);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6">
      {result.map((res) => (
        <div key={res.id} className="card bg-base-100 shadow-xl p-4">
          <figure>
            <img
              src={res.img}
              alt={res.name}
              className="rounded-xl h-48 w-full object-cover"
            />
          </figure>

          <div className="mt-4 flex items-center gap-3">
            <img
              src={personImg}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg">{res.name}</h3>
          </div>

          <div className="flex justify-between items-center border-b py-3">
            <div className="flex items-center gap-2">
              <img src={flag} alt="" className="w-6" />
              <span>{res.country}</span>
            </div>

            <button className="btn btn-sm">{res.position}</button>
          </div>

          <div className="flex justify-between mt-3">
            <span className="font-semibold">Rating</span>
            <span>{res.rating}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span>{res.battingStyle}</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">${res.price}</span>
            <button className="btn  btn-sm">
              Choose Player
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Available;