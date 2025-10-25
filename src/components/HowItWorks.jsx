import React from "react";
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-blue-600 text-4xl mb-4" />,
      title: "Create an Account",
      description:
        "Sign up for free and set up your profile as a learner or a provider. It only takes a few minutes!",
    },
    {
      id: 2,
      icon: <FaSearch className="text-blue-600 text-4xl mb-4" />,
      title: "Find or Offer a Skill",
      description:
        "Browse popular skills or offer your own expertise to others in the community.",
    },
    {
      id: 3,
      icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />,
      title: "Connect & Learn",
      description:
        "Book sessions, chat with providers, and start learning new skills right away.",
    },
  ];

  return (
    <section className="bg-white py-10 px-6 sm:px-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex flex-col items-center">
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
