import React, { FormEvent, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories } from './styles'
import api from '../../services/api'

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [ newRepo, setNewRepo ] = useState('')
  const [repositories, setRepositories ] = useState<Repository[]>([])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault()

    const response = await api.get(`repos/${newRepo}`)

    const repository = response.data;
    setRepositories([...repositories, repository])
    console.log(repositories)
  }

  return (
    <>
      <img src={logoImg} alt="logo github" />
      <Title>Explore os repositórios do Github</Title>
      <Form onSubmit={handleAddRepository}>
          <input
            value={newRepo}
            onChange={(e)=> setNewRepo(e.target.value)}
            placeholder="digite o nome de um repositorio"
          />
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
