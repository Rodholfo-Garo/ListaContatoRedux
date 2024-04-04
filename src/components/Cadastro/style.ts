import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

// disposição do meu formulario em linha
export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinha os itens à direita */
  margin-top: 10px;
  gap: 3px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start; /* Alinha os itens ao topo */
  }
`

// estilo do meu botão principal de adicionar
export const Button = styled.button`
  background: ${variaveis.grafite};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 78px; /* Defina o tamanho fixo desejado */
  height: 35px; /* Defina a altura fixa desejada */

  &:hover {
    background: ${variaveis.amarelo};
  }
`

// Quando o UseState for acionado no botão de Editar, ele vai trocar o nome para SALVAR e deve ter esta cor verde
export const ButtonSalvar = styled(Button)`
  background: ${variaveis.verde};

  &:hover {
    background: ${variaveis.verdeHover};
  }
`

// Aqui passo por função no styled() os atributos do meu Botão e trato apenas o Hover para que não fique com o mesmo hover verde
export const CancelButton = styled(Button)`
  background-color: ${variaveis.vermelho};

  &:hover {
    background: ${variaveis.vermelhoHover};
  }
`

// Aqui estou definindo uma regra geral para os inputs
export const InputNomeRegistrado = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid ${variaveis.cinzaLight};
  background-color: transparent;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

// Agora passando uma função dentro do styled ()
// Aqui está recebendo por função as informações do (InputNomeRegistrado) e adiciono um espacamento e margin
export const InputTelefoneRegistrado = styled(InputNomeRegistrado)`
  width: 215px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

// Aqui está recebendo por função as informações do (InputNomeRegistrado) e adiciono um espacamento e margin
export const InputEmailRegistrado = styled(InputNomeRegistrado)`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
