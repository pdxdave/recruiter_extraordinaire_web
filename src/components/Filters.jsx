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
      
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
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
            <h5>city</h5>
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
        </form>
        <button type="button" className='' onClick={clearFilters}>clear</button>
        <button onClick={() => navigate('/')}>home</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


`

export default Filters