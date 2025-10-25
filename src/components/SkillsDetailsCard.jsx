export default function SkillsDetailsCard({ skill }) {
  return (
    <div className="shadow-lg mt-6">
      <img
        src={skill.image}
        alt=""
        className="w-full bg-cover h-96 bg-center"
      />
      <div className="p-3">
        <h3 className="text-xl font-semibold">{skill.skillName}</h3>
        <p>Description: {skill.description}</p>
        <p>{skill.providerName}</p>
        <p>{skill.providerEmail}</p>
        <p>{skill.rating}</p>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Book Session
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex flex-col gap-2">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="name"
                    name="name"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button className="btn" type="close">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>{" "}
      </div>
    </div>
  );
}
