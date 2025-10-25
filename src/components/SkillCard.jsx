import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

export default function SkillCard({ skill }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <figure className="h-56 w-full overflow-hidden">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="p-3 flex flex-col justify-between pb-5">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {skill.skillName}
          </h3>
          <p className="text-gray-500 text-sm mb-3">{skill.category}</p>

          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-gray-800">${skill.price}</span>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar size={14} />
              <span className="text-gray-800 text-sm font-medium">
                {skill.rating}
              </span>
            </div>
          </div>
        </div>

        <Link
          to={`/skill-details/${skill.skillId}`}
          className="btn btn-neutral btn-outline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
