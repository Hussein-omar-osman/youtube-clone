import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;

const Home = () => {
  const [result, setResult] = useState([]);
  console.log(result);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1fa41a6d30msh4c5343aa94a66fcp1c08f6jsn9a4897ce4c15',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
      },
    };

    let res = await fetch(
      'https://youtube138.p.rapidapi.com/search/?q=new',
      options
    );
    let data = await res.json();
    console.log(data);
    setResult(data.contents);
    console.log(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {result &&
        result.map((item, index) => (
          <Card
            key={index}
            videoId={item.video.videoId}
            title={item.video.title}
            avatarImg={item.video.author.avatar[0].url}
            thumbImg={item.video.thumbnails[0].url}
            totalViews={item.video.stats.views}
            publishedTime={item.video.publishedTimeText}
          />
        ))}
    </Container>
  );
};

export default Home;
