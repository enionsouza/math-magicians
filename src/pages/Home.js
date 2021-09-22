const Home = () => (
  <div
    style={{
      padding: '5em',
      justifySelf: 'center',
      alignSelf: 'center',
    }}
  >
    <h2>Welcome to our Page</h2>
    <p>
      &quot;Math magicians&quot; is a website for all fans of mathematics.
      It is a Single Page App (SPA) that allows users to:
      (1) Make simple calculations, and (2) Read a math-related quote.
    </p>
    <p>
      This app was built using
      {' '}
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">ReactJS</a>
      !
    </p>
  </div>
);

export default Home;
