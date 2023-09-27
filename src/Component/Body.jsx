import pngwing from "../assets/pngwing.png";
import chips from "../assets/chips.png";
import fruit from "../assets/fruit.png";
import chicken from "../assets/chicken.png";
import banner from "../assets/banner.png";
import cart from "../assets/cart.png";
import laps from "../assets/laps.png";
import star from "../assets/star.svg";

function Body() {
  return (
    <section className="bg-black w-full h-screen">
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between pt-10 ">
          <div className="flex flex-col gap-5 justify-start">
            <button className="border-[1px] border-red-600 rounded-full text-white flex gap-2 px-4 py-2 max-w-fit">
              <img src={pngwing} alt="" />
              Testy food forever
            </button>
            <h1 className="text-white text-6xl font-bold w">
              Eat your chicken just how
              <span className="text-red-600"> you like it!</span>{" "}
            </h1>
            <p className="text-white opacity-30 text-xl ">
              Chicken thighs, chicken drumsticks, buffalo hot sauce, cayenne
              pepper, garlic powder
            </p>
            <div className="flex gap-5">
              <button className="bg-red-600 px-4 py-2 rounded-full text-white">
                Order Now
              </button>
              <button className="border-[1px] border-white px-4 py-2 rounded-full text-white">
                See menu
              </button>
            </div>
            <div className="flex gap-5 items-center">
              <div className=" text-white opacity-30">
                <h1>5.000+</h1>
                <p className="text-sm">Customer</p>
              </div>
              <div className=" text-white opacity-30">
                <h1>8.000+</h1>
                <p className="text-sm">Delivery</p>
              </div>
              <div className=" text-white opacity-30">
                <h1>1.000+</h1>
                <p className="text-sm">Ratings</p>
              </div>
            </div>
          </div>
          <div>
            <img src={banner} alt="" />
          </div>
        </div>
        <article className="flex items-center justify-between">
          <div className="bg-zinc-950 w-fit h-32 rounded-lg px-2 py-2">
            <div className="flex items-center gap-2">
              <img src={chips} alt="" />
              <div className="text-white flex flex-col gap-1">
                <h1 className="text-md">Chicken with potato</h1>

                <p className="text-xs">Premium recipe</p>
                <div className="flex gap-2">
                  <img src={star} alt="" />
                  <p className="text-xs">4.9</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-red-600 rounded-full px-3 py-1 text-xs max-w-fit">
                    Order Now
                  </button>
                  <img className="w-5" src={cart} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-950 w-fit h-32 rounded-lg px-2 py-2">
            <div className="flex items-center gap-2">
              <img src={fruit} alt="" />
              <div className="text-white flex flex-col gap-1">
                <h1 className="text-md">Salad for chicken</h1>

                <p className="text-xs">Premium recipe</p>
                <div className="flex gap-2">
                  <img src={star} alt="" />
                  <p className="text-xs">4.9</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="border-[1px] border-red-600 rounded-full px-3 py-1 text-xs max-w-fit">
                    Order Now
                  </button>
                  <img className="w-5" src={cart} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-950 w-fit h-32 rounded-lg px-2 py-2">
            <div className="flex items-center gap-2">
              <img src={chicken} alt="" />
              <div className="text-white flex flex-col gap-1">
                <h1 className="text-md">Chicken with garlic</h1>

                <p className="text-xs">Premium recipe</p>
                <div className="flex gap-2">
                  <img src={star} alt="" />
                  <p className="text-xs">4.9</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="border-[1px] border-red-600 rounded-full px-3 py-1 text-xs max-w-fit">
                    Order Now
                  </button>
                  <img className="w-5" src={cart} alt="" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Body;
