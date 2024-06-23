import style from "./Footer.module.scss"


export default function Footer() {
    return (

        <footer className={style.footer}>
      <div class={style.footerContainer}>
      {/* <div class="container"> */}
        <div class={style.footerPages}>
          <div>
            <div class={style.footerTitle}>VR QUEST</div>
            <ul class={style.footerSubtitle}>
              <li>Связаться с нами</li>
              <li>Вакансии</li>
              <li>Часто задаваемые вопросы</li>
            </ul>
          </div>
          <div>
            <div class={style.footerTitle}>VR GAMES</div>
            <ul class={style.footerSubtitle}>
              <li>Разработка</li>
              <li>Наборы для разработчиков</li>
            </ul>
          </div>
          <div>
            <div class={style.footerTitle}>VR SHOP</div>
            <ul class={style.footerSubtitle}>
              <li>VR glasses light</li>
              <li>VR glasses pro</li>
              <li>Аксессуары</li>
            </ul>
          </div>
        </div>
        <div class={style.footerInfo}>
          <div>Сайт разработан учеником ивановым в целях обучения</div>
          <div>Нужна поддержка? Свяжитесь с нашим отделом помощи клиентам</div>
        </div>
        <div class={style.footerContacts}>
          <div class={style.footerSocial}>
            <span>Социальные сети</span> <img src="assets/Vector (1).svg" alt="" />
            {/* <img src="assets/Vector (2).svg" alt="" />
            <img src="assets/Vector (3).svg" alt=""> */}
          </div>
          <button><a class={style.buttonHelp} href="help.html">Связаться</a> </button>
        </div>
      </div>
      {/* </div> */}
        </footer>
    );
  }