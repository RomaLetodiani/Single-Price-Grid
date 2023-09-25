function App() {
  const listArr = [
    'Tutorials by industry experts',
    'Peer & expert code review',
    'Coding exercises',
    'Access to our GitHub repos',
    'Community forum',
    'Flashcard decks',
    'New videos every week',
  ];
  return (
    <div className="w-full min-w-[280px] min-h-screen bg-[#e5eff5] flex justify-center items-center">
      <div className="max-w-[640px] rounded-xl overflow-auto m-5">
        <div className="bg-[#fff] p-10">
          <h1 className="text-[#2ab2af] font-bold text-2xl">
            Join our community
          </h1>
          <h2 className="text-[#c0df34] text-lg font-bold mb-3 mt-5">
            30-day, hassle-free money back guarantee
          </h2>
          <p className="text-[#98a6bd]">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#2ab2af] flex-1 p-10">
            <h3 className="text-lg font-bold">Monthly Subscription</h3>
            <p className="mt-3 flex gap-3 items-center text-3xl font-bold">
              $29{' '}
              <span className="text-sm opacity-50 font-normal">per month</span>
            </p>
            <p className="text-[15px] mb-9 mt-2">
              Full access for less than $1 a day
            </p>
            <button className="w-full font-bold bg-[#c0df34] rounded-md p-3 transition-all hover:bg-[#b5d32f] hover:scale-110">
              Sign Up
            </button>
          </div>
          <div className="bg-[#5cc5c3] flex-1 p-10">
            <h3 className="text-lg font-bold">Why Us</h3>
            <ul className="mt-3 opacity-70">
              {listArr.map((item, index) => (
                <li key={index + 1}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
