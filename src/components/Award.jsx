import video from '../assets/video.mp4'
import { ACHIEVEMENT } from '../constants'

const Award = () => {
  return (
    <div id='award'>
      <h2 className="mt-20 mb-10  text-center text-4xl font-semibold">My Awards</h2>
      <div className='mx-auto flex max-w-6xl flex-wrap'>
        <div className='w-full p-2 sm:w-1/2'>
            <video className='w-full rounded-lg' autoPlay muted loop playsInline>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
        <div className='w-full p-4 text-center sm:w-1/2'>
            <h2 className='mb-4 text-3xl'>{ACHIEVEMENT.title}</h2>
            <span className='mt-4 border-yellow-400 border-b py-2 text-xl font-semibold uppercase text-yellow-400'>{ACHIEVEMENT.award}</span>
            <p className='m-4 p-2 italic'>{ACHIEVEMENT.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Award
