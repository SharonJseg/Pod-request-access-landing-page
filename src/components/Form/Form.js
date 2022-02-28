import './Form.css';

const Form = () => {
  return (
    <form action='' className='form'>
      <div className='form__input-container'>
        <input
          type='text'
          className='form__input'
          placeholder='Email address'
        />
        <button className='form__button'>Request Access</button>
      </div>
      <span className='form__validation'>Oops! Please check your email</span>
    </form>
  );
};

export default Form;
