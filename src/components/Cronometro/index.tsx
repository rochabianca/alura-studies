import Button from '../Button';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import timeToSeconds from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITask | undefined,
  endTask: () => void
}

export default function Cronometro({ selected, endTask }: Props) {
  const [ time, setTime ] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time))
    }

  }, [selected])

  function regress(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regress(count -1)
      }
      else {
        endTask()
      }

    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={style.relogioWrapper}>
        <Relogio time={time} />
      </div>
      <Button onClick={() => regress(time)}>Começar</Button>
    </div>
  )
}