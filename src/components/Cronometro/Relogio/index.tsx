import style from './Relogio.module.scss'

interface Props {
  time: number | undefined
}

export default function Relogio({ time = 0 }: Props) {
  const minutes = Math.floor(time/60)
  const seconds = time % 60
  const [ minuteDez, minuteUn ] = String(minutes).padStart(2,'0')
  const [ secondDez, secondUn ] = String(seconds).padStart(2, '0')


  return (
    <>
      <span className={style.relogioNumero}>
        {minuteDez}
      </span>
      <span className={style.relogioNumero}>
        {minuteUn}
      </span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>
        {secondDez}
      </span>
      <span className={style.relogioNumero}>
      {secondUn}
      </span>
    </>
  )
}