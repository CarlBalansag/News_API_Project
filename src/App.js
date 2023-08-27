
import './App.css';
import Nav from "./Components/Nav";
import Card from "./Components/Link";
import React, { useState, useEffect } from 'react';

function App( ) {

  const [topic, setTopic] = useState('BreakingNews');


  function BreakingNews() {

    
    let [articlesData, setData] = useState(null);
    const apiKey = '32f6d727f00b4b939f2eb4299435f9a7'

    useEffect(() => {
      async function fetchData() {
        try {
          fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            setData(data.articles)
          })
          .catch(error => console.error(error));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      

      fetchData();
    }, []);

    // console.log(articlesData)


    return(
      <>
        {Object.keys(articlesData || {}).map(key =>{
          const item = articlesData[key];

          let img = item.urlToImage

          return (
            <Card
              
              title={item.title}
              description={item.description}
              image={img}
              link={item.url}
              key = {item.key}

            />
          )
        })}
      </>
    )

  }


  function Sports() {

    
    let [articlesData, setData] = useState(null);
    const apiKey = '32f6d727f00b4b939f2eb4299435f9a7'

    useEffect(() => {
      async function fetchData() {
        try {
          fetch(`
            https://newsapi.org/v2/everything?q=Sports&from=2023-08-21&to=2023-08-21&sortBy=popularity&apiKey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            setData(data.articles)
          })
          .catch(error => console.error(error));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      

      fetchData();
    }, []);

    // console.log(articlesData)


    return(
      <>
        {Object.keys(articlesData || {}).map(key =>{
          const item = articlesData[key];

          let img = item.urlToImage

          return (
            <Card
              
              title={item.title}
              description={item.description}
              image={img}
              link={item.url}
              key = {item.key}

            />
          )
        })}
      </>
    )
  }


  function Politics() {

    
    let [articlesData, setData] = useState(null);
    const apiKey = '32f6d727f00b4b939f2eb4299435f9a7'

    useEffect(() => {
      async function fetchData() {
        try {
          fetch(`
            https://newsapi.org/v2/everything?q=Politics&from=2023-08-21&to=2023-08-21&sortBy=popularity&apiKey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            setData(data.articles)
          })
          .catch(error => console.error(error));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      

      fetchData();
    }, []);

    // console.log(articlesData)


    return(
      <>
        {Object.keys(articlesData || {}).map(key =>{
          const item = articlesData[key];

          let img = item.urlToImage

          return (
            <Card
              
              title={item.title}
              description={item.description}
              image={img}
              link={item.url}
              key = {item.key}

            />
          )
        })}
      </>
    )
  }


  function WorldNews() {

    
    let [articlesData, setData] = useState(null);
    const apiKey = '32f6d727f00b4b939f2eb4299435f9a7'

    useEffect(() => {
      async function fetchData() {
        try {
          fetch(`
            https://newsapi.org/v2/everything?q=International&from=2023-08-21&to=2023-08-21&sortBy=popularity&apiKey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            setData(data.articles)
          })
          .catch(error => console.error(error));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      

      fetchData();
    }, []);

    // console.log(articlesData)


    return(
      <>
        {Object.keys(articlesData || {}).map(key =>{
          const item = articlesData[key];

          let img = item.urlToImage

          return (
            <Card
              
              title={item.title}
              description={item.description}
              image={img}
              link={item.url}
              key = {item.key}

            />
          )
        })}
      </>
    )
  }

  function USNews() { 
    
    
    let [articlesData, setData] = useState(null);
    const apiKey = '32f6d727f00b4b939f2eb4299435f9a7'

    useEffect(() => {
      async function fetchData() {
        try {
          fetch(`
            https://newsapi.org/v2/everything?q=America&from=2023-08-21&to=2023-08-21&sortBy=popularity&apiKey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            setData(data.articles)
          })
          .catch(error => console.error(error));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      

      fetchData();
    }, []);

    // console.log(articlesData)


    return(
      <>
        {Object.keys(articlesData || {}).map(key =>{
          const item = articlesData[key];

          let img = item.urlToImage

          return (
            <Card
              
              title={item.title}
              description={item.description}
              image={img}
              link={item.url}
              key = {item.key}

            />
          )
        })}
      </>
    )
  }

  let type = ""

  if (topic === "BreakingNews"){
    type = BreakingNews();
  } else if (topic === "Sports") {
    type = Sports();
  } else if (topic === "Politics") {
    type = Politics();
  } else if (topic === "USNews") {
    type = USNews();
  } else if ( topic === "WorldNews") {
    type = WorldNews()
  } else {
    type = BreakingNews()
    console.log("Error on the type")
  }

  console.log(topic);

  return (
    <div className="App bg-slate-100	">
      <Nav setTopic={setTopic} />

      <main className="inline-grid grid-cols-5 gap-12">

      {type}
        
      </main>

    </div>
  );
}

export default App;

      {/* {topic === "BreakingNews" && BreakingNews()}
      {topic === "Sports" && Sports()}
      {topic === "Politics" && Politics()}
      {topic === "USNews" && USNews()}
      {topic === "WorldNews" && WorldNews()} */}