import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

export default function ProviderCard({ provider }) {
  return (
    <div
      data-aos="fade-up"
      className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden text-center p-6 flex flex-col items-center"
    >
      <img
        src={provider.image}
        alt={provider.providerName}
        className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100"
      />

      <h3 className="text-xl font-semibold text-gray-800 mb-1">
        {provider.providerName}
      </h3>
      <p className="text-gray-500 text-sm mb-2">{provider.category}</p>

      <div className="flex items-center justify-center gap-1 text-yellow-500 mb-4">
        <FaStar size={14} />
        <span className="text-gray-800 text-sm font-medium">
          {provider.rating}
        </span>
      </div>

      <Link
        to={`/provider/${provider.providerId}`}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
      >
        View Profile
      </Link>
    </div>
  );
}
