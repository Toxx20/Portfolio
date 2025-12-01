// src/components/ProjectCard.jsx
export default function ProjectCard({ p }) {
  return (
    <article className="surface rounded-2xl overflow-hidden flex flex-col h-full border border-transparent hover:border-white/6 transition">
      {/* Image */}
      <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900">
        {p.image_url ? (
          <img
            src={p.image_url}
            alt={p.title}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            No image
          </div>
        )}

        {/* small stack pill top-left */}
        {p.stack && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
            {p.stack.split(",").slice(0,2).map(s => (
              <span
                key={s}
                className="text-xs px-2 py-1 rounded-full bg-white/6 text-white/90 backdrop-blur-sm"
              >
                {s.trim()}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-white">{p.title}</h3>
        <p className="text-sm text-gray-300 mt-2 line-clamp-3 flex-1">{p.description}</p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex gap-2 flex-wrap">
            {p.stack &&
              p.stack.split(",").slice(0,3).map(s => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/6 text-sm text-white/90"
                >
                  {s.trim()}
                </span>
              ))}
          </div>

          <div className="flex gap-2">
            {p.demo_url && (
              <a
                href={p.demo_url}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition"
              >
                Démo
              </a>
            )}
            {p.repo_url && (
              <a
                href={p.repo_url}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-lg border border-white/6 text-white text-sm hover:bg-white/6 transition"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
