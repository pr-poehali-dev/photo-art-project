import { useState } from 'react';

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const photos = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/files/44171fa2-698b-440e-b038-d019acc15d6b.jpg',
      title: 'Gallery Portrait',
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-[9/16] max-h-[85vh] mx-auto overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-radial from-white/30 via-white/10 to-transparent transition-opacity duration-1000 ${
                    imageLoaded ? 'opacity-100 animate-spotlight' : 'opacity-0'
                  }`}
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
                  }}
                />

                <img
                  src={photo.url}
                  alt={photo.title}
                  className={`w-full h-full object-contain transition-all duration-700 ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-sm font-light tracking-[0.2em] text-white/60 uppercase">
                  {photo.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-8 left-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-white/40 font-light tracking-wider text-xs uppercase">
            Gallery
          </div>
        </div>

        <div className="absolute bottom-8 right-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-white/40 font-light tracking-wider text-xs">
            01 / 01
          </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default Index;
