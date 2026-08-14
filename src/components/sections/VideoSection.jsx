import { useState } from "react";

const VIDEO_ID = "Osd4DLpMNp4";
const THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="my-10 w-full bg-black">
      <div className="relative aspect-[16/7] w-full">
        {playing ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
            title="TUFFCORE training video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={THUMB}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            <button
              aria-label="Play video"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex size-16 items-center justify-center rounded-sm bg-white/90 shadow-xl transition-transform duration-200 hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="size-7 translate-x-0.5 fill-black"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default VideoSection;
