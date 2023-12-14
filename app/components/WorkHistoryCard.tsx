import Dot from '@/app/components/shared/Dot'
import imgIcube from '@/app/assets/images/icube.webp'

function WorkHistoryCard() {
  return (
    <div className="flex border rounded-lg shadow-lg">
      <div className="relative flex flex-col text-center gap-y-2 pt-12 px-6 shrink-0">
        <picture className="absolute left-1/2 -translate-x-1/2 -top-4 bg-primary rounded-full p-2 grid place-content-center shadow">
          <img
            src={imgIcube.src}
            alt="i-Cube Digital Solutions"
            className="w-7 h-7 object-contain"
          />
        </picture>
        <div>
          <p className="text-xs uppercase">Sep</p>
          <strong>2022</strong>
        </div>
        <div className="flex justify-center">
          <hr className="w-6 my-2" />
        </div>
        <div>
          <p className="text-xs uppercase">Sep</p>
          <strong>2022</strong>
        </div>
      </div>
      <div className="flex-1 border-l p-6">
        <h3 className="text-pinion-blue font-extrabold text-xl">
          Senior Web Developer
        </h3>
        <p className="font-semibold text-typo-600">
          i-Cube Digital Solutions, Inc.
        </p>
        <div className="py-6 space-y-3 text-sm">
          <p>Handled projects using various front-end and back-end tools.</p>
          <p>
            Also did Project Management tasks — talking to clients, handling
            Scrum meetings, setting up sprints and handling project requirements
            and documentations.
          </p>
        </div>
        <ul className="flex flex-wrap text-xs text-typo-500">
          <li>Vue.js</li>
          <li>
            <Dot />
          </li>
          <li>Nuxt.js</li>
          <li>
            <Dot />
          </li>
          <li>React.js</li>
          <li>
            <Dot />
          </li>
          <li>Python</li>
          <li>
            <Dot />
          </li>
          <li>Laravel</li>
          <li>
            <Dot />
          </li>
          <li>Jira</li>
          <li>
            <Dot />
          </li>
          <li>Confluence</li>
        </ul>
      </div>
    </div>
  )
}

export default WorkHistoryCard
