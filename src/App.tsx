function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      {/* Animated gradient circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Title with subtle animation */}
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-pulse">
              Coming Soon
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-xl text-center text-gray-300 max-w-md">
            We're working on something exciting. Stay tuned!
          </p>

          {/* Email form */}
          <div className="w-full max-w-sm">
            <form className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors backdrop-blur-sm"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
