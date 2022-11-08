import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './Components/Posts';
import PostLoadingComponent from './Components/PostLoading';


function ContexApi() {

    const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

    useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = 'http://127.0.0.1:9000/api/';
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);


  return (
    <div>
      <h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  )
}

export default ContexApi
