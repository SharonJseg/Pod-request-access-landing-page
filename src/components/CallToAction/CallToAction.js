import Form from '../Form/Form';
import './CallToAction.css';

const podcasts = [
  {
    image: 'spotify.svg',
    alt: 'spotify',
  },
  {
    image: 'apple-podcast.svg',
    alt: 'apple podcasts',
  },
  {
    image: 'google-podcasts.svg',
    alt: 'google podcasts',
  },
  {
    image: 'pocket-casts.svg',
    alt: 'pocket casts',
  },
];

const CallToAction = () => {
  return (
    <main className='main'>
      <section className='hero'>
        <h1 className='hero__title'>
          Publish your podcasts{' '}
          <span className='hero__title-span'>everywhere.</span>
        </h1>
        <p className='hero__text'>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
        <Form />
        <ul className='hero__footer'>
          {podcasts.map((podcasts, index) => (
            <li key={index}>
              <img
                src={require(`../../images/desktop/${podcasts.image}`)}
                // src={`../../images/desktop/${podcasts.image}`} // doesn't work
                alt={podcasts.alt}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CallToAction;
