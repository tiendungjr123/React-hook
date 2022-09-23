import React,{useState, useEffect} from 'react'

export default function ExUseCallback({getData}) {

  const [comments, setComments] = useState([]);
  useEffect((getData) =>{
    console.log('useffect');
    getData('comments')
    .then((res) => res.json())
    .then((res) => {
      const comments = res.data;
      setComments(comments)
    })
    
  },[getData])
  return (
    <div>
      <p>Get comments</p>
      <p>{JSON.stringify(comments)}</p>
    </div>
  )
}
