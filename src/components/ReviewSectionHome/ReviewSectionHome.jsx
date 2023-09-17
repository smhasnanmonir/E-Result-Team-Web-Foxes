import { Link } from "react-router-dom";
import user_1 from "../../assets/NewHomePageImg/user-1.png";
import user_2 from "../../assets/NewHomePageImg/user-2.png";
import user_3 from "../../assets/NewHomePageImg/user-3.png";

const ReviewSectionHome = () => {
  return (
    <div className="my-24 overflow-hidden relative z-0">
      <h3 className="md:text-5xl text-2xl mb-12 font-semibold text-center my-text">
        Happy <span className="text-bike-primary">Clients Says</span>
      </h3>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-[75px] px-[25px]">
        {/* <!-- first review --> */}
        <div className="card bg-base-100 p-9 border border-gray-400">
          <div className="card-body">
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating justify-center mb-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="text-center space-y-4 mt-4">
              <h4 className="text-sm font-semibold text-info">Regina Miles</h4>
            </div>
          </div>

          <div>
            <figure>
              <img
                className="w-36 absolute -mb-1 z-10"
                src={user_1}
                alt="Shoes"
              />
            </figure>

            <div className="bg-green-300 pt-20 pb-5 flex items-center justify-center gap-5 items-center relative">
              {/* facebook icon */}
              <Link to="https://www.facebook.com">
                <svg
                  className="w-6 h-6 text-blue-600 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* twitter icon */}

              <Link to="https://www.twitter.com">
                <svg
                  className="w-6 h-6 text-blue-300 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>

              {/* linkedin icon */}

              <Link to="https://www.linkedin.com">
                <svg
                  className="w-6 h-6 text-blue-500 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- second review --> */}
        <div className="card bg-base-100 p-9 border border-gray-400">
          <div className="card-body">
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating justify-center mb-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="text-center space-y-4 mt-4">
              <h4 className="text-sm font-semibold text-info">Regina Miles</h4>
            </div>
          </div>

          <div>
            <figure>
              <img
                className="w-36 absolute -mb-1 z-10"
                src={user_2}
                alt="Shoes"
              />
            </figure>

            <div className="bg-green-300 pt-20 pb-5 flex justify-center gap-5 items-center relative">
              {/* facebook icon */}
              <Link to="https://www.facebook.com">
                <svg
                  className="w-6 h-6 text-blue-600 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* twitter icon */}

              <Link to="https://www.twitter.com">
                <svg
                  className="w-6 h-6 text-blue-300 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>

              {/* linkedin icon */}

              <Link to="https://www.linkedin.com">
                <svg
                  className="w-6 h-6 text-blue-500 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- third review --> */}
        <div className="card bg-base-100 p-9 border border-gray-400">
          <div className="card-body">
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating justify-center mb-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="text-center space-y-4 mt-4">
              <h4 className="text-sm font-semibold text-info">Regina Miles</h4>
            </div>
          </div>

          <div>
            <figure>
              <img
                className="w-36 absolute -mb-1 z-10"
                src={user_3}
                alt="Shoes"
              />
            </figure>

            <div className="bg-green-300 pt-20 pb-5 flex justify-center gap-5 items-center relative">
              {/* facebook icon */}
              <Link to="https://www.facebook.com">
                <svg
                  className="w-6 h-6 text-blue-600 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* twitter icon */}

              <Link to="https://www.twitter.com">
                <svg
                  className="w-6 h-6 text-blue-300 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>

              {/* linkedin icon */}

              <Link to="https://www.linkedin.com">
                <svg
                  className="w-6 h-6 text-blue-500 fill-current mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSectionHome;
