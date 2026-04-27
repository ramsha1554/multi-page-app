// contact form. doesn't submit anywhere because I don't have a backend
// will prevent default so the page doesn't reload when clicked
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! (Not really, this is just a dummy form)')
  }

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-900 text-white rounded font-medium hover:bg-blue-800 transition-colors text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
