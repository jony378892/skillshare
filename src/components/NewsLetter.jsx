import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-white pt-8 pb-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Get the latest updates, articles, and exclusive offers straight to
          your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
