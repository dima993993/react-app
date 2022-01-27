import style from "./Preloader.module.css";
const Preloader = () => {
  return (
    <div className={style.preloader_wrapper}>
      <div className={style.first_circle}></div>
      <div className={style.second_circle}></div>
    </div>
  );
};
export default Preloader;
