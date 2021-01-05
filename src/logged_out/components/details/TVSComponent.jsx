import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SeasonDetails from './SeasonDetails';
import axios from '../../../shared/util';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className="w-100"
      {...other}
    >
      {value === index && (
        <React.Fragment>{children}</React.Fragment>
      )}
    </div>
  );
}




export default React.memo(({id, number_of_seasons})=>{
  const [value, setValue] = React.useState(0);
  const [season, setSeason] = React.useState({})

  const handleChange = (event, newValue) => setValue(newValue);

  React.useEffect(()=>{
  	axios.get(`/tv/${id}/season/${value+1}`)
  		.then(resp => setSeason(resp.data))
  }, [id, value])


  return (
    <div className="d-flex px-md-3">
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        style={{borderRight: `2px solid #ffffff29`}}
      >
      	{[...Array(number_of_seasons)].map((val, i)=>(
	        	<Tab key={val} label={`Season ${i+1}`} id={i}/>
      	))}
      </Tabs>

      {[...Array(number_of_seasons)].map((val, i)=>(
	        <TabPanel value={value} index={i}>
		        <SeasonDetails season={season}/>
		      </TabPanel>
    	))}

    </div>
  );
})
