import style from "./parent.module.scss"


export default function Parent() {
    return (
        <div>
        <div class={style.title2}>Продукция</div>
        <hr />
        <div class={style.parent}>
          <div class={style.div1}>
            <div class={style.product_title}>VR Glasses light</div>
            <div class={style.product_text}>
              Самые популярные очки. Сочетание легкости, комфорта и отличных
              характеристик. По доступной цене
            </div>
            <div><a href="vrlight-body.html"><button class="product_button">Подробней</button></a></div>
          </div>
          <div class={style.div2}>
            <div>
              <div class={style.product_title} style="color: white">Аксессуары</div>
               <a href="accessoriesr.html"><button class={style.product_button2}>Подробней</button></a>
            </div>
          </div>

          <div class={style.div3}>
            <div>
              <div class={style.product_title} style="color: white">
                VRSOFT Маркет
              </div>
              <div class={style.product_text} style="color: white">
                Игры и приложения для ваших очков
              </div>
              <button class={style.product_button3}>Подробней</button>
            </div>
          </div>

          <div class="div4">
            <div>
              <div class={style.product_title} style="color: white">
                VR Glasses PRO
              </div>
              <div class={style.product_text} style="color: white">
                Бескомпромиссная мощность и красота. Самые современные
                технологии для реализации ваших идей
              </div>
              <a href="vrpro-body-black.html"><button class={style.product_button4}>Подробней</button></a>
            </div>
          </div>
        </div>
        </div>
    )}