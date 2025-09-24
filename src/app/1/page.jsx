// src/app/1/page.jsx
import Header from "../1/components/Header";
import Headlines from "../1/components/Headlines";
import NewsGrid from "./components/NewsGrid.jsx";



export default function One() {
  return (
    <main>
      <Header />
      <Headlines />
      <NewsGrid />
    </main>
  )
}