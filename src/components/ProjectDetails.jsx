import { styles } from "../styles";
import { Link, useParams } from "react-router-dom";
import { projects } from "../constants";

export const ProjectDetails = () => {
  let { name } = useParams();

  const currentProject = projects.find((project) => {
    return project.name == name;
  });

  return (
    <div className='p-10 w-full'>
      <Link to='/#projects' className='hover:underline'>
        Go back
      </Link>
    

      <div className='mb-10'>
        <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#915EFF]'>{currentProject.name}</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {currentProject.slogan}
        </p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {currentProject.tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-between  flex-wrap'>
        <div className='w-fit max-w-[600px] mb-10'>
          <div className='mb-10 w-fit'>
            <p
              className={`text-white font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]`}>
              Context.
            </p>
            <p>{currentProject.context}</p>
          </div>
          <div>
            <div className='mr-10'>
              <p
                className={`text-white font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]`}>
                Description.
              </p>
              <p className='sm:text-[18px] text-[14px] text-secondary  tracking-wider'>
                {currentProject.description}
              </p>
            </div>
            {/* <div className='px-10 w-1/2'>
          <img
            src={jobit}
            alt='project_image'
            className='h-full w-full object-cover rounded-2xl'
          />
        </div> */}
          </div>
        </div>
        <div className='rounded-2xl w-full max-w-[700px] lg:-mt-20'>
          {currentProject.video && (
            <iframe
              className='rounded-2xl max-w-[700px]'
              allowfullscreen='allowfullscreen'
              frameborder='no'
              width="100%"
              height='400'
              src='https://wideo.co/embed/34065791623620986413?width=768&height=432&repeat=true&autoplay=true&hideControls=false'></iframe>
          )}
          {currentProject.gif && (
            <img
              className='rounded-2xl'
              src={currentProject.gif}
              alt={currentProject.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
