import { InfoModalI } from "../../ts/interfaces/global_interfaces";

function InfoModal({ text, showModal, setShowModal }: InfoModalI) {
  return (
    <div
      className={`${
        showModal ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed bottom-50 right-50 left-50 top-50 z-50 md:inset-50 md:h-full pt-80`}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-lightVariantSurface dark:bg-darkVariantSurface rounded-lg shadow">
          <div className="flex justify-end p-2">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              type="button"
              className="text-tertiaryLight dark:text-tertiaryOn bg-transparent hover:bg-lightOutline hover:text-tertiaryLightContainerOn dark:hover:bg-darkOutline dark:hover:text-tertiaryDarkContainerOn rounded-2xl p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
            <svg
              className="mx-auto mb-4 w-14 h-14 text-tertiaryLight dark:text-tertiaryOn"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-tertiaryLight dark:text-tertiaryOn">
              {text}
            </h3>
            <button
              onClick={() => {
                setShowModal(false);
              }}
              type="button"
              className="text-tertiaryLight dark:text-tertiaryOn bg-transparent hover:bg-lightOutline hover:text-tertiaryLightContainerOn dark:hover:bg-darkOutline dark:hover:text-tertiaryDarkContainerOn focus:ring-4 focus:outline-none focus:ring-lightVariantSurfaceOn dark:focus:ring-darkVariantSurfaceOn rounded border border-gray-200 text-sm font-medium px-5 py-2.56 focus:z-10"
            >
              Weiter zum APOD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoModal;
