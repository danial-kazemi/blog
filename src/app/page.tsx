import Link from "next/link";
function Home() {
  return(
    <section className="main-page">
      <header className="header-section">
        <div className="text-lg">
          <h2>آموزش Next.js از ابتدا</h2>
        </div>
      </header>
      <div className="">
        <ul className="list">
          <li className="item">
            <Link href="/about">about</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home;