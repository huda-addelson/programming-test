import React from 'react';
import { useSelector } from 'react-redux';
import CardPosting from '../Components/Posting/CardPosting';
import Title from '../Components/Title';
import Layout from '../Layout/Layout';

export default function Home() {
  const post = useSelector((state) => state.post.post);
  const filterPost = post.filter((p) => p.isPosting === true);

  return (
    <Layout>
      <div className='min-h-screen container mx-auto py-10'>
        <div className='flex flex-col gap-y-5'>
          <Title text='Post' />
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
            {filterPost.length > 0 ? (
              filterPost.map((post) => (
                <div key={post.id}>
                  <CardPosting title={post.title} content={post.content} />
                </div>
              ))
            ) : (
              <div>Belum ada Post</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
