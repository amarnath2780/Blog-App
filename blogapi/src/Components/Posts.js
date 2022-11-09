import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



function Posts() {


  const [data , setData] = React.useState([])
  
  React.useEffect(() => {
    const fetchdata = async () => {
      await fetch('http://127.0.0.1:9000/api/')
      .then((res) => res.json() )
      .then((data) => {
        setData(data)
        console.log(data);
      })
     };
     fetchdata();
  }, []);
  

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  return (
    <div>
      {data.map(post => (
      <Card style={{ width: '18rem' }}>
        <p>__________________________________________</p>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.content}
          {post.author}
        </Card.Text>
        

        <p>__________________________________________</p>
        </Card.Body>
      </Card>
      
       ))}  
    </div>
  );
}

export default Posts
