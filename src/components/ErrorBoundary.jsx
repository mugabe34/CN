import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-96 bg-gray-900 rounded-lg border border-purple-500/20">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              3D Model Loading
            </h3>
            <p className="text-gray-400 mb-4">
              The 3D model is being prepared. You can replace this with your own laptop model.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Retry
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
