import HomeHeader from "./sections/home/Header/layouts";
import HomeJumbotron from "./sections/home/Jumbotron/layouts";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="mt-28">
        <HomeJumbotron />
      </div>
    </div>
  );
}
