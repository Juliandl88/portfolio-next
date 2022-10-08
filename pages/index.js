import Layout from "../components/Layout";
import { skills } from "../profile.js"

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/foto_julian.png" alt="foto_cv" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Julian De Lisio</h1>
              <h3>Fullstack Developer JR</h3>
              <p>
                lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor
                sit amet, consectetur adipis
              </p>
              <a href="/hireme">Hire Me!</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="row py-2">
      <div clasName="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            <div className="progress">
              <div className="progress-bar" role="progress-bar" style={{ width: "80%" }}>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div clasName="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
