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
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box rounded-2xl">
          <h3 className="font-bold text-xl text-center mb-3">
            Book Your Session
          </h3>
          <p className="text-center text-gray-500 mb-4">
            Fill out your information below to confirm your booking.
          </p>

          <form method="dialog" className="space-y-3">
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full outline-none rounded-lg "
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full outline-none rounded-lg"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>

            <div className="modal-action flex gap-3 justify-between mt-6">
              <button
                type="submit"
                className="btn flex-1 btn-primary rounded-lg text-white font-semibold"
              >
                Submit
              </button>
              <button
                type="button"
                className="btn flex-1 rounded-lg"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
