
export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white position-absolute bottom-0 w-100">
        <div className="text-center p-3">
          {new Date().getFullYear()} {("Copyright © ")}
          <a className="text-white" href="https://suahib.dev" target="_blank" rel="noreferrer">Suhaib Ahmad</a>
        </div>
      </footer>
    </>
  );
}
