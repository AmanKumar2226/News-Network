import CardHome from "./cardhome";
import One from "./carousel-with-one-card";
import Four from "./carousel-with-four-cards";

export default function Home() {
  

  return (
    <>
    <div className="my-10 mx-44 flex gap-2">
      <img src="./images/red-icon.png" className="py-3" alt="" />
      <h1 className="text-2xl font-semibold">Latest Updates</h1>
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
