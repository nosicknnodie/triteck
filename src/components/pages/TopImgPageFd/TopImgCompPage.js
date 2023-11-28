import topImgPages from "@/common/data/_topImgPage";
import TopImgCompPageItem from "./TopImgCompPageItem";
import "./TopImgCompPageItem.css";
const TopImgCompPage = (uuid) => {
  return (
    <section id="kstarCard">
      {topImgPages.map((ticp) => {
        return (
          <>
            <TopImgCompPageItem ticp={ticp} />
          </>
        );
      })}
    </section>
  );
};

export default TopImgCompPage;
