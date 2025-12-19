import { cn } from "../../../utils/className";
import style from "./_styles.module.css";

const Hero = ({ isSelected }) => {
  return (
    <li>
      {/* <div className={`${style.hero} ${isSelected ? style.selected : ""}`}> */}
      <div className={cn([style.hero, isSelected && style.selected])}>
        <div className={style.title}>Hero | {isSelected ? "t" : "f"}</div>
      </div>
      {/* <div className={style.title}>title outof hero</div> */}
    </li>
  );
};

export default Hero;
