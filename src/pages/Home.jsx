// home page with simple header and paragraph
// increased the spacing and font size to look cleaner
export default function Home() {
  return (
    <div className="py-8 max-w-2xl">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
        Welcome to My Portfolio
      </h2>
      <p className="text-base text-gray-600 leading-relaxed mb-6">
        Hey there! Welcome to my simple learning website. I created this multi-page app 
        to practice React Router. Right now it has a few sections and works on mobile.
      </p>
      <div className="p-6 bg-white border border-gray-200 rounded-md">
        <h3 className="text-lg font-bold text-gray-950 mb-2">Current Stack</h3>
        <p className="text-sm text-gray-600">
          I am using React, Vite, and Tailwind CSS. The routes are managed dynamically by React Router DOM.
        </p>
      </div>
    </div>
  )
}
