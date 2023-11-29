import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
      <h1>Quiz</h1>
      <hr />
      <h2>Which device is recommended for the internet connection?</h2>
      <ul>
        <li>modem</li>
        <li>router</li>
        <li>LAN Cable</li>
        <li>Pendrive</li>
      </ul>
      <button>Next</button>
      <div className='index'>1 of 5 questions</div>
    </div>
  )
}

export default Quiz