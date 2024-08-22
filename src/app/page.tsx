import NavBar from '@/app/ui/navbar'
import SideBar from './ui/sideBar';
import PostLayout from './ui/postsLayout';

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className='flex flex-row justify-around '>
        <div className='min-h-96 max-h-96 max-w-48 mt-5 ml-5 border flex flex-col items-center justify-center'>
          <SideBar />
        </div>
        <div className='min-h-screen max-h-screen min-w-screen-md max-w-screen-lg mt-5 ml-5 border flex flex-col items-center justify-center'>
          <PostLayout />
        </div>
      </div>
    </main>
  );
}
