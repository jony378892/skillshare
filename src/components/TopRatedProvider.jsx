import { use } from "react";
import ProviderCard from "./ProviderCard";

const providersPromise = fetch("/providers.json").then((res) => res.json());

export default function TopRatedProviders() {
  const providersData = use(providersPromise);

  return (
    <section className="bg-white py-10 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Top Rated Providers
      </h2>

      <div className="grid grid-cols-1 px-5 lg:px-0 sm:grid-cols-3 lg:grid-cols-3 gap-6 ">
        {providersData.map((provider) => (
          <ProviderCard provider={provider} key={provider.providerId} />
        ))}
      </div>
    </section>
  );
}
