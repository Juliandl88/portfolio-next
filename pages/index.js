import Layout from "../components/Layout";


const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/foto_julian.png" alt="foto_cv" className="img-fluid"/>
            </div>
            <div className="col-md-8">
              <h1>Julian De Lisio</h1>
              <h3>Fullstack Developer JR</h3>
              <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
              <a href="/hireme">Hire Me!</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default Index;
