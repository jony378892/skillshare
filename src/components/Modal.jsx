import toast from "react-hot-toast";

export default function Modal() {
  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset();
    document.getElementById("my_modal_1").close();
    toast("Submitted Successfully");
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box rounded-2xl">
        <h3 className="font-bold text-xl text-center mb-3">
          Book Your Session
        </h3>
        <p className="text-center text-gray-500 mb-4">
          Fill out your information below to confirm your booking.
        </p>

        <form method="dialog" className="space-y-3" onSubmit={handleSubmit}>
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
  );
}
