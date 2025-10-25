import Modal from "./Modal";

export default function SkillsDetailsCard({ skill }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 mt-6 px-6 pb-5">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-72 object-cover rounded-lg"
      />

      <div className="py-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {skill.skillName}
        </h3>
        <p className="text-gray-600 mb-3 line-clamp-3">
          {skill.description || "No description available."}
        </p>

        <div className="space-y-1 text-sm text-gray-500">
          <p>
            <span className="font-medium text-gray-700">Provider:</span>{" "}
            {skill.providerName}
          </p>
          <p>
            <span className="font-medium text-gray-700">Email:</span>{" "}
            {skill.providerEmail}
          </p>
          <p>
            <span className="font-medium text-gray-700">Rating:</span> ⭐{" "}
            {skill.rating}
          </p>
        </div>

        <div className="mt-5">
          <button
            className="btn btn-primary btn-outline btn-wide rounded-xl font-semibold shadow-md hover:scale-[1.02] transition"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Book Session
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal />
    </div>
  );
}
