import { useTranslation } from "react-i18next";

function NavBarLangDropDown() {
  const { t } = useTranslation("navbar");

  // todo replace a with a proper tag

  return (
    <>
      <div className="p-2">
        <div className="group inline-block relative transition-all duration-500">
          <button
            type="button"
            className=" 
           font-semibold rounded inline-flex justify-center items-center w-24 p-0 "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M448 164C459 164 468 172.1 468 184V188H528C539 188 548 196.1 548 208C548 219 539 228 528 228H526L524.4 232.5C515.5 256.1 501.9 279.1 484.7 297.9C485.6 298.4 486.5 298.1 487.4 299.5L506.3 310.8C515.8 316.5 518.8 328.8 513.1 338.3C507.5 347.8 495.2 350.8 485.7 345.1L466.8 333.8C462.4 331.1 457.1 328.3 453.7 325.3C443.2 332.8 431.8 339.3 419.8 344.7L416.1 346.3C406 350.8 394.2 346.2 389.7 336.1C385.2 326 389.8 314.2 399.9 309.7L403.5 308.1C409.9 305.2 416.1 301.1 422 298.3L409.9 286.1C402 278.3 402 265.7 409.9 257.9C417.7 250 430.3 250 438.1 257.9L452.7 272.4L453.3 272.1C465.7 259.9 475.8 244.7 483.1 227.1H376C364.1 227.1 356 219 356 207.1C356 196.1 364.1 187.1 376 187.1H428V183.1C428 172.1 436.1 163.1 448 163.1L448 164zM160 233.2L179 276H140.1L160 233.2zM0 128C0 92.65 28.65 64 64 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128zM320 384H576V128H320V384zM178.3 175.9C175.1 168.7 167.9 164 160 164C152.1 164 144.9 168.7 141.7 175.9L77.72 319.9C73.24 329.1 77.78 341.8 87.88 346.3C97.97 350.8 109.8 346.2 114.3 336.1L123.2 315.1H196.8L205.7 336.1C210.2 346.2 222 350.8 232.1 346.3C242.2 341.8 246.8 329.1 242.3 319.9L178.3 175.9z" />
            </svg>
            {/*
            <span className="mr-1">{t("lang.")}</span><svg
              className="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
  </svg> */}
          </button>
          <ul
            className="group-hover:block absolute hidden text-secondaryLightContainerOn 
          dark:text-secondaryDarkContainerOn transition-all duration-500 mt-[-15px]"
          >
            <li>
              <button
                className="rounded-t bg-black/90 hover:bg-white hover:text-black
                 text-white border-white border-2 py-2 px-4 w-24 
                 flex justify-center transition-all duration-500"
              >
                English
              </button>
            </li>
            <li>
              <button
                className="rounded-b bg-black/90 hover:bg-white hover:text-black 
                text-white border-white border-2 border-t-0 py-2 px-4 w-24 flex justify-center transition-all duration-500 "
              >
                Deutsch
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarLangDropDown;
