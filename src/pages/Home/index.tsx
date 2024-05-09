import { useContext } from 'react'

import { HandPalm, Play } from 'phosphor-react'
import * as S from './styles'
import { CountDown } from './components/CountDown'
import { NewCycleForm } from './components/NewCycleForm'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O cliclo mínimo deve ser de 5 minutos')
    .max(60, 'O ciclo máximo deve ser de 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <S.StopButton onClick={interruptCurrentCycle} type="button">
            Interromper
            <HandPalm size={24} />
          </S.StopButton>
        ) : (
          <S.StartButton disabled={isSubmitDisabled} type="submit">
            Começar
            <Play size={24} />
          </S.StartButton>
        )}
      </form>
    </S.HomeContainer>
  )
}
