import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion";
import InfoModal from "../../components/InfoModal";
import SkeletonAccordionApod from "../../components/skeletons/SkeletonAccordionApod";
import SkeletonCard from "../../components/skeletons/SkeletonCardApod";

import { motion } from "framer-motion";
import ButtonBackgroundCard from "../../components/ButtonBackgroundCard";
import UniverseButton from "../../components/UniverseButton";

const accordionVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: -10,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function APOD() {
  const [aPod, setApod] = useState<any>(null);
  const [getNew, setGetNew] = useState<any>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { t } = useTranslation("apod");
  console.group(aPod);
  useEffect(() => {
    const getApod = async () => {
      const res: any = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}&count=5`
      );
      setApod(res.data);
    };

    getApod();
  }, [getNew]);

  const handleGetNew = () => {
    setGetNew(!getNew);
  };

  const handleGetInfo = () => {
    setShowModal(true);
  };

  return (
    <>
      <h1 className="">{t("apod-h1")}</h1>
      <h2>{t("apod-h2-subtitle")}</h2>
      <ButtonBackgroundCard>
        <UniverseButton
          icon="New"
          setter={handleGetNew}
          text={t("apod-button-new")}
        />
        <UniverseButton
          icon="Info"
          setter={handleGetInfo}
          text={t("apod-button-Info")}
        />
      </ButtonBackgroundCard>
      <InfoModal
        showModal={showModal}
        setShowModal={setShowModal}
        text={t("apod-modal")}
        buttontext={t("apod-modal-button")}
      />
      {aPod ? (
        <div className="flex flex-col gap-8 w-11/12">
          {aPod.map((item: any, index: any) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={accordionVariants}
            >
              <Accordion key={index + Date.now()} item={item} index={index} />
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
export default APOD;
