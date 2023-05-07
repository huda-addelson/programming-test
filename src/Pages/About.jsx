import React from 'react';
import CardAbout from '../Components/CardAbout';
import Title from '../Components/Title';
import Layout from '../Layout/Layout';

export default function About() {
  return (
    <Layout>
      <div className='min-h-screen py-10'>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-3'>
            <div className='w-40 h-40 rounded-full'>
              <img
                src='./images/profile.jpg'
                alt='profile'
                className='w-full h-full rounded-full'
              />
            </div>
            <div>
              <h2 className='text-xl font-semibold'>Muhammad Khoirul Huda</h2>
              <p>Kudus, Jawa Tengah</p>
            </div>
            <div className='flex flex-col gap-y-3 mt-5'>
              <Title text='Education' />
              <CardAbout
                text='University of Muria Kudus'
                title='Bachelor Degree, Informatics Engineering'
                year='2017 - 2022'
              />
              <CardAbout
                text='SMK NU Al-Hidayah'
                title='Computer and Network Engineering'
                year='2014 - 2017'
              />
            </div>
            <div className='flex flex-col gap-y-3 mt-5'>
              <Title text='Work Experience' />
              <CardAbout
                text='Junior Software Engineer • Full-time'
                title='Refactory - Yogyakarta, Indonesia.'
                lists={[
                  '• Develop Front End Web using framework React, Next & Vue.',
                  '• Develop Admin Dashboard, added new features',
                ]}
              />
              <CardAbout
                text='Software Engineer Intern • Full-time'
                title='Refactory - Yogyakarta, Indonesia.'
                lists={[
                  '• Develop Front End Web using framework React, Next & Vue.',
                  '• Develop Point of Sales System, fixed bugs in features',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
