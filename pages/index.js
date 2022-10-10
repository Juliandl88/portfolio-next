import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences } from "../profile.js";
import "bootswatch/dist/slate/bootstrap.min.css";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/foto_julian.png" alt="foto_cv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Julian De Lisio</h1>
              <h3>Fullstack Developer JR</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                iste consequuntur enim reprehenderit architecto consectetur cum?
                Totam ad molestias natus illum illo officia.
              </p>
              <Link href="/hireme">
                <a className="btn btn-outline-light">Hire Me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experiences</h1>

            <ul>

            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
