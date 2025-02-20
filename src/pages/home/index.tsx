import style from "./style.module.less";
import navbars from "./helper";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["😊 你好，我叫<b>丁少华</b>", "很高兴认识你 🤝", "🥰 交个朋友吧 😊"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const el = useRef(null);

  const openLink = (link: string) => {
    window.open(link);
  };
  return (
    <div className={style.home}>
      <div className={style.tips}>
        <span ref={el} />
      </div>
      <div className={style.products}>
        {navbars.map((item) => (
          <div
            className={style.product}
            key={item.id}
            onClick={() => openLink(item.link)}
          >
            <div className={style.imgWrapp}>
              <img src={item.icon} />
            </div>
            <div className={style.content}>{item.descr}</div>
            <div className={style.title}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
