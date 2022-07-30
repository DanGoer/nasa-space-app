import { useTranslation } from "react-i18next";
import HRIcon from "../../components/HRIcon";
import IntroCard from "./components/IntroCard";

import cardOne from "../../assets/mountain.jpg";
import cardTwo from "../../assets/sky.jpg";
import cardThree from "../../assets/water.jpg";
import DividerButton from "../../components/DividerButton";

function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <HRIcon
        path={
          <path d="M160 32.01L32 32.01c-17.67 0-32 14.33-32 32v384c0 17.67 14.33 32 32 32l128-.0073c123.5 0 224-100.5 224-224S283.5 32.01 160 32.01zM160 416H64v-320h96c88.22 0 160 71.78 160 159.1S248.2 416 160 416z" />
        }
        view="0 0 384 512"
      />
      <IntroCard
        number={t("card-1-number")}
        title={t("card-1-title")}
        text={t("card-1-text")}
        button={t("card-1-button")}
        background={cardOne}
        link="card2"
        idKey="card1"
      />
      <HRIcon
        path={
          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
        }
        view="0 0 576 512"
      />
      <IntroCard
        number={t("card-2-number")}
        title={t("card-2-title")}
        text={t("card-2-text")}
        button={t("card-2-button")}
        background={cardTwo}
        link="card3"
        idKey="card2"
      />
      <HRIcon
        path={
          <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM57.71 192.1L67.07 209.4C75.36 223.9 88.99 234.6 105.1 239.2L162.1 255.7C180.2 260.6 192 276.3 192 294.2V334.1C192 345.1 198.2 355.1 208 359.1C217.8 364.9 224 374.9 224 385.9V424.9C224 440.5 238.9 451.7 253.9 447.4C270.1 442.8 282.5 429.1 286.6 413.7L289.4 402.5C293.6 385.6 304.6 371.1 319.7 362.4L327.8 357.8C342.8 349.3 352 333.4 352 316.1V307.9C352 295.1 346.9 282.9 337.9 273.9L334.1 270.1C325.1 261.1 312.8 255.1 300.1 255.1H256.1C245.9 255.1 234.9 253.1 225.2 247.6L190.7 227.8C186.4 225.4 183.1 221.4 181.6 216.7C178.4 207.1 182.7 196.7 191.7 192.1L197.7 189.2C204.3 185.9 211.9 185.3 218.1 187.7L242.2 195.4C250.3 198.1 259.3 195 264.1 187.9C268.8 180.8 268.3 171.5 262.9 165L249.3 148.8C239.3 136.8 239.4 119.3 249.6 107.5L265.3 89.12C274.1 78.85 275.5 64.16 268.8 52.42L266.4 48.26C262.1 48.09 259.5 48 256 48C163.1 48 84.4 108.9 57.71 192.1L57.71 192.1zM437.6 154.5L412 164.8C396.3 171.1 388.2 188.5 393.5 204.6L410.4 255.3C413.9 265.7 422.4 273.6 433 276.3L462.2 283.5C463.4 274.5 464 265.3 464 256C464 219.2 454.4 184.6 437.6 154.5H437.6z" />
        }
        view="0 0 512 512"
      />
      <IntroCard
        number={t("card-3-number")}
        title={t("card-3-title")}
        text={t("card-3-text")}
        button={t("card-3-button")}
        background={cardThree}
        idKey="card3"
      />
      <HRIcon
        path={
          <path d="M511.4 20.72c-11.63 38.75-34.38 111.8-61.38 187.8c7 2.125 13.38 4 18.63 5.625c4.625 1.375 8.375 4.751 10.13 9.127c1.875 4.5 1.625 9.501-.625 13.75c-22.13 42.25-82.63 152.8-142.5 214.4c-1 1.125-2.001 2.5-3.001 3.5c-76 76.13-199.4 76.13-275.5 .125c-76.13-76.13-76.13-199.5 0-275.7c1-1 2.375-2 3.5-3C122.1 116.5 232.5 55.97 274.1 33.84c4.25-2.25 9.25-2.5 13.63-.625c4.5 1.875 7.875 5.626 9.25 10.13c1.625 5.125 3.5 11.63 5.625 18.63c75.88-27 148.9-49.75 187.6-61.25c5.75-1.75 11.88-.2503 16.13 4C511.5 8.844 512.1 15.09 511.4 20.72zM319.1 319.1c0-70.63-57.38-128-128-128c-70.75 0-128 57.38-128 128c0 70.76 57.25 128 128 128C262.6 448 319.1 390.8 319.1 319.1zM191.1 287.1c0 17.63-14.37 32-32 32c-17.75 0-32-14.38-32-32s14.25-32 32-32c8.5 0 16.63 3.375 22.63 9.375S191.1 279.5 191.1 287.1zM223.9 367.1c0 8.876-7.224 16-15.97 16c-8.875 0-16-7.127-16-16c0-8.876 7.1-16 15.98-16C216.7 351.1 223.9 359.1 223.9 367.1z" />
        }
        view="0 0 512 512"
      />
      <h2 className="font-extrabold text-3xl text-primaryLightOn shadow-2xl">
        {t("home-link-h2")}
      </h2>
      <DividerButton name="APOD" link="/apod" />
      <h3 className="font-bold text-2xl text-primaryLightOn shadow-2xl">
        {t("home-link-h3")}
      </h3>
      <DividerButton name="Impressum" link="/impressum" />
    </>
  );
}
export default Home;
