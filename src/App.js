import React, { useEffect, useState} from 'react';
import Carousel from './components/carousel';
import Data from './data.json';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
	}, []);
	
	return (
		<>
			{Data.map(item => (
				<Carousel
					title={item.title}
					images={item.images}
				/>
			))}

		</>
  );
}

export default App;
