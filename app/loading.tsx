export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0f0c] text-lime font-mono px-6" aria-live="polite" aria-busy="true">
      <div className="flex flex-col items-center gap-4">
        {/* Blinking Terminal Block */}
        <div className="flex items-center gap-2 text-2xl font-bold tracking-widest">
          <span>{">"}</span>
          <span className="h-6 w-3 bg-lime animate-pulse"></span>
        </div>
        <p className="text-zinc-500 text-xs uppercase tracking-widest animate-pulse">
          allocating_memory...
        </p>
      </div>
    </div>
  );
}
