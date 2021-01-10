import React from 'react';
import {
	TextField,
  ListSubheader
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import './style.css';
import RenderItem from './RenderItem';
import axios from '../../../shared/util';



export default React.memo(()=>{
  const [query, setQuery] = React.useState('')
  const [result, setResult] = React.useState([])

  React.useEffect(()=>{
    query &&
      axios.get(`/search/multi?query=${query}`)
        .then(resp => setResult(resp.data.results))
  }, [query, setResult])


	return(
		<React.Fragment>
			<Autocomplete
				freeSolo
				style={{width: 250, marginRight: 50}}
				disableClearable
        options={result}
        groupBy={(option) => option.media_type}
        renderGroup={grp => [ <ListSubheader key={grp.key} className="bg-white m-0 text-primary">
                                {grp.group === 'tv' ? 'TV-Series' : 'Movies'}
                              </ListSubheader>, grp.children,]}
        getOptionLabel={(option) => option.title ? option.title : option.name}
        filterOptions={op => op.filter(val => val.media_type !== 'person')}
        renderOption={(option) => <RenderItem item={option}/>}
        renderInput={(params) => (
          <TextField
          	{...params}
            id="search-box"
					  placeholder="Search..."
					  size="small"
					  fullWidth
            onChange={e => setQuery(e.target.value)}
					  className="px-2 pt-1 bg-light rounded shadow"
					  InputProps={{ ...params.InputProps, type: 'search'}}
					/>
        )}
			/>
		</React.Fragment>
	)
})

