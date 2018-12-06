/* eslint-disable indent */
import React from 'react';
import List from './List';

const options = [
  { image: <img src="./src/images/deadpool.jpg" alt="deadpool"/>,
    name: 'Deadpool' },
  { image: <img src="./src/images/ironman.jpg" alt="ironman"/>,
  name: 'Ironman' },
  { image: <img src="./src/images/spiderman.jpg" alt="spiderman"/>,
  name: 'Spiderman' },
  { image: <img src="./src/images/thor.jpg" alt="thor"/>,
      name: 'Thor' },
];

class Home extends React.Component {
	render() {
		return (
			<div>
				<List options={options} />
			</div>
		);
	}
}

export default Home;