
export default function Footer() {
  return (
    <>
      <footer className="bg-success text-center text-white w-100">
        <div className="text-center p-3">
          {new Date().getFullYear()} {("Copyright © ")}
          <a className="text-white" href="https://Suhaib.dev" target="_blank" rel="noreferrer">Suhaib Ahmad</a>
        </div>
      </footer>
    </>
  );
}
