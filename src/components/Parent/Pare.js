import style from "./parent.module.scss"
import img1 from "../../image/__background.png"
import img2 from "../../image/__background1.png"
import img3 from "../../image/__background2.png"
import img4 from "../../image/__background3.png"

export default function Parent() {
    return (
        <div className={style.parents}>
        <div class={style.title2}>Продукция</div>
        <hr />
        <div class={style.parent}>
          <div class={style.div1}>
            <img src={img1}/>
            <div class={style.product_title}>VR Glasses light</div>
            <div class={style.product_text}>
              Самые популярные очки. Сочетание легкости, комфорта и отличных
              характеристик. По доступной цене
            </div>
            <div><a href="vrlight-body.html"><button class={style.product_button}>Подробней</button></a></div>
          </div>
          <div class={style.div2}>
          <img src={img2}/>
            <div>
              <div class={style.product_title}
               >Аксессуары</div>
               <button class={style.product_button2}><a href="accessoriesr.html">Подробней</a></button>
            </div>
          </div>

          <div class={style.div3}>
          <img src={img3}/>
            <div>
              <div class={style.product_title} >
                VRSOFT Маркет
              </div>
              <div class={style.product_text} >
                Игры и приложения для ваших очков
              </div>
              <button class={style.product_button3}>Подробней</button>
            </div>
          </div>

          <div class={style.div4}>
          <img src={img4}/>
            <div>
              <div class={style.product_title} >
                VR Glasses PRO
              </div>
              <div class={style.product_text} >
                Бескомпромиссная мощность и красота. Самые современные
                технологии для реализации ваших идей
              </div>
              <a href="vrpro-body-black.html"><button class={style.product_button4}>Подробней</button></a>
            </div>
          </div>
        </div>
        </div>
    )}