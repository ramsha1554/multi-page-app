// about page. just wrote some dummy text about myself
// styling is basic for now
export default function About() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-600 leading-relaxed max-w-xl mb-4">
        I am currently a senior student majoring in Computer Science, and I'm in my final 
        month of my frontend development internship. It's been a busy few weeks learning 
        React, states, contexts, and now multi-page routing.
      </p>
      <p className="text-gray-600 leading-relaxed max-w-xl">
        Outside of coding, I like playing video games and drinking too much coffee. I hope 
        to build more complex websites soon.
      </p>
    </div>
  )
}
