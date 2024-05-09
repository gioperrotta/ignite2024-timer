import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../contexts/CyclesContext'

import * as S from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>
      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finisheDate && (
                      <S.Status statusColor="green">Concluido</S.Status>
                    )}

                    {cycle.interruptedDate && (
                      <S.Status statusColor="red">Interrompido</S.Status>
                    )}

                    {!cycle.finisheDate && !cycle.interruptedDate && (
                      <S.Status statusColor="yellow">Em Andamento</S.Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
