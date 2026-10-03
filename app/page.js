'use client';

import { useState } from 'react';

// 데이터는 저장하지 않습니다. 새로고침하면 목록이 초기화됩니다.
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function submit(e) {
    e.preventDefault();
    const post = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      author: '익명',
      createdAt: new Date().toLocaleString('ko-KR'),
    };
    setPosts([post, ...posts]);
    setTitle('');
    setContent('');
  }

  return (
    <main>
      <h1>대회 참가자 문의</h1>
      <p className="sub">참가자 질의 응답</p>

      <form onSubmit={submit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="문의 내용" />
        <button disabled={!title.trim() || !content.trim()}>등록</button>
      </form>

      {posts.length === 0 ? (
        <div className="empty">아직 등록된 문의가 없습니다.</div>
      ) : (
        <ul>
          {posts.map((p) => (
            <li key={p.id}>
              <span className="tag">Q&amp;A</span>
              <div className="title">{p.title}</div>
              <p className="body">{p.content}</p>
              <div className="meta">{p.author} · {p.createdAt}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
