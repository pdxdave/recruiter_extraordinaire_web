import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues } from '../utils/helper';


const Filters = () => {
  const {
    filters: {
      text,
      city
    },
    updateFilters,
    clearFilters,
    all_jobs
  } = useFilterContext()

  const cities = getUniqueValues(all_jobs, 'city')

    const navigate = useNavigate()

  return (
      <Wrapper>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="search-items">
          <div className='test'>
            <input 
              type="text" 
              name="text"
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
           />
          </div>
          {/* cities */}
          <div className='test'>
            {/* <h5>city</h5> */}
            <select 
                name="city" 
                value={city} 
                onChange={updateFilters}
              >
              {cities.map((c, index) => {
                return <option key={index}>{c}</option>
              })}
            </select>
          </div>
          </div>
        </form>
        <button 
            type="button" 
            className='btn-clear' 
            onClick={clearFilters}
        >Clear</button>
        <button 
          type="button" 
          onClick={() => navigate('/')} 
          className="btn-home">Home</button>
      </Wrapper>
  )
}

const Wrapper = styled.main`

.btn-clear {
  background-color: var(--clr-btn);
  margin-top: .5em;
  font-family: inherit;
  color: var(--clr-reg-text);
  font-size: 1.2rem;
  padding: .15em .5em;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: .2s ease-in-out;
}
.btn-clear:hover {
  background-color: var(--clr-btn-hover);
}

.btn-home {
  background-color: var(--clr-brown-text);
  font-family: inherit;
  color: var(--clr-reg-text);
  font-size: 1.2rem;
  padding: .15em .4em;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  margin-left: .5em;
  transition: .2s ease-in-out;
}

.btn-home:hover {
  background-color: var(--clr-brown-text-hover);
}
  
.search-items {
    display: grid;
    grid-template-columns: .25fr 1fr;
  }

input {
  font-size: 1.2rem;
  padding: .5em 0;
  text-indent: 4px;
  outline: none;
}

select {
  font-size: 1.2rem;
  padding: .5em .5em;
  margin-left: 1em;
  font-size: 1.2rem;
  color: rgb(119,119,119);
  background: transparent;
  border: rgb(79,79,79) 1px solid;
  outline: none;
}

@media screen and (max-width: 460px){
  .search-items {
    display: grid;
    grid-template-columns: 1fr;
  }
  
  select {
    margin-left: 0;
    margin-top: .5em;
  }
 
}
`

export default Filters