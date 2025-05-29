function BooksHeader() {
  return (
    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 flex flex-col items-center gap-2">
      <span className="flex items-center gap-3 justify-center">
        <span className="inline-block animate-bounce">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              fill="currentColor"
            />
            <rect x="7" y="8" width="10" height="2" rx="1" fill="#fff" />
            <rect x="7" y="12" width="7" height="2" rx="1" fill="#fff" />
          </svg>
        </span>
        <span>
          Welcome to your <span className="text-primary">Vault</span>
        </span>
      </span>
      <span className="text-base md:text-lg font-normal text-muted-foreground mt-2">
        Discover, collect, and manage your favorite books in style.
      </span>
    </h1>
  );
}
export default BooksHeader;
