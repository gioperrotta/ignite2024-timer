import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import * as S from './styles'

const newCycleSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O cliclo mínimo deve ser de 5 minutos')
    .max(60, 'O ciclo máximo deve ser de 60 minutos'),
})

type NewCycleFormDate = zod.infer<typeof newCycleSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormDate>({
      resolver: zodResolver(newCycleSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })
  return (
    <S.FormConatiner>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        list="task-sugestions"
        type="text"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-sugestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
        <option value="Banana"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos</span>
    </S.FormConatiner>
  )
}
