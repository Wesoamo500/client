export default (posts=[],actions)=>{
	switch (actions.type) {
		case 'FETCH_ALL':
			
			return actions.payload;
		case 'CREATE':
			
			return [...posts,actions.payload];
		case 'LIKE':
		case 'UPDATE':
			
			return posts.map((post)=>post._id===actions.payload._id?actions.payload:post);
		case 'DELETE':

			return posts.filter((post)=>post._id !== actions.payload)
		default:
			return posts;
	}
}