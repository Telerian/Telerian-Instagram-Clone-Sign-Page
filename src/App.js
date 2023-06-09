import { useEffect, useRef, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";

function App() {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username !== "" && password !== "";

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }

      images[current].classList.remove("opacity-0");

      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };

    imageSlider();

    let interval = setInterval(imageSlider, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex items-center justify-center gap-x-8">
      <div className="w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] hidden md:block bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute  top-[27px] right-[18px] "
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3  ">
        <div className="w-[350px] bg-white border px-[40px] pt-10 pb-6">
          <a href="#" className="flex justify-center mb-8">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt=""
            />
          </a>
          <form className="grid gap-1.5">
            <label className="block relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required={true}
                className=" px-2 border rounded-sm outline-none text-xs focus:border-gray-400 bg-zinc-50 w-full h-[38px] valid:pt-[10px] peer"
              />
              <small className="absolute top-1/2 left-[9px] cursor-text text-xs pointer-events-none text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 ">
                {" "}
                Phone number, username or E-mail
              </small>
            </label>
            <label className="block relative">
              <input
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
                className=" px-2 border rounded-sm outline-none text-xs focus:border-gray-400 bg-zinc-50 w-full h-[38px] valid:pt-[10px] peer"
              />
              <small className="absolute top-1/2 left-[9px] cursor-text text-xs pointer-events-none text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 ">
                {" "}
                Password{" "}
              </small>
            </label>
            <button
              type="submit"
              disabled={!enable}
              className="h-[30px] rounded text-white font-medium text-sm mt-1 bg-blue-500 disabled:opacity-50 "
            >
              Log In
            </button>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"> </div>
              <span className="px-4 text-[13px] text-gray-500 font-semibold ">
                OR
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <a
              href="#"
              className="flex justify-center mb-2.5 items-center gap-x-2 font-semibold text-facebook"
            >
              <AiFillFacebook size={20}>Log in with Facebook</AiFillFacebook>
              Log in with Facebook
            </a>
            <a
              href=""
              className="text-xs flex items-center justify-center text-link "
            >
              Forgot password?
            </a>
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-brand text-Bluee">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
