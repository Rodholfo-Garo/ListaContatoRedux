import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import NovoCadastroClass from '../../models/Tarefa'
import { editar, remover } from '../../store/reducers/atividades'
import * as S from './style'

type Props = NovoCadastroClass

const NovoCadastro = ({
  nomeContato: nomeContatoOriginal,
  emailContato: emailContatoOriginal,
  phoneContato: phoneContatoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeContato, setnomeContato] = useState('')
  const [emailContato, setemailContato] = useState('')
  const [phoneContato, setphoneContato] = useState('')

  useEffect(() => {
    if (nomeContatoOriginal.length > 0) {
      setnomeContato(nomeContatoOriginal)
    }
  }, [nomeContatoOriginal])

  useEffect(() => {
    if (emailContatoOriginal.length > 0) {
      setemailContato(emailContatoOriginal)
    }
  }, [emailContatoOriginal])

  useEffect(() => {
    if (phoneContatoOriginal.length > 0) {
      setphoneContato(phoneContatoOriginal)
    }
  }, [phoneContatoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setnomeContato(nomeContatoOriginal),
      setemailContato(emailContatoOriginal),
      setphoneContato(phoneContatoOriginal)
  }

  return (
    <main>
      <S.Formulario>
        <S.InputNomeRegistrado
          type="text"
          placeholder="Nome completo"
          disabled={!estaEditando}
          value={nomeContato}
          onChange={(evento) => setnomeContato(evento.target.value)}
        />
        <S.InputEmailRegistrado
          type="email"
          placeholder="E-mail"
          disabled={!estaEditando}
          value={emailContato}
          onChange={(evento) => setemailContato(evento.target.value)}
        />
        <S.InputTelefoneRegistrado
          type="tel"
          placeholder="(99) 9 9999-9999"
          disabled={!estaEditando}
          value={phoneContato}
          onChange={(evento) => setphoneContato(evento.target.value)}
        />
        {estaEditando ? (
          <>
            <S.ButtonSalvar
              type="button"
              onClick={() => {
                dispatch(
                  editar({
                    nomeContato,
                    emailContato,
                    phoneContato,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.ButtonSalvar>
            <S.CancelButton type="button" onClick={cancelarEdicao}>
              Cancelar
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Button type="button" onClick={() => setEstaEditando(true)}>
              Editar
            </S.Button>
            <S.CancelButton type="button" onClick={() => dispatch(remover(id))}>
              Remover
            </S.CancelButton>
          </>
        )}
      </S.Formulario>
    </main>
  )
}

export default NovoCadastro
