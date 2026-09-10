export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md text-center">
        {/* Maintenance Icon */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-amber-500/20 p-6">
            <svg
              className="h-16 w-16 text-amber-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold text-white">
          Site Under Maintenance
        </h1>

        {/* Description */}
        <p className="mb-8 text-lg text-slate-300">
          We&apos;re currently performing scheduled maintenance to improve your experience. We&apos;ll be back online shortly.
        </p>

        {/* Contact Information */}
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-400">
            Questions?
          </p>
          <a
            href="mailto:info@inventive-es.com"
            className="inline-flex text-lg font-semibold text-amber-400 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
          >
            info@inventive-es.com
          </a>
          <p className="mt-4 text-sm text-slate-400">
            Feel free to reach out with any questions or concerns.
          </p>
        </div>

        {/* Thank You Message */}
        <p className="mt-8 text-sm text-slate-400">
          Thank you for your patience.
        </p>
      </div>
    </div>
  );
}
