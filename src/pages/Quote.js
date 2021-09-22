const Quote = () => (
  <div
    style={{
      justifySelf: 'center',
      alignSelf: 'center',
    }}
  >
    <h2 className="title">Quote...</h2>
    <figure className="quote">
      <blockquote>
        &rdquo;It is magic until you understand it, and it is mathematics thereafter...&rdquo;
      </blockquote>
      <figcaption>
        &mdash;
        {' '}
        <cite>Bharati Krishna</cite>
      </figcaption>
    </figure>
  </div>
);

export default Quote;
