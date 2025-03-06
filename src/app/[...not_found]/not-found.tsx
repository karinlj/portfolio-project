import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="not_found_section">
        <div className="container">
          <h1 className="heading_3 upper">Not found – 404.</h1>

          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="small_heading">There was a problem.</h2>
              <p>We could not find the page you were looking for...</p>
              <p>
                Go back to<Link href="/"> Home</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
