// home page with simple header and paragraph
// using simple padding and margin so it doesn't look squished
export default function Home() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h2>
      <p className="text-gray-600 leading-relaxed max-w-xl">
        Hey there! Welcome to my simple learning website. I created this multi-page app 
        to practice React Router. Right now it doesn't have much, but I'm going to add 
        a navbar and styling later this week. I'm just happy the routes will work.
      </p>
    </div>
  )
}
