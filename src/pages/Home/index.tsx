import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Play } from 'phosphor-react'

import * as S from './styles'

const newCycleSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O cliclo mínimo deve ser de 5 minutos')
    .max(60, 'O ciclo máximo deve ser de 60 minutos'),
})

type NewCycleFormDate = zod.infer<typeof newCycleSchema>

export function Home() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormDate>({
      resolver: zodResolver(newCycleSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })

  console.log(formState.errors)

  function handleCreateNewCycle(data: NewCycleFormDate) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <S.FormConatiner>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            list="task-sugestions"
            type="text"
            placeholder="Dê um nome para seu projeto"
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
            step={5}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos</span>
        </S.FormConatiner>

        <S.CountdownConatiner>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownConatiner>

        <S.StartButton disabled={isSubmitDisabled} type="submit">
          Começar
          <Play size={24} />
        </S.StartButton>
      </form>
    </S.HomeContainer>
  )
}
