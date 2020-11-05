import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo github" />
      <Title>Explore os repositórios do Github</Title>
      <Form>
          <input placeholder="digite um nome" />
          <button type="submit">go</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/33674561?s=460&u=8f06299386b1578d99c81125fc1ceae504480a5c&v=4" alt="Brenda Pereria" />
          <div>
            <strong>Repositorio</strong>
            <p>Descrição do repositorio espero que peguemos com api</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/33674561?s=460&u=8f06299386b1578d99c81125fc1ceae504480a5c&v=4" alt="Brenda Pereria" />
          <div>
            <strong>Repositorio</strong>
            <p>Descrição do repositorio espero que peguemos com api</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/33674561?s=460&u=8f06299386b1578d99c81125fc1ceae504480a5c&v=4" alt="Brenda Pereria" />
          <div>
            <strong>Repositorio</strong>
            <p>Descrição do repositorio espero que peguemos com api</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
