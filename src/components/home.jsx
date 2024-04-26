import CardHome from "./cardhome";
import One from "./carousel-with-one-card";
import Four from "./carousel-with-four-cards";

export default function Home() {
  

  return (
    <>
    <div className="my-10">
      <h1 className="text-3xl font-semibold text-center underline decoration-double">Latest Updates</h1>
    </div>
    <One/>
    <div className="my-10 p-5">
        <CardHome/>
    </div>
    <div className="my-10 p-5">
      <Four/>
    </div>
    </>
  );
}
