import style from "./head.module.scss"
import Group from "../../image/vr.png"

export default function Head() {
    return (
    <div class={style.head}>
      <div class={style.title}>
        VR Гарнитуры для дома и <br />
        разработки
      </div>
      <div class={style.gradient}>
        <img src={Group} alt="" class={style.whiteblack} />
      </div>
      <div class={style.subtitle}>
        Соревнуйся с друзями, работай и разрабатывай в VR. Приобретай одну из
        двух гарнитур и уже завтра тебе ее доставят
      </div>
    </div>)
}

      
    
  
  
  