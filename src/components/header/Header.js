import style from "./Header.module.scss"
import Group from "../../image/Group 1.svg"

export default function Header() {
    return (

        <header className={style.header}>
      <div class={style.header_container}>
        <div class={style.logo}>
        <img src={Group}/>
          <span class={style.vr}>VR Quest</span>
        </div>
        <div class={style.header_btn_container}>
          <div class={style.product_btn}>
            <img src={require("../../image/Vector.svg")} alt="" />
            <span class={style.por}>Продукция</span>
          </div>
          <a href="#"> <button class={style.buy}>Купить</button></a>
        </div>
      </div>
      <div class={style.burgermenu}>
        <div class={style.burgerItems}>
          <img src="menu-item1.svg" alt="" />
          <span>VR glasses light</span>
        </div>
        <div class={style.burgerItems}>
          <img src="menu-item2.svg" alt="" />
          <span>VR glasses Pro</span>
        </div>
        <div class={style.burgerItems}>
          <img src="menu-item3.svg" alt="" />
          <span>Аксессуары</span>
        </div>
      </div>
        </header>
    );
  }
  
  