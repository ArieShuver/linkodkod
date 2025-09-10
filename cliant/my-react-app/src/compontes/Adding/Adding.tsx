import React, { use, useEffect, useState } from 'react'
import "./adding.css"
import { addPost } from '../../api/postsApi'
import type { Post } from '../post/post';
import { data } from 'react-router';

export default function Adding() {
  const [img, setImg] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [input, setPost] = useState<Post>();
  const [log, setLog] = useState<any>();
  const [endReading, setEndReading] = useState<boolean>(false);

  const time = new Date();

  useEffect(() => {
    (async () => {
      if (input)
      try {
        const res = await addPost(input);
        setLog(res.message)
      }
      catch (error) {
        setLog(error);
      }
      finally {
        setEndReading(true)
      }
    }
    )();
  }, [input]);
  return (
    <div className='add'>
      <h2>הוספת פוסט</h2>
      <label htmlFor="img">img</label>
      <input id='img' type="text" onChange={(e) => setImg(e.target.value)} />

      <label htmlFor="content">content</label>
      <input id='content' type="textarea" onChange={(e) => setContent(e.target.value)} />

      <label htmlFor="img">name</label>
      <input id="name" type="text" onChange={(e) => setName(e.target.value)} />

      <button onClick={() => setPost({ img, content, name, id: time.getSeconds(), time: time.getDate(), like: 0 })}>שלח פוסט</button>
      {(endReading) && <h4>{JSON.stringify(log)}</h4>}
    </div>
  )
}

