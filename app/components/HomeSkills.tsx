import { skillGroup, skills } from '@/app/configs/skills'
import cn from 'classnames'
import bg from '@/app/assets/images/abstract_boxes.webp'

function HomeSkills() {
  return (
    <section
      id="home-skills"
      style={{ backgroundImage: `url('${bg.src}')` }}
      className="bg-cover bg-right"
    >
      <div className="site-container py-16">
        <div className="text-center mb-10">
          <h2 className="section-header">My Tech Stack</h2>
          <p className="section-sub-header">
            Programming tools that I use a lot.
          </p>
        </div>
        <div className="flex justify-center flex-wrap mb-12 gap-2 max-w-2xl mx-auto">
          <button className="btn btn-primary btn-sm">All</button>
          {Object.values(skillGroup).map((group: any) => (
            <button key={group} className="btn btn-light btn-sm">
              {group}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6 gap-x-4">
          {skills.map((skill: any) => (
            <div
              className="h-16 flex gap-x-3 items-center mx-4"
              key={skill.name}
            >
              <div
                className={cn(
                  'w-14 h-14 rounded-full border-2 border-opacity-50 grid place-content-center font-bold shrink-0 uppercase bg-contain p-2.5 bg-white',
                  skill.className
                )}
              >
                <picture>
                  <img src={skill.logo} alt="React.js" />
                </picture>
              </div>
              <div className="flex flex-col gap-y-0.5">
                <p className="uppercase text-2xs font-light text-typo-500">
                  {skill.group}
                </p>
                <p className="font-bold">{skill.name}</p>
                <small className="text-xs font-medium text-typo-400">
                  {skill.years} {`year${skill.years > 1 ? 's' : ''}`}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeSkills
