// about page. just wrote some dummy text about myself
// increased margin-bottom and made header text bigger for consistency
export default function About() {
  return (
    <div className="py-8 max-w-2xl">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
        About Me
      </h2>
      <p className="text-base text-gray-600 leading-relaxed mb-4">
        I am currently a senior student majoring in Computer Science, and I'm in my final 
        month of my frontend development internship. It's been a busy few weeks learning 
        React, states, contexts, and now multi-page routing.
      </p>
      <p className="text-base text-gray-600 leading-relaxed">
        Outside of coding, I like playing video games and drinking too much coffee. I hope 
        to build more complex websites soon.
      </p>
    </div>
  )
}
