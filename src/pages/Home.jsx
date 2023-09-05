import MainBanner from "../components/Banner";
import { useFetchLogements } from "../hooks/useApi";
import Card from "../components/Card.jsx";
import ErrorPage from "./ErrorPage.jsx";
import "./Home.scss";

export default function Home() {
  const { data, loading, error } = useFetchLogements();

  if (loading) return <div>Page is loading ...</div>;
  if (error) return <ErrorPage />;

  return (
    <div>
      <MainBanner />
      <section className="galery-container">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            picture={item.cover}
            href={`/logement/${item.id}`}
          />
        ))}
      </section>
    </div>
  );
}
