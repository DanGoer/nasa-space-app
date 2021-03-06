import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GenericCard from "../../components/GenericCard";
import HRIcon from "../../components/HRIcon";
import InfoModal from "../../components/InfoModal";
import SkeletonCardStatistic from "../../components/skeletons/SkeletonCardStatistic";
import Statistics from "../../components/Statistics";
import ToolBar from "../../components/ToolBar";
import UniverseButton from "../../components/UniverseButton";
import getCalculations from "../../utility/getCalculations";
import { motion } from "framer-motion";
import Accordion from "../../components/Accordion";
import SkeletonCard from "../../components/skeletons/SkeletonCardApod";
import SkeletonAccordionApod from "../../components/skeletons/SkeletonAccordionApod";
import { accordionVariants } from "../../utility/motionVariants";
import MainTitle from "../../components/MainTitle";

function Asteroids() {
  const [asteroids, setAsteroids] = useState<any>(null);
  const [getNewAsteroids, setGetNewAsteroids] = useState<any>(false);
  const [days, setDays] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { t } = useTranslation("asteroids");

  const handleDate = (d: number) => {
    setDays(d);
  };

  const handleGetInfo = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const getAsteroids = async () => {
      const today = new Date().toISOString().slice(0, 10);
      console.log(today);
      const date = new Date();
      date.setDate(date.getDate() + days);
      const dateEnd = date.toISOString().slice(0, 10);
      console.log(dateEnd);

      const res: any = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${dateEnd}&api_key=${process.env.REACT_APP_MY_API_KEY}`
      );
      setAsteroids(getCalculations(res.data));
    };
    console.log("Asteroids123" + JSON.stringify(asteroids));

    getAsteroids();
  }, [days]);

  return (
    <>
      <HRIcon
        path={
          <path d="M511.4 20.72c-11.63 38.75-34.38 111.8-61.38 187.8c7 2.125 13.38 4 18.63 5.625c4.625 1.375 8.375 4.751 10.13 9.127c1.875 4.5 1.625 9.501-.625 13.75c-22.13 42.25-82.63 152.8-142.5 214.4c-1 1.125-2.001 2.5-3.001 3.5c-76 76.13-199.4 76.13-275.5 .125c-76.13-76.13-76.13-199.5 0-275.7c1-1 2.375-2 3.5-3C122.1 116.5 232.5 55.97 274.1 33.84c4.25-2.25 9.25-2.5 13.63-.625c4.5 1.875 7.875 5.626 9.25 10.13c1.625 5.125 3.5 11.63 5.625 18.63c75.88-27 148.9-49.75 187.6-61.25c5.75-1.75 11.88-.2503 16.13 4C511.5 8.844 512.1 15.09 511.4 20.72zM319.1 319.1c0-70.63-57.38-128-128-128c-70.75 0-128 57.38-128 128c0 70.76 57.25 128 128 128C262.6 448 319.1 390.8 319.1 319.1zM191.1 287.1c0 17.63-14.37 32-32 32c-17.75 0-32-14.38-32-32s14.25-32 32-32c8.5 0 16.63 3.375 22.63 9.375S191.1 279.5 191.1 287.1zM223.9 367.1c0 8.876-7.224 16-15.97 16c-8.875 0-16-7.127-16-16c0-8.876 7.1-16 15.98-16C216.7 351.1 223.9 359.1 223.9 367.1z" />
        }
        view="0 0 512 512"
      />
      <MainTitle title={t("asteroids-h1")} />
      <UniverseButton
        icon="Info"
        setter={handleGetInfo}
        text={t("asteroids-button-info")}
      />
      <InfoModal
        showModal={showModal}
        setShowModal={setShowModal}
        text={t("asteroids-modal")}
        buttontext={t("asteroids-modal-button")}
      />
      <GenericCard width="w-4/5 md:w-3/5" added="mt-10" height="h-[400px]">
        <h3>{t("h3-asteroids-incoming")}</h3>
        <h4>{t("h4-asteroids-incoming")}</h4>
        <h5>{t("h5-asteroids-incoming")}</h5>
        <ToolBar handleDate={handleDate} />
      </GenericCard>
      <GenericCard width="3/5" added="mt-2" height="h-[600px]">
        {asteroids ? (
          <Statistics
            typeOfStatistics={t("type-of-statistics")}
            cardOne={asteroids.asteroidsTotal}
            cardTwo={asteroids.dangerousAsteroids}
            cardThree={asteroids.harmlessAsteroids}
            cardFour={asteroids.nearestAsteroid}
            title={{
              one: t("statistics-total-one"),
              two: t("statistics-total-two"),
              three: t("statistics-total-three"),
              four: t("statistics-total-four"),
            }}
          />
        ) : (
          <SkeletonCardStatistic />
        )}
      </GenericCard>
      {asteroids ? (
        <div className="flex flex-col gap-8 w-11/12">
          {asteroids.asteroids.map((item: any, index: any) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={accordionVariants}
            >
              <Accordion
                key={index + Date.now()}
                item={{ title: item.name }}
                index={index}
              >
                <h2 className="font-bold text-2xl">Name: {item.name}</h2>
                <Statistics
                  typeOfStatistics={t("type-of-statistics-accordion")}
                  cardOne={
                    item["is_potentially_hazardous_asteroid"]
                      ? t("statistics-danger-true")
                      : t("statistics-danger-false")
                  }
                  cardTwo={
                    item["estimated_diameter"]["meters"][
                      "estimated_diameter_min"
                    ]
                  }
                  cardThree={
                    item["close_approach_data"][0]["close_approach_date"]
                  }
                  cardFour={asteroids.dangerousAsteroids}
                  title={{
                    one: t("statistics-accordion-one"),
                    two: t("statistics-accordion-two"),
                    three: t("statistics-accordion-three"),
                    four: t("statistics-accordion-four"),
                  }}
                />
              </Accordion>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8 w-11/12">
          <SkeletonCard />
          <SkeletonAccordionApod />
          <SkeletonAccordionApod />
          <SkeletonAccordionApod />
          <SkeletonAccordionApod />
        </div>
      )}
    </>
  );
}
export default Asteroids;
