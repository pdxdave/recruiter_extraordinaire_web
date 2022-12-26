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
          <div>
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
          <div>
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
        <button type="button" className='' onClick={clearFilters}>clear</button>
        <button onClick={() => navigate('/')}>home</button>
      </Wrapper>
  )
}

const Wrapper = styled.main`
  
  .search-items {
    display: flex;
    align-items: center;
  }

input {
  font-size: 1.2rem;
  padding: .5em 0;
  text-indent: 4px;
  outline: none;
}

/* h5 {
 
  font-size: 1.2rem;
} */
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

select:focus > option {
  color: rgb(119,119,119);
  background-color: transparent;
  border: none;
}

@media screen and (max-width: 460px){
  .search-items {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    width: 95%;
  }
}
`

export default Filters