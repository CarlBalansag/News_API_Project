
import './App.css';
import Nav from "./Components/Nav";
import Card from "./Components/Link";
import React, { useState, useEffect } from 'react';

function App( ) {

  const [topic, setTopic] = useState('us');
  const [articles, setArticles] = useState([]);
  const apiKey = '32f6d727f00b4b939f2eb4299435f9a7'
  console.log(topic)

  useEffect(() => {
    if(topic === 'sports') {
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
          .catch(err => console.log(err.message));
    }
    if(topic === 'us') {
      fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
        .catch(err => console.log(err.message));
    }
    if(topic === 'world') {
      fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
        .catch(err => console.log(err.message));
    }
    if(topic === 'politics') {
      fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
        .catch(err => console.log(err.message));
    }
    if(topic === 'entertainment') {
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
        .catch(err => console.log(err.message));
    }
  }, [topic])

  return (
    <>
      <Nav setTopic={setTopic} />
      <div className='grid grid-cols-6 gap-6'>
      {articles?.map(item => {
        return <Card title={item.title} description={item.description} image={item.urlToImage} link={item.url} key={item.title} />
      })}
      </div>
    </>
  )
}

export default App;
