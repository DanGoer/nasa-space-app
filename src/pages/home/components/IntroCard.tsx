function IntroCard({
  number,
  text,
  button,
  background,
  link,
  idKey,
  title,
}: any) {
  return (
    <div
      id={idKey}
      className="h-[80vh] z-30 relative items-center justify-center w-2/3  overflow-auto rounded dark:shadow-darkOutline shadow-lightOutline shadow-2xl"
    >
      <div
        className="inset-0 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute inset-0 z-20 flex items-center justify-center h-full w-full bg-primaryLight dark:bg-primaryDark bg-opacity-50 dark:bg-opacity-20"></div>
      <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
        <div
          className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="grid grid-cols-12 gap-1">
            <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
              <div className="border-l-4 border-lightOutline dark:border-darkOutline py-20 px-5 mx-2 absolute left-0">
                <p className="italic text-primaryLightOn dark:text-primaryDarkOn text-md md:text-2xl lg:text-4xl uppercase text-center font-semibold ">
                  {title}
                </p>
              </div>
              <div className="underline text-primaryLightOn dark:text-primaryDarkOn font-semibold text-xl mb-4">
                {number}
              </div>
              <div className="absolute border-lightOutline dark:border-darkOutline border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
              <div className="relative bg-secondaryLight dark:bg-secondaryDark h-full md:h-96 w-full bg-opacity-50 dark:bg-opacity-50 rounded-tr-lg rounded-br-lg">
                <div className="p-8">
                  <p className="text-primaryLightOn dark:text-primaryDarkOn text-xs md:text-sm lg:text-xl my-16 py-4">
                    {text}
                  </p>
                  <div className="bottom-0 absolute p-2 right-0">
                    {link && (
                      <a
                        href={"#" + link}
                        className="opacity-75 bg-primaryLight dark:bg-primaryDark hover:bg-primaryLight/60
                    dark:hover:bg-primaryDark/60 border-primaryLightOn dark:border-primaryDarkOn
                    hover:border-primaryDarkOn dark:hover:border-primaryLightOn text-sm font-bold py-2 px-4 rounded inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{button}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroCard;
