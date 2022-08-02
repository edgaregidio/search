import { useState, useEffect } from 'react'
import './styles.css'

interface Repo {
  name: string;
  description: string;
}

function App() {

  const [repos, setRepos] = useState<Repo[]>([])
  // const [filteredRepos, setFilteredRepos] = useState<Repo[]>([])
  const [search, setSearch] = useState('')

  console.log('====================================');
  console.log("Renderizou");
  console.log('====================================');

  useEffect(() => {
    fetch('https://api.github.com/users/edgaregidio/repos')
    .then(response => response.json())
    .then(data => setRepos(data) )
  }, [])

  const filteredRepos = search.length > 0 
    ? repos.filter(repo => repo.name.includes(search))
    : []

  // useEffect(() => {
  //   if ( search.length) {
  //     setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
  //   }
  // }, [search])

  return (
    <div>
      <input
        name="seart"
        type="text"
        placeholder="Pesquisar"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />

      {search.length > 0 ? (
        <ul>
          {filteredRepos.map(repo => {
            return (
              <li key={repo.name}>
                {repo.name}
              </li>
            )
          })}
        </ul>
      ) : (
        <ul>
          {repos.map(repo => {
            return (
              <li key={repo.name}>
                {repo.name}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default App
