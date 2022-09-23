import React,{useState, useEffect} from 'react'

export default function ExUseCallback({getData}) {

  const [comments, setComments] = useState([]);
  useEffect(() =>{
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

// Với một hàm chỉ cho ra một giá trị cố định thì useCallback giúp cho hàm đó chỉ chạy một lần duy nhất khi chương trình thực thi
// Giúp tăng hiệu năng nhưng tốn bộ nhớ lưu trữ

/*

function App() {
  const [users, setUsers] = useState([]);
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };
  return (
    <>
      <p>Data: </p>
      <button onClick={handleClick}>Get users data</button>
      <p>{JSON.stringify(users)}</p>
      <ExUseCallback getData={getData} />
    </>
  );
}

export default App;

*/